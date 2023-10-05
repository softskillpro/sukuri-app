import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { Loader } from '@/components/Common/Loader';
import SecondaryProductCard from '@/components/SecondaryProductCard';
import { LikedProductsContainer } from './styles';
import type { Product } from '@/types';

interface LikedProductsProps {
  currency: string;
  title: string;
  products: Product[];
}

const LikedProducts = ({
  currency,
  title,
  products: likedProducts,
}: LikedProductsProps) => {
  const [isAll, setIsAll] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (isAll) {
      setProducts(likedProducts);
    } else {
      if (likedProducts) setProducts(likedProducts.slice(4));
    }
  }, [isAll, likedProducts]);

  const handleClick = () => {
    setIsAll((prev) => !prev);
  };

  return (
    <LikedProductsContainer>
      <FlexBox className='active-subscription-header'>
        <Typography variant='h5'>{title}</Typography>

        <Typography
          variant='body4'
          fontWeight={700}
          component='div'
          className='filter-btn'
          onClick={handleClick}
        >
          {isAll ? 'Less' : 'See All'}
        </Typography>
      </FlexBox>

      {products && products.length > 0 ? (
        <div className='product-group'>
          {products.map((product: Product) => (
            <SecondaryProductCard
              key={product.id}
              currency={currency}
              product={product}
            />
          ))}
        </div>
      ) : (
        <FlexBox justifyContent='center'>
          <Loader variant='Secondary' />
        </FlexBox>
      )}

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
