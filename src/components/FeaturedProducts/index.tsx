import ProductCard from '@/components/ProductCard';
import MultiCarousel from '@/components/MultiCarousel';
import { FeaturedProductsContainer } from './styles';
import type { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <FeaturedProductsContainer>
      <MultiCarousel title='Featured Products'>
        {products &&
          products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              className='keen-slider__slide'
            />
          ))}
      </MultiCarousel>
    </FeaturedProductsContainer>
  );
};

export default FeaturedProducts;
