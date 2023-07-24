import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const LayoutContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  overflowX: 'hidden',
  width: '100%',
  height: 'inherit',
  backgroundColor: '#1D1C4F',

  '& > *': {
    zIndex: 2,
  },

  '.background-img': {
    position: 'fixed',
    top: 0,
    minWidth: '100%',
    width: 'inherit',
    height: '100%',
    zIndex: 1,
    mixBlendMode: 'lighten',
    objectFit: 'cover',
    pointerEvents: 'none',
  },

  '.main-wrapper': {
    position: 'inherit',
    width: '100%',
    maxWidth: 1440,
    height: 'inherit',
    minHeight: '100vh',
    zIndex: 10,

    '.layout-wrapper': {
      padding: '15px 23px',
    },
  },

  [theme.breakpoints.down('xl')]: {
    '.main-wrapper': {
      '.layout-wrapper': {
        padding: 10,
      },
    },
  },
}));
