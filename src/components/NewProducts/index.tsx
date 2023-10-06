import ProductCard from '@/components/ProductCard';
import MultiCarousel from '@/components/MultiCarousel';
import { NewProductsContainer } from './styles';
import type { Product } from '@/types';

interface NewProductsProps {
  currency: string;
  loading: boolean;
  products?: Product[];
}

const NewProducts = ({ currency, loading, products }: NewProductsProps) => {
  return (
    <NewProductsContainer>
      <MultiCarousel
        title='New Products'
        loading={loading}
        products={products}
        hasAll={false}
      >
        {products &&
          products.length > 0 &&
          products.map((product: Product) => (
            <ProductCard
              key={product.id}
              currency={currency}
              product={product}
              className='keen-slider__slide'
            />
          ))}
      </MultiCarousel>
    </NewProductsContainer>
  );
};

export default NewProducts;
