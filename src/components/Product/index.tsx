import Image from 'next/image';
import { Typography } from '@mui/material';
import { FavoriteIcon } from '@/components/Icons';
import { FlexBox } from '@/components/Common/FlexBox';
import { StarIcon, StarIcon2 } from '@/components/Icons';
import { ProductContainer } from './styles';
import { NFT } from '@/types';

interface ProductProps {
  product: NFT;
  className?: string;
}

const Product = ({ product, className }: ProductProps) => {
  return (
    <ProductContainer className={className || 'product-card'}>
      <Image
        src='/images/product.jpeg'
        width={400}
        height={300}
        alt='Product'
        className='product-img'
      />

      <div className='favorite-icon'>
        <FavoriteIcon sx={{ fontSize: 36 }} />
      </div>

      <div className='product-info'>
        <Typography variant='h6' ml={2.5}>
          $9.00
        </Typography>

        <Typography variant='body7' ml={2.5}>
          /Month
        </Typography>

        <FlexBox className='product-contents-wrapper'>
          <Typography variant='h5'>{product.name}</Typography>

          <FlexBox className='product-contents'>
            <Typography variant='body4'>SPTips Group</Typography>

            <FlexBox className='ratings'>
              <Typography variant='body7'>RATING</Typography>

              <FlexBox gap={0.45}>
                {[0, 1, 2, 3, 4].map((id) =>
                  id < 4 ? (
                    <StarIcon key={`star-${id}`} sx={{ fontSize: 14 }} />
                  ) : (
                    <StarIcon2 key={`star-${id}`} sx={{ fontSize: 14 }} />
                  ),
                )}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </div>
    </ProductContainer>
  );
};

export default Product;
