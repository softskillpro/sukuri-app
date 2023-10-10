import { useEffect } from 'react';
import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import MintHero from '@/components/MintHero';
import { FlexBox } from '@/components/Common/FlexBox';
import { Section } from '@/components/Common/Section';
import Newsletter from '@/components/Newsletter';
import { MintContainer } from '@/styles/mint';
import useRuntimeContext from '@/hooks/useRuntimeContext';

const Mint = () => {
  const { fetchHandler } = useRuntimeContext();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    fetchHandler(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MintContainer>
      <MintHero />

      <Section className='mint-grid refer-friends'>
        <FlexBox className='mint-contents'>
          <Typography variant={matches ? 'h3' : 'h3Mobile'}>
            Refer Your Friends
          </Typography>

          <Typography
            variant={matches ? 'body1' : 'body2Mobile'}
            color='accent.light'
          >
            Your display name becomes your referral code. 5% of every purchase
            made with your code will go back to you. An additional 0.5% will be
            earned through all secondary referrals. In addition to Ether, you
            will also earn points for all referrals you make! Leaderboard coming
            soon!
          </Typography>
        </FlexBox>

        <Image
          src='/images/mint-4.png'
          width={300}
          height={300}
          alt='First To Know'
          className='mint-asset mint-asset3'
        />
      </Section>

      <Section className='mint-grid'>
        <Image
          src='/images/mint-3.png'
          width={300}
          height={300}
          alt='First To Know'
          className='mint-asset mint-asset2'
        />

        <FlexBox className='mint-contents'>
          <Typography variant={matches ? 'h3' : 'h3Mobile'}>
            Earn rewards!
          </Typography>

          <Typography
            variant={matches ? 'body1' : 'body2Mobile'}
            color='accent.light'
          >
            Once you have purchased a Prime Pass, complete quests, provide
            feedback and earn badges that are dynamically added to your pass.
            Collect all the badges to get access to prizes down the road!
          </Typography>
        </FlexBox>
      </Section>

      <Section className='mint-grid'>
        <FlexBox className='mint-contents'>
          <Typography variant={matches ? 'h3' : 'h3Mobile'}>
            Be the first to know...
          </Typography>

          <Typography
            variant={matches ? 'body1' : 'body2Mobile'}
            color='accent.light'
          >
            As a valued early supporter, you will be the first to see updates to
            our protocol as we build in public. Enjoy access to a private
            channel in our discord where you can chat with the founders and
            receive that sweet, sweet alpha.
          </Typography>
        </FlexBox>

        <Image
          src='/images/mint-2.png'
          width={300}
          height={300}
          alt='First To Know'
          className='mint-asset mint-asset1'
        />
      </Section>

      <Newsletter className='mint-newsletter' />
    </MintContainer>
  );
};

export default Mint;
