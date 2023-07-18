import IconButton from '@mui/material/IconButton';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MultiCarouselContainer } from './styles';
import PrevCircleIcon from '@/components/v2/svgs/PrevCircleIcon';
import NextCircleIcon from '@/components/v2/svgs/NextCircleIcon';

interface MultiCarouselProps {
  children: any;
}

const renderCustomPrevButton = (
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
  hasPrev: boolean,
) => {
  if (!hasPrev) {
    return null;
  }

  return (
    <IconButton className='carousel-btn btn-left' onClick={onClickHandler}>
      <PrevCircleIcon sx={{ fontSize: 47 }} />
    </IconButton>
  );
};

const renderCustomNextButton = (
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
  hasNext: boolean,
) => {
  if (!hasNext) {
    return null;
  }

  return (
    <IconButton className='carousel-btn btn-right' onClick={onClickHandler}>
      <NextCircleIcon sx={{ fontSize: 47 }} />
    </IconButton>
  );
};

const MultiCarousel = ({ children }: MultiCarouselProps) => {
  return (
    <MultiCarouselContainer className='carousel-main-wrapper'>
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={50}
        renderArrowPrev={renderCustomPrevButton}
        renderArrowNext={renderCustomNextButton}
      >
        {children}
      </Carousel>
    </MultiCarouselContainer>
  );
};

export default MultiCarousel;
