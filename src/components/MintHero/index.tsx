import { useRef } from 'react';
import { Inter } from 'next/font/google';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';
import { CircleIcon } from '@/components/Icons';
import { toast } from 'react-toastify';
import { MintHeroContainer } from './styles';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const MintHero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const inputRef = useRef<HTMLInputElement>(null);

  const handleMint = () => {
    if (!inputRef.current?.value) toast.error('Email is required');
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
            ref={inputRef}
            required
            name='email'
            type='email'
            placeholder='Enter your email'
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
              Mint
            </StyledButton>

            <CircleIcon sx={{ fontSize: matches ? 54 : 40 }} />
          </div>

          <Typography variant={matches ? 'h5' : 'h4Mobile'}>
            Price: 0.0169 ETH{' '}
          </Typography>
        </FlexBox>
      </Section>

      <Section className='mint-asset'></Section>
    </MintHeroContainer>
  );
};

export default MintHero;
