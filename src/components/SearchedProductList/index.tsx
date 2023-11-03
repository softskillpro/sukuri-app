import { memo } from 'react';
import { FlexBox } from '@/components/Common/FlexBox';
import SecondaryProductCard from '@/components/SecondaryProductCard';
import { ProductsContainer } from './styles';
import type { Product } from '@/types';
import { Typography } from '@mui/material';
import SearchedProductLoader from '../SearchedProductLoader';

interface SearchedProductsProps {
  products: Product[];
  currency: string;
}

const SearchedProductList = ({ products, currency }: SearchedProductsProps) => {
  return (
    <ProductsContainer>
      {false ? (
        <SearchedProductLoader />
      ) : products && products.length > 0 ? (
        <div className='product-group'>
          {products.map((product: Product) => {
            return (
              <SecondaryProductCard
                key={product.id}
                currency={currency}
                product={product}
              />
            );
          })}
        </div>
      ) : (
        <FlexBox justifyContent='center'>
          <Typography mt={20} variant='body2'>
            Oops! Your search did not reveal any result.
            <br /> Please try again.
          </Typography>
        </FlexBox>
      )}
    </ProductsContainer>
  );
};

export default memo(SearchedProductList);
