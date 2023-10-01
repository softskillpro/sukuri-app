import { styled } from '@mui/material/styles';

export const SecondaryCarouselContainer = styled('div')(({ theme }) => ({
  position: 'relative',

  '.button-group': {
    '.arrow-btn': {
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      width: 76,
      height: 76,
      background: theme.palette.topProductsGradient.light,
      zIndex: 100,

      ':first-of-type': {
        left: -38,
      },

      ':last-of-type': {
        right: -38,
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '.button-group': {
      '.arrow-btn': {
        width: 44,
        height: 44,

        ':first-of-type': {
          left: -22,
        },

        ':last-of-type': {
          right: -22,
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.button-group': {
      '.arrow-btn': {
        ':first-of-type': {
          left: 10,
        },

        ':last-of-type': {
          right: 10,
        },
      },
    },
  },
}));
