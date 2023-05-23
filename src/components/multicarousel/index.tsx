import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import IconButton from '@mui/material/IconButton';
import NftCard from '@/components/common/NftCard';
import ArrowCircleLeftIcon from '@/components/svgs/ArrowCircleLeftIcon';
import ArrowCircleRightIcon from '@/components/svgs/ArrowCircleRightIcon';
import type { NFTType } from '@/interface/Nft.interface';
import 'keen-slider/keen-slider.min.css';
import { MultiCarouselContainer } from './styles';

interface MultiCarouselProps {
  nfts: NFTType[];
}

const MultiCarousel = ({ nfts }: MultiCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: {
      perView: 'auto',
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <MultiCarouselContainer>
      {loaded && instanceRef.current && (
        <>
          <IconButton
            className='arrow-left-btn'
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          >
            <ArrowCircleLeftIcon sx={{ fontSize: 32 }} />
          </IconButton>

          <IconButton
            className='arrow-right-btn'
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              instanceRef.current
                ? currentSlide ===
                  instanceRef.current?.track?.details?.slides?.length - 1
                : false
            }
          >
            <ArrowCircleRightIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </>
      )}

      <div ref={sliderRef} className='keen-slider'>
        {nfts.map((nft: NFTType) => (
          <NftCard key={nft.id} nft={nft} className='keen-slider__slide' />
        ))}
      </div>
    </MultiCarouselContainer>
  );
};

export default MultiCarousel;
