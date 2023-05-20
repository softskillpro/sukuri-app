import { useState, useMemo } from 'react';
import type { TouchEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import FlexBox from '@/components/common/FlexBox';
import NftCard from '@/components/common/NftCard';
import ArrowCircleLeftIcon from '@/components/svgs/ArrowCircleLeftIcon';
import ArrowCircleRightIcon from '@/components/svgs/ArrowCircleRightIcon';
import type { NFTType } from '@/interface/Nft.interface';
import { MultiCarouselContainer } from './styles';

interface MultiCarouselProps {
  nfts: NFTType[];
}

const MultiCarousel = ({ nfts }: MultiCarouselProps) => {
  const [selectedId, setSelectedId] = useState(0);

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const sortNfts = useMemo(() => {
    const copyNfts = [...nfts];

    const sortId = selectedId % nfts.length;

    return [...copyNfts.slice(sortId), ...copyNfts.slice(0, sortId)];
  }, [nfts, selectedId]);

  const handleNext = () => {
    setSelectedId((prev) => prev + 1);
  };

  const handlePrev = () => {
    setSelectedId((prev) => {
      if (prev < 1) return 0;
      return prev - 1;
    });
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches[0]) setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches[0]) setEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX - endX > 30) {
      handlePrev();
    } else if (endX - startX > 30) {
      handleNext();
    }
  };

  return (
    <MultiCarouselContainer>
      {selectedId !== 0 && (
        <IconButton className='arrow-left-btn' onClick={handlePrev}>
          <ArrowCircleLeftIcon sx={{ fontSize: 32 }} />
        </IconButton>
      )}

      <FlexBox>
        {sortNfts.map((nft: NFTType) => (
          <div
            key={nft.id}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <NftCard nft={nft} />
          </div>
        ))}
      </FlexBox>

      <IconButton className='arrow-right-btn' onClick={handleNext}>
        <ArrowCircleRightIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </MultiCarouselContainer>
  );
};

export default MultiCarousel;
