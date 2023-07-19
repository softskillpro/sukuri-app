import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
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
    pointerEvents: 'none'
  },

  '.main-wrapper': {
    position: 'inherit',
    width: '100%',
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