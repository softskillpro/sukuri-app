import ProductCard from '@/components/ProductCard';
import MultiCarousel from '@/components/MultiCarousel';
import { NewProductsContainer } from './styles';
import type { NFT } from '@/types';

interface NewProductsProps {
  products: NFT[];
}

const NewProducts = ({ products }: NewProductsProps) => {
  return (
    <NewProductsContainer>
      <MultiCarousel title='New Products'>
        {products &&
          products.map((product: NFT) => (
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
