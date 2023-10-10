import { memo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';
import { Loader } from '@/components/Common/Loader';
import { CircleIcon } from '@/components/Icons';
import useContract from '@/hooks/useContract';
import { MintHeroContainer } from './styles';

const inter = Inter({
  // weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

function CustomToast({ linkUrl }: { linkUrl: string }) {
  const url = `https://goerli.etherscan.io/tx/${linkUrl}`;
  return (
    <div>
      Your tx hash is{' '}
      <Link href={url} target='_blank'>
        {linkUrl}
      </Link>
    </div>
  );
}

const MintHero = () => {
  const { primeContract } = useContract();

  const { isConnected } = useAccount();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputCodeRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    const name = inputNameRef.current?.value;
    const code = inputCodeRef.current?.value || '';

    let price = '0.0169'; // '0.0142';

    if (code) price = (0.9 * Number(price)).toString();

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

        const res = await primeContract.mint(name, code, {
          value: valueInWei,
          gasLimit: gasLimit,
          gasPrice: gasPrice,
        });

        toast.info(<CustomToast linkUrl={res.hash} />, { autoClose: false });
      }
    } catch (err: any) {
      toast.error(err?.message || err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MintHeroContainer>
      <HeroGlow />

      <Section className='mint-section'>
        <Typography variant={matches ? 'h2' : 'h2Mobile'}>
          Sukuri Prime
        </Typography>

        <Typography variant={matches ? 'body1' : 'body1Mobile'}>
          In celebration of Sukuri’s initial launch, join us in minting a Prime
          Pass that represents your participation in our off-chain beta, but
          that’s not all...
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
              onClick={handleMint}
            >
              Purchase
              {loading && <Loader />}
            </StyledButton>

            <CircleIcon sx={{ fontSize: matches ? 54 : 40 }} />
          </div>

          <Typography variant={matches ? 'h5' : 'h4Mobile'}>
            Price: 0.0169 ETH
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
  );
};

export default memo(MintHero);
