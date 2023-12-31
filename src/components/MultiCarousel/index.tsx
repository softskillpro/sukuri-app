import { useCallback, useState } from 'react';
import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import { FlexBox } from '@/components/Common/FlexBox';
import { Loader } from '@/components/Common/Loader';
import { ArrowLeftIcon2, ArrowRightIcon2 } from '@/components/Icons';
import { ManagementContainer, MultiCarouselContainer } from './styles';
import 'keen-slider/keen-slider.min.css';

interface MultiCarouselProps {
  title: string;
  children: React.ReactNode;
  hasAll?: boolean;
  breakpoints?: any;
  slides?: any;
  products?: any[];
  loading: boolean;
}

const MultiCarousel = ({
  title,
  children,
  hasAll = true,
  breakpoints,
  slides,
  products,
  loading,
}: MultiCarouselProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'snap',
    rtl: false,
    breakpoints: breakpoints || {
      '(min-width: 700px)': {
        slides: { perView: 2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 16 },
      },
    },
    slides: slides || {
      perView: 1.3,
      spacing: 16,
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
    <>
      <ManagementContainer>
        <Typography variant='h5'>{title}</Typography>

        <FlexBox gap={3}>
          {loaded && instanceRef.current && matches && (
            <FlexBox gap={0.5}>
              <IconButton
                disabled={currentSlide === 0}
                onClick={handleBackward}
              >
                <ArrowLeftIcon2 sx={{ fontSize: 14 }} />
              </IconButton>

              <IconButton
                disabled={
                  instanceRef.current
                    ? currentSlide ===
                      instanceRef.current?.track?.details?.slides?.length - 1
                    : false
                }
                onClick={handleForward}
              >
                <ArrowRightIcon2 sx={{ fontSize: 14 }} />
              </IconButton>
            </FlexBox>
          )}

          {hasAll && (
            <Typography
              variant='body4'
              fontWeight={700}
              component='div'
              className='see-all'
            >
              See All
            </Typography>
          )}
        </FlexBox>
      </ManagementContainer>

      {loading ? (
        <FlexBox justifyContent='center'>
          <Loader variant='Secondary' />
        </FlexBox>
      ) : (
        products &&
        products.length > 0 && (
          <MultiCarouselContainer>
            <div ref={sliderRef} className='keen-slider'>
              {children}
            </div>
          </MultiCarouselContainer>
        )
      )}
    </>
  );
};

export default MultiCarousel;
