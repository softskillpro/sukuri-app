import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { ProductDetailContainer } from './styles';
import { Product } from '@/types';
import { socialList } from '@/constants';
import type { Social } from '@/types';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const tiers = product.tiers;

  const handleClick = (href: string) => {
    window.open(href, '_blank');
  };

  return (
    <ProductDetailContainer>
      <HeroGlow />

      <section className='product-description'>
        <Typography variant='h5'>About</Typography>

        <Typography variant='body2'>{product.long_description}</Typography>

        <FlexBox className='social-list'>
          <Typography variant='h5'>Links</Typography>

          <FlexBox gap={1.5}>
            {socialList.map((social: Social, id: number) => {
              const SocialIcon = social.asset;

              return (
                <div
                  key={`social-${id}`}
                  role='button'
                  tabIndex={0}
                  style={{
                    cursor: id === 0 ? 'inherit' : 'pointer',
                  }}
                  onClick={() => handleClick(social.href)}
                  onKeyDown={() => handleClick(social.href)}
                >
                  <SocialIcon sx={{ fontSize: id === 0 ? 20 : 24 }} />
                </div>
              );
            })}
          </FlexBox>
        </FlexBox>
      </section>

      <section className='product-feature'>
        <Typography variant='h5'>What’s Included?</Typography>

        <ul>
          {tiers.length > 0 &&
            tiers[0]?.features.map((feature: string, id: number) => (
              <li key={`feature-${id}`}>
                <Typography variant='body2'>{feature}</Typography>
              </li>
            ))}
        </ul>
      </section>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
