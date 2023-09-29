import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { GlassMorph } from '@/components/Common/GlassMorph';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { StyledButton } from '../Common/StyledButton';
import { ProductHeroContainer } from './styles';
import formatUnits from '@/utils/formatUnits';
import { Product, Tier } from '@/types';
import { numberEn } from '@/constants';

interface ProductHeroProps {
  product: Product;
}

const ProductHero = ({ product }: ProductHeroProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const activeId = 0;

  return (
    <ProductHeroContainer>
      <HeroGlow />

      <Image
        src='/images/product_badge.jpeg'
        width={92}
        height={92}
        alt='Product Badge'
        className='product-badge'
      />

      <div className='currency-switcher-wrapper'>
        <CurrencySwitcher />
      </div>

      <Section className='hero-contents'>
        <Typography variant={matches ? 'h2' : 'h2Mobile'} className='hero-name'>
          {product.name}
        </Typography>

        <Typography
          variant={matches ? 'body2' : 'body1Mobile'}
          className='hero-content'
        >
          {product.short_description}
        </Typography>
      </Section>

      <Section className='hero-assets'>
        <FlexBox className='product-volume'>
          <GlassMorph sx={{ opacity: 0.4 }} />

          <Typography variant='bodyBoldMobile' textAlign='center'>
            Volume
          </Typography>

          <Typography variant='h4' textAlign='center'>
            {product.member_count}
          </Typography>

          <Typography variant='body4' textAlign='center'>
            Left
          </Typography>
        </FlexBox>

        <FlexBox className='product-detail'>
          <FlexBox className='membership-tier'>
            <GlassMorph sx={{ opacity: 0.4 }} />

            <FlexBox className='membership'>
              <Typography variant='bodyBoldMobile' textAlign='center'>
                Membership
              </Typography>

              <Typography variant='body3' mb={1} textAlign='center'>
                Tier {numberEn[activeId]}
              </Typography>

              <Typography variant='h3' textAlign='center'>
                {product.tiers.length > 0 &&
                  formatUnits(product.tiers[0]?.price, product.tiers[0]?.unit)}
              </Typography>
            </FlexBox>

            <FlexBox className='tier'>
              <Typography variant='bodyBoldMobile' textAlign='center'>
                Available Tiers
              </Typography>

              {product.tiers.map((tier: Tier, id: number) => (
                <Typography
                  variant='body3'
                  key={tier.tier_id}
                  textAlign='center'
                  sx={{
                    borderBottom: activeId === id ? '1px solid white' : 'none',
                  }}
                >
                  Tier {numberEn[id]}
                </Typography>
              ))}
            </FlexBox>
          </FlexBox>

          <div className='subscribe-membership'>
            <GlassMorph sx={{ opacity: 0.4 }} />

            <Typography
              variant='bodyBoldMobile'
              component='div'
              textAlign='center'
              className='tier'
            >
              Tier {numberEn[activeId]} Membership
            </Typography>

            <StyledButton className='subscribe-btn'>Subscribe Now</StyledButton>
          </div>
        </FlexBox>
      </Section>
    </ProductHeroContainer>
  );
};

export default ProductHero;
