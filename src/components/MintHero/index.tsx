import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  ChangeEvent,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from '@wagmi/core';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';
import { Loader } from '@/components/Common/Loader';
import SpinnerModal from '@/components/SpinnerModal';
import { CircleIcon } from '@/components/Icons';
import { MintHeroContainer } from './styles';
import { getAddress, parseEther } from 'viem';
import ABI from '@/contract/primeAbi.json';

const inter = Inter({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const whiteListed = ['0xA94da37c7A81874661D49BA06a12D8B262Fa99c3'];

const MintHero = () => {
  const router = useRouter();
  const { ref }: any = router.query;

  const { isConnected, address } = useAccount();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const inputCodeRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);
  const [price, setPrice] = useState(0.018777);

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

    let _price = 0.018777;

    if (user[0]) {
      _price = 0.0142;
    } else if (code) {
      _price = 0.0169;
    }

    setPrice(_price);
  }, [address, ref]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    let _name = e.target.value;

    // Strip leading and trailing spaces
    _name = _name.trim();

    // Remove special characters, allowing only A-Z and 0-9
    _name = _name.replace(/[^A-Za-z0-9]/g, '');

    // Convert to uppercase
    _name = _name.toUpperCase();

    // Limit the name to 12 characters
    _name = _name.slice(0, 12);

    setName(_name);
    e.target.value = _name;
  };

  const handleMint = async () => {
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

      const config = await prepareWriteContract({
        address: getAddress(`${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`),
        abi: ABI,
        functionName: 'mint',
        args: [name, code],
        value: parseEther(`${price}`),
      });

      const { hash } = await writeContract(config).catch((err: any) => {
        console.error(err);
        switch (err.metaMessages?.[0]) {
          case 'Error: InvalidValue()':
            toast.error('Invalid Value Provided. Please try again.');
            break;
          case 'Error: NameUsed()':
            toast.error('Name has been claimed already.');
            break;
          case 'Error: AlreadyUsedRef()':
            toast.error(
              'You may only use a ref code one time. Please try again without a reference code.',
            );
            break;
          case 'Error: InvalidReferral()':
            toast.error(
              'You have entered an invalid referral code. Please check your code and try again.',
            );
            break;
          case 'Error: InvalidDiscountValue()':
            toast.error('Invalid Value Provided. Please try again.');
            break;
          default:
            toast.error(
              'An unknown error has occurred. Do you have enough ETH?',
            );
            break;
        }
      });

      setTxHash(hash);

      setOpen(1);

      waitForTransaction({
        chainId: 5,
        hash,
        timeout: 50000,
      }).then(() => {
        setOpen(2);
      });
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
              value={name}
              required
              name='name'
              type='text'
              placeholder='Enter your display name'
              maxLength={12}
              className='input-email'
              onChange={handleNameChange}
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
