import ProductCard from '@/components/ProductCard';
import MultiCarousel from '@/components/MultiCarousel';
import { FeaturedProductsContainer } from './styles';
import type { Product } from '@/types';

interface FeaturedProductsProps {
  currency: string;
  loading: boolean;
  products?: Product[];
}

const FeaturedProducts = ({
  currency,
  loading,
  products,
}: FeaturedProductsProps) => {
  return (
    <FeaturedProductsContainer>
      <MultiCarousel
        title='Featured Products'
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
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
