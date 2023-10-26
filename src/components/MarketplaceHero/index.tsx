import { memo } from 'react';
import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { HeroGlow } from '@/components/Common/HeroGlow';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { CircleIcon } from '@/components/Icons';
import { MarketplaceHeroContainer } from './styles';

interface MarketplaceHeroProps {
  currency: string;
  handleCurrencyChange: (_currency: string) => void;
}

const MarketplaceHero = ({
  currency,
  handleCurrencyChange,
}: MarketplaceHeroProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <MarketplaceHeroContainer>
      <HeroGlow />

      <div className='currency-switcher-wrapper'>
        <CurrencySwitcher
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
        />
      </div>

      <FlexBox className='hero-contents-wrapper'>
        <FlexBox className='hero-contents'>
          <Typography variant={matches ? 'h2' : 'h2Mobile'}>
            Take control of your subscriptions
          </Typography>

          <Typography
            variant={matches ? 'body1' : 'body1Mobile'}
            maxWidth='80%'
          >
            Buy, sell and trade the crypto products you use every day.
          </Typography>

          <div className='explorer-marketplace-wrapper'>
            <Typography
              className='explorer-marketplace'
              variant='bodyBoldMobile'
              component='div'
            >
              Explore Marketplace
            </Typography>

            <CircleIcon sx={{ fontSize: 54 }} />
          </div>
        </FlexBox>
      </FlexBox>

      <div className='hero-img-wrapper'>
        {!matches && (
          <div
            className='marketplace-hero-glow'
            style={{ opacity: 1, zIndex: -3 }}
          />
        )}

        <div className='hero-img-wrap'>
          <Image
            src='/images/marketplace-hero.png'
            width={400}
            height={400}
            priority
            alt='Marketplace Hero'
            className='hero-img'
          />
        </div>

        <FlexBox className='hero-img-contents-wrapper'>
          <div className='circle-icon-wrapper'>
            <Typography
              className='hero-img-contents'
              variant='bodyBoldMobile'
              component='div'
            >
              Subscribe/buy
              <br />
              digital products
            </Typography>

            <CircleIcon sx={{ fontSize: 30 }} />
          </div>

          <Typography
            className='hero-img-contents'
            variant='bodyBoldMobile'
            component='div'
          >
            Create & sell
            <br />
            digital products
          </Typography>
        </FlexBox>
      </div>
    </MarketplaceHeroContainer>
  );
};

export default memo(MarketplaceHero);
