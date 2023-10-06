import { memo } from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import SubscriptionInfoCard from '@/components/SubscriptionInfoCard';
import { ETHIcon } from '@/components/Icons';
import { SubscriptionHeroContainer } from './styles';

interface SubscriptionHeroProps {
  numOfActive?: number;
  currency: string;
  handleCurrencyChange: (_currency: string) => void;
}

const SubscriptionHero = ({
  numOfActive = 0,
  currency,
  handleCurrencyChange,
}: SubscriptionHeroProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <SubscriptionHeroContainer>
      <HeroGlow />

      <div className='currency-switcher-wrapper'>
        <CurrencySwitcher
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
        />
      </div>

      <Section className='hero-contents'>
        <Typography variant={matches ? 'h2' : 'h2Mobile'} className='hero-name'>
          Hi Raymond,
        </Typography>

        <Typography
          variant={matches ? 'body1' : 'body1Mobile'}
          className='hero-content'
        >
          You can manage all your subscriptions here.
        </Typography>
      </Section>

      <Section className='hero-assets'>
        <SubscriptionInfoCard
          title={'Active\nSubscriptions'}
          value={numOfActive.toString()}
          className='active-subscriptions'
        />

        <SubscriptionInfoCard
          title={'Total\nSubscriptions'}
          value='22'
          className='total-subscriptions'
        />

        <SubscriptionInfoCard
          title={'Monthly\nSpend'}
          value='12'
          className='monthly-spend'
          icon={<ETHIcon />}
        />
      </Section>
    </SubscriptionHeroContainer>
  );
};

export default memo(SubscriptionHero);
