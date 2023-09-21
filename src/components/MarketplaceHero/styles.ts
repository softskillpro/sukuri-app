import { styled } from '@mui/material/styles';

export const MarketplaceHeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 80,
  height: 392,
  padding: '0 80px',

  '.marketplace-hero-glow': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 7,
    opacity: 0.1,
    background: theme.palette.topProductsGradient.light,
    boxShadow: theme.palette.boxShadow.main,
    backdropFilter: 'blur(5px)',
  },

  '.currency-switcher-wrapper': {
    position: 'absolute',
    right: 43,
    top: 33,
    zIndex: 10,
  },

  '.hero-contents-wrapper': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 392,

    '.hero-contents': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 26,
    },

    '.explorer-marketplace-wrapper': {
      position: 'relative',

      '.explorer-marketplace': {
        padding: '15px 38px',
        borderRadius: 7,
        background: theme.palette.topProductsGradient.light,
        boxShadow: theme.palette.boxShadow.main,
        backdropFilter: 'blur(5px)',
      },

      svg: {
        position: 'absolute',
        right: -26,
        bottom: -20,
        zIndex: -3,
      },
    },
  },

  '.hero-img-wrapper': {
    position: 'relative',

    '.hero-img-wrap': {
      height: 392,
      overflow: 'hidden',

      '.hero-img': {
        width: '75%',
        height: 'auto',
      },
    },

    '.hero-img-contents-wrapper': {
      position: 'absolute',
      top: 160,
      right: 0,
      flexDirection: 'column',
      gap: 18,

      '.hero-img-contents': {
        padding: '15px 38px',
        borderRadius: 7,
        background: theme.palette.topProductsGradient.light,
        boxShadow: theme.palette.boxShadow.main,
        backdropFilter: 'blur(5px)',
      },

      '.circle-icon-wrapper': {
        position: 'relative',

        svg: {
          position: 'absolute',
          bottom: -11,
          right: -11,
          zIndex: -3,
        },
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    gap: 60,
    padding: '0 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 0,
    height: 'auto',
    padding: 0,

    '.currency-switcher-wrapper': {
      right: 24,
    },

    '.hero-contents-wrapper': {
      height: 'auto',
      padding: '50px 40px',
      order: 2,

      '.hero-contents': {
        gap: 17,
      },
    },

    '.hero-img-wrapper': {
      order: 1,

      '.hero-img-wrap': {
        height: 350,
        margin: '30px 24px 0',
        overflow: 'hidden',

        '.hero-img': {
          width: '70%',
        },
      },

      '.hero-img-contents-wrapper': {
        top: 160,
        right: 24,
      },
    },
  },
}));
