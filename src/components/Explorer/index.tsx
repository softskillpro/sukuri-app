import MultiCarousel from '@/components/MultiCarousel';
import ExplorerCard from '@/components/ExplorerCard';
import { ExplorerContainer } from './styles';
import { explorers } from '@/constants';

const breakpoints = {
  '(min-width: 800px)': {
    slides: { perView: 3, spacing: 16 },
  },
  '(min-width: 1024px)': {
    slides: { perView: 4, spacing: 16 },
  },
};

const slides = {
  perView: 2.3,
  spacing: 16,
};

const Explorer = () => {
  return (
    <ExplorerContainer>
      <MultiCarousel
        title='Explorer'
        hasAll={false}
        breakpoints={breakpoints}
        slides={slides}
      >
        {explorers.map((item) => (
          <ExplorerCard
            key={item.title}
            item={item}
            className='keen-slider__slide'
          />
        ))}
      </MultiCarousel>
    </ExplorerContainer>
  );
};

export default Explorer;
