import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { StarIcon, StarIcon2 } from '@/components/Icons';
import EllipseIconList from '@/components/EllipseIconList';
import { ProductSubscriptionCardContainer } from './styles';
import type { Product } from '@/types';

interface ProductSubscriptionCardProps {
  product: Product;
  className?: string;
}

const ProductSubscriptionCard = ({
  product,
  className,
}: ProductSubscriptionCardProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ProductSubscriptionCardContainer className={className || 'product-card'}>
      <Image
        src='/images/product.jpeg'
        width={400}
        height={300}
        alt='Product'
        className='product-img'
      />

      <div className='ellipse-icon-list'>
        <EllipseIconList />
      </div>

      <FlexBox className='product-info'>
        <FlexBox className='product-info-price'>
          <FlexBox className='product-info-item'>
            <Typography variant={matches ? 'h6' : 'priceMobile'}>
              $9.00
            </Typography>

            <Typography variant={matches ? 'body7' : 'body3Mobile'}>
              /Month
            </Typography>
          </FlexBox>

          <FlexBox className='product-info-item'>
            <Typography
              variant='body5'
              textAlign='right'
              color='text.secondary'
            >
              Ends on
              <br />
              30/Sept/2023
            </Typography>
          </FlexBox>
        </FlexBox>

        <FlexBox className='product-contents-wrapper'>
          <FlexBox className='product-contents-header'>
            <Typography variant='h5'>{product.name}</Typography>
            <Typography
              variant='bodyBoldMobile'
              className='active-btn'
              component='div'
            >
              Active
            </Typography>
          </FlexBox>

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
    </ProductSubscriptionCardContainer>
  );
};

export default ProductSubscriptionCard;
