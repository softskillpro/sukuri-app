import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FavoriteIcon } from '@/components/Icons';
import { FlexBox } from '@/components/Common/FlexBox';
import { StarIcon, StarIcon2 } from '@/components/Icons';
import { ProductCardContainer } from './styles';
import { NFT } from '@/types';

interface ProductCardProps {
  product: NFT;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ProductCardContainer className={className || 'product-card'}>
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

      <FlexBox className='product-info'>
        <Typography variant={matches ? 'h6' : 'priceMobile'} ml={2.5}>
          $9.00
        </Typography>

        <Typography
          variant={matches ? 'body7' : 'body3Mobile'}
          ml={2.5}
          mb={1.5}
        >
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
                    <StarIcon
                      key={`star-${id}`}
                      sx={{ fontSize: matches ? 14 : 11 }}
                    />
                  ) : (
                    <StarIcon2
                      key={`star-${id}`}
                      sx={{ fontSize: matches ? 14 : 11 }}
                    />
                  ),
                )}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </ProductCardContainer>
  );
};

export default ProductCard;
