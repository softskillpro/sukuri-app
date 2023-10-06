import { useRouter } from 'next/router';
import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { SecondaryGlassMorph } from '@/components/Common/GlassMorph';
import { FavoriteIcon, StarIcon, StarIcon2 } from '@/components/Icons';
import { SecondaryProductCardContainer } from './styles';
import { Product } from '@/types';
import useRuntimeContext from '@/hooks/useRuntimeContext';

interface SecondaryProductCardProps {
  currency: string;
  product: Product;
  className?: string;
}

const SecondaryProductCard = ({
  currency,
  product,
  className,
}: SecondaryProductCardProps) => {
  const router = useRouter();

  const { fetchHandler } = useRuntimeContext();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleClick = () => {
    fetchHandler(true);
    router.push({
      pathname: `/product/${product.id}`,
    });
  };

  return (
    <SecondaryProductCardContainer
      className={className || 'secondary-product-card'}
      onClick={handleClick}
    >
      <SecondaryGlassMorph />

      <Image
        src='/images/product.jpeg'
        width={400}
        height={300}
        priority
        alt='Product'
        className='product-img'
      />

      <div className='favorite-icon'>
        <FavoriteIcon sx={{ fontSize: matches ? 48 : 44 }} />
      </div>

      <FlexBox className='product-info'>
        <FlexBox className='product-price'>
          <Typography variant={matches ? 'h6' : 'h4Mobile'}>
            {currency === 'USD' ? '$24.00' : 'Ξ0.015'}
          </Typography>

          <Typography
            variant={matches ? 'body4' : 'body7'}
            textTransform='uppercase'
          >
            /Month
          </Typography>
        </FlexBox>

        <FlexBox gap={0.45}>
          {[0, 1, 2, 3, 4].map((id) =>
            id < 4 ? (
              <StarIcon
                key={`star-${id}`}
                sx={{ fontSize: matches ? 16 : 11 }}
              />
            ) : (
              <StarIcon2
                key={`star-${id}`}
                sx={{ fontSize: matches ? 16 : 11 }}
              />
            ),
          )}
        </FlexBox>
      </FlexBox>

      <FlexBox className='product-contents'>
        <Typography variant={matches ? 'h5' : 'h4Mobile'}>
          {product.name}
        </Typography>

        <Typography variant={matches ? 'body4' : 'body7'}>
          Atma Group
        </Typography>
      </FlexBox>
    </SecondaryProductCardContainer>
  );
};

export default SecondaryProductCard;
