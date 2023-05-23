import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const MultiCarouselContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  width: '100%',

  '.arrow-left-btn': {
    position: 'absolute',
    left: -50,
    zIndex: 10,

    ':disabled': {
      opacity: 0.7,
    },
  },

  '.arrow-right-btn': {
    position: 'absolute',
    right: -50,
    zIndex: 10,

    ':disabled': {
      opacity: 0.7,
    },
  },

  '.nft-card-container': {
    marginRight: 20,
  },

  [theme.breakpoints.down(1024)]: {
    '.arrow-left-btn': {
      position: 'absolute',
      left: 0,
    },

    '.arrow-right-btn': {
      position: 'absolute',
      right: 0,
    },
  },
}));
