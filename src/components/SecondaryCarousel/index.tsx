import { useCallback, useState } from 'react';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import { FlexBox } from '@/components/Common/FlexBox';
import { ArrowLeftIcon, ArrowRightIcon3 } from '@/components/Icons';
import { SecondaryCarouselContainer } from './styles';
import 'keen-slider/keen-slider.min.css';

interface SecondaryCarouselProps {
  children: React.ReactNode;
}

const SecondaryCarousel = ({ children }: SecondaryCarouselProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    breakpoints: {
      '(min-width: 700px)': {
        slides: {
          origin: 'center',
          perView: 2,
          spacing: 26,
        },
      },
    },
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 26,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleBackward = useCallback((e: any) => {
    e.stopPropagation() || instanceRef.current?.prev();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForward = useCallback((e: any) => {
    e.stopPropagation() || instanceRef.current?.next();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SecondaryCarouselContainer>
      {loaded && instanceRef.current && (
        <FlexBox className='button-group'>
          <IconButton
            disabled={currentSlide === 0}
            className='arrow-btn'
            onClick={handleBackward}
          >
            <ArrowLeftIcon sx={{ fontSize: matches ? 30 : 18 }} />
          </IconButton>

          <IconButton
            className='arrow-btn'
            disabled={
              instanceRef.current
                ? currentSlide ===
                  instanceRef.current?.track?.details?.slides?.length - 1
                : false
            }
            onClick={handleForward}
          >
            <ArrowRightIcon3 sx={{ fontSize: matches ? 30 : 18 }} />
          </IconButton>
        </FlexBox>
      )}

      <FlexBox>
        <div ref={sliderRef} className='keen-slider'>
          {children}
        </div>
      </FlexBox>
    </SecondaryCarouselContainer>
  );
};

export default SecondaryCarousel;
