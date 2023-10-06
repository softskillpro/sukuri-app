import Image from 'next/image';
import SecondaryCarousel from '@/components/SecondaryCarousel';
import { ImageCarouselContainer } from './styles';
import { productImgs } from '@/constants';

const ImageCarousel = () => {
  return (
    <ImageCarouselContainer>
      <SecondaryCarousel>
        {productImgs &&
          productImgs.map((product: string, id: number) => (
            <Image
              key={`product-img-${id}`}
              src={`/images/${product}.jpeg`}
              width={400}
              height={400}
              priority
              alt='Product Image'
              className='keen-slider__slide'
            />
          ))}
      </SecondaryCarousel>
    </ImageCarouselContainer>
  );
};

export default ImageCarousel;
