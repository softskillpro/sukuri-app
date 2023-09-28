import ProductCard from '@/components/ProductCard';
import MultiCarousel from '@/components/MultiCarousel';
import { NewProductsContainer } from './styles';
import type { Product } from '@/types';

interface NewProductsProps {
  products: Product[];
}

const NewProducts = ({ products }: NewProductsProps) => {
  return (
    <NewProductsContainer>
      <MultiCarousel title='New Products'>
        {products &&
          products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              className='keen-slider__slide'
            />
          ))}
      </MultiCarousel>
    </NewProductsContainer>
  );
};

export default NewProducts;
