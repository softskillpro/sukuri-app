import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const MultiCarouselContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'center',

  '.carousel-btn': {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,
  },

  '.slide': {
    '.carousel-mask': {
      position: 'absolute',
      top: 0,
      left: 7,
      width: 'calc(100% - 14px)',
      height: '100%',
      background: theme.palette.primary.light,
      backgroundBlendMode: 'multiply, normal',
      borderRadius: 10,
    },
  },

  '.selected': {
    '.carousel-mask': {
      background: 'transparent',
    },
  },
}));
