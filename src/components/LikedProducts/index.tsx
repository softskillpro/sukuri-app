import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import SecondaryProductCard from '@/components/SecondaryProductCard';
import { LikedProductsContainer } from './styles';
import type { NFT } from '@/types';

interface LikedProductsProps {
  products: NFT[];
}

const LikedProducts = ({ products }: LikedProductsProps) => {
  return (
    <LikedProductsContainer>
      <FlexBox className='active-subscription-header'>
        <Typography variant='h5'>Products you might like</Typography>

        <Typography
          variant='body4'
          fontWeight={700}
          component='div'
          className='filter-btn'
        >
          Filter
        </Typography>
      </FlexBox>

      <div className='product-group'>
        {products &&
          products.map((product: NFT) => (
            <SecondaryProductCard key={product.id} product={product} />
          ))}
      </div>

      <Typography
        variant='bodyBoldMobile'
        component='div'
        textAlign='center'
        className='filter-btn see-all-btn'
      >
        See All
      </Typography>
    </LikedProductsContainer>
  );
};

export default LikedProducts;
