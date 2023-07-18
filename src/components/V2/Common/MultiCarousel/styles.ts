import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const MultiCarouselContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'center',

  '.carousel-btn': {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0%, -50%)',
    zIndex: 100,
  },

  '.btn-left': {
    left: '25%',
    [theme.breakpoints.down('sm')]: {
      left: '30%',
    },
  },

  '.btn-right': {
    right: '25%',
    [theme.breakpoints.down('sm')]: {
      right: '30%',
    },
  },

  '.slide': {
    '.carousel-mask': {
      position: 'absolute',
      top: 0,
      left: 7,
      width: 'calc(100% - 14px)',
      height: '100%',
      background: theme.palette.primary.light,
      borderRadius: 10,
    },
  },

  '.selected': {
    '.carousel-mask': {
      background: 'transparent',
    },
  },
}));
