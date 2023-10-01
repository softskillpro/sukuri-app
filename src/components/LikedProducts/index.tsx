import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import SecondaryProductCard from '@/components/SecondaryProductCard';
import { LikedProductsContainer } from './styles';
import type { Product } from '@/types';

interface LikedProductsProps {
  title: string;
  products: Product[];
}

const LikedProducts = ({ title, products }: LikedProductsProps) => {
  return (
    <LikedProductsContainer>
      <FlexBox className='active-subscription-header'>
        <Typography variant='h5'>{title}</Typography>

        <Typography
          variant='body4'
          fontWeight={700}
          component='div'
          className='filter-btn'
        >
          See All
        </Typography>
      </FlexBox>

      <div className='product-group'>
        {products &&
          products.map((product: Product) => (
            <SecondaryProductCard key={product.id} product={product} />
          ))}
      </div>

      {/* <Typography
        variant='bodyBoldMobile'
        component='div'
        textAlign='center'
        className='filter-btn see-all-btn'
      >
        See All
      </Typography> */}
    </LikedProductsContainer>
  );
};

export default LikedProducts;
