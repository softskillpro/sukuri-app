import { useEffect, useState } from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { GlassMorph } from '@/components/Common/GlassMorph';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { CircleIcon } from '@/components/Icons';
import { SubscriptionManagementHeroContainer } from './styles';
import { Product } from '@/types';

interface SubscriptionManagementHeroProps {
  product?: any;
  currency: string;
  handleCurrencyChange: (_currency: string) => void;
}

const SubscriptionManagementHero = ({
  product,
  currency,
  handleCurrencyChange,
}: SubscriptionManagementHeroProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(
    undefined,
  );

  useEffect(() => {
    if (product) setCurrentProduct(product.project);
  }, [product]);

  return (
    <SubscriptionManagementHeroContainer>
      <HeroGlow />

      <div className='currency-switcher-wrapper'>
        <CurrencySwitcher
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
        />
      </div>

      <Section className='hero-contents'>
        <Typography variant={matches ? 'h2' : 'h2Mobile'} className='hero-name'>
          {currentProduct?.name}
        </Typography>

        <Typography
          variant={matches ? 'body2' : 'body1Mobile'}
          className='hero-content'
        >
          {currentProduct?.short_description}
        </Typography>
      </Section>

      <Section className='hero-assets'>
        <FlexBox className='hero-assets-1'>
          <GlassMorph sx={{ opacity: 0.4 }} />

          <div className='discount-time'>
            <Typography variant='h3'>
              18
              <br />
              DAYS
            </Typography>

            <Typography variant='bodyBoldMobile'>Remaining</Typography>
          </div>

          <div className='subscription-price'>
            <Typography variant={matches ? 'h2' : 'h3'}>
              {currency === 'USD' ? '$92' : '0.056Ξ'}
            </Typography>

            <Typography variant='h6'>Remaining</Typography>
          </div>
        </FlexBox>

        <div className='hero-assets-2'>
          <GlassMorph sx={{ opacity: 0.4 }} />

          <Typography
            variant='bodyBoldMobile'
            component='div'
            textAlign='center'
            className='tier'
          >
            Tier One Membership
          </Typography>

          <Typography
            variant='bodyBoldMobile'
            component='div'
            textAlign='center'
            className='active-sub'
          >
            Active Subscription
          </Typography>

          <CircleIcon sx={{ fontSize: matches ? 60 : 46 }} />
        </div>
      </Section>
    </SubscriptionManagementHeroContainer>
  );
};

export default SubscriptionManagementHero;
