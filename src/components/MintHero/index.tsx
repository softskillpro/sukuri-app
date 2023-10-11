import { memo, useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import { waitForTransaction } from '@wagmi/core';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';
import { Loader } from '@/components/Common/Loader';
import SpinnerModal from '@/components/SpinnerModal';
import { CircleIcon } from '@/components/Icons';
import useContract from '@/hooks/useContract';
import { MintHeroContainer } from './styles';

const inter = Inter({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const whiteListed = ['0xA94da37c7A81874661D49BA06a12D8B262Fa99c3'];

const MintHero = () => {
  const router = useRouter();
  const { ref }: any = router.query;

  const { primeContract } = useContract();

  const { isConnected, address } = useAccount();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputCodeRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (ref && inputCodeRef.current) {
      inputCodeRef.current.value = ref;
    }
  }, [ref]);

  useEffect(() => {
    const code = ref;

    // Check if user is whitelisted
    const user = whiteListed.map((_user: string) => {
      if (_user.toLowerCase() === address?.toLowerCase()) return _user;
    });

    let _price = '0.018777';

    if (user[0]) {
      _price = '0.0142';
    } else if (code) {
      _price = '0.0169';
    }

    setPrice(_price);
  }, [address, ref]);

  const handleMint = async () => {
    const name = inputNameRef.current?.value;
    const code = inputCodeRef.current?.value || '';

    if (!name) {
      toast.error('Name is required');
      return;
    }

    if (!isConnected) {
      toast.error('Please connect Wallet!');
      return;
    }

    try {
      setLoading(true);

      if (primeContract && primeContract.mint) {
        const valueInWei = ethers.parseEther(price);
        const gasLimit = 200000;
        const gasPrice = ethers.parseUnits('20', 'gwei');

        const { hash } = await primeContract.mint(name, code, {
          value: valueInWei,
          gasLimit: gasLimit,
          gasPrice: gasPrice,
        });

        setTxHash(hash);

        setOpen(1);

        await waitForTransaction({
          chainId: 5,
          hash,
          timeout: 50000,
        });

        setOpen(2);
      }
    } catch (err: any) {
      toast.error(err?.message || err);
      setOpen(0);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = useCallback(() => {
    setOpen(0);
  }, []);

  return (
    <>
      <MintHeroContainer>
        <HeroGlow />

        <Section className='mint-section'>
          <Typography variant={matches ? 'h2' : 'h2Mobile'}>
            Sukuri Prime
          </Typography>

          <Typography variant={matches ? 'body1' : 'body1Mobile'}>
            In celebration of Sukuri’s initial launch, join us in minting a
            Prime Pass that represents your participation in our off-chain beta,
            but that’s not all...
          </Typography>

          <form className={`${inter.className}`}>
            <div className='input-glow' />

            <input
              ref={inputNameRef}
              required
              name='email'
              type='text'
              placeholder='Enter your display name'
              className='input-email'
            />
          </form>

          <form className={`${inter.className}`}>
            <div className='input-glow' />

            <input
              ref={inputCodeRef}
              readOnly
              required
              name='email'
              type='text'
              placeholder='Enter a referral code (optional)'
              className='input-email'
            />
          </form>

          <FlexBox className='mint-btn-wrapper'>
            <div className='mint-btn-wrap'>
              <StyledButton
                variant='Secondary'
                className='mint-btn'
                disabled={loading}
                onClick={handleMint}
              >
                Purchase
                {loading && <Loader />}
              </StyledButton>

              <CircleIcon sx={{ fontSize: matches ? 54 : 40 }} />
            </div>

            <Typography variant={matches ? 'h5' : 'h4Mobile'}>
              Price: {price} ETH
            </Typography>
          </FlexBox>
        </Section>

        <Section className='mint-asset'>
          <Image
            src='/images/mint_hero.png'
            width={300}
            height={300}
            priority
            alt='Mint Hero'
            className='mint-hero-img'
          />
        </Section>
      </MintHeroContainer>

      <SpinnerModal
        open={open !== 0}
        state={open}
        txHash={txHash}
        handleClose={handleClose}
      />
    </>
  );
};

export default memo(MintHero);
