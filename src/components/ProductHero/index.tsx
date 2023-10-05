import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { GlassMorph } from '@/components/Common/GlassMorph';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { Section } from '@/components/Common/Section';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { StyledButton } from '@/components/Common/StyledButton';
import { Loader } from '@/components/Common/Loader';
import { ProductHeroContainer } from './styles';
import formatUnits from '@/utils/formatUnits';
import { Product, Tier } from '@/types';
import { api } from '@/utils/api';

interface ProductHeroProps {
  tierId?: string;
  product: Product;
  currency: string;
  handleCurrencyChange: (_currency: string) => void;
}

const ProductHero = ({
  tierId,
  product,
  currency,
  handleCurrencyChange,
}: ProductHeroProps) => {
  const productId = product.id;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const subscribed = api.subscribe.subscribed.useQuery({
    id: product.id,
  });

  const subscribeMutationProject = api.subscribe.subscribe.useMutation();

  const [productTier, setProductTier] = useState(product.tiers[0]);

  const isSubscribed = tierId === productTier?.id;

  useEffect(() => {
    if (product.tiers) {
      product.tiers.map((tier) => {
        if (tier.id === tierId) {
          setProductTier(tier);
        }
      });
    }
  }, [product, tierId]);

  const handleTier = (tier: Tier) => {
    setProductTier(tier);
  };

  const handleSubscribe = async () => {
    const input = {
      projectId: productId as string,
      tierId: productTier?.id as string,
    };

    try {
      await subscribeMutationProject.mutateAsync(input);

      toast.success('Successfully subscribed');

      subscribed.refetch();
    } catch (error: any) {
      toast.error(error?.message || error);
    }
  };

  return (
    <ProductHeroContainer>
      <HeroGlow />

      <Image
        src='/images/product_badge.jpeg'
        width={92}
        height={92}
        priority
        alt='Product Badge'
        className='product-badge'
      />

      <div className='currency-switcher-wrapper'>
        <CurrencySwitcher
          currency={currency}
          handleCurrencyChange={handleCurrencyChange}
        />
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
                {productTier?.name}
              </Typography>

              <Typography variant='h3' textAlign='center'>
                {product.tiers?.length > 0 &&
                  formatUnits(productTier?.price, productTier?.unit)}
              </Typography>
            </FlexBox>

            <FlexBox className='tier'>
              <Typography variant='bodyBoldMobile' textAlign='center'>
                Available Tiers
              </Typography>

              {product.tiers.map((tier: Tier) => (
                <Typography
                  variant='body3'
                  key={tier.tier_id}
                  textAlign='center'
                  sx={{
                    borderBottom:
                      productTier?.id === tier.id ? '1px solid white' : 'none',
                    cursor: 'pointer',
                  }}
                  component='div'
                  onClick={() => handleTier(tier)}
                >
                  {tier.name}
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
              {productTier?.name}
            </Typography>

            <StyledButton
              className='subscribe-btn'
              disabled={subscribeMutationProject.isLoading || isSubscribed}
              onClick={handleSubscribe}
            >
              {isSubscribed ? 'Subscribed' : ' Subscribe Now'}
              {subscribeMutationProject.isLoading && <Loader />}
            </StyledButton>
          </div>
        </FlexBox>
      </Section>
    </ProductHeroContainer>
  );
};

export default ProductHero;
