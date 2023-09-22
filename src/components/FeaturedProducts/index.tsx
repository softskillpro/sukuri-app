import Product from '@/components/Product';
import MultiCarousel from '@/components/MultiCarousel';
import { FeaturedProductsContainer } from './styles';
import type { NFT } from '@/types';

interface FeaturedProductsProps {
  products: NFT[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <FeaturedProductsContainer>
      <MultiCarousel title='Featured Products'>
        {products &&
          products.map((product: NFT) => (
            <Product
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
