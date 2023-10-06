import { styled } from '@mui/material/styles';

export const ProductHeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 100,
  marginTop: 20,
  padding: '136px 80px 90px',

  '.currency-switcher-wrapper': {
    position: 'absolute',
    right: 80,
    top: 45,
    zIndex: 10,
  },

  '.product-badge': {
    position: 'absolute',
    left: 80,
    top: -20,
    zIndex: 10,
    borderRadius: 7,
    boxShadow: theme.palette.boxShadow.main,
    backdropFilter: 'blur(5px)',
  },

  '.hero-contents': {
    gap: 18,

    '.hero-content': {
      maxWidth: '80%',
    },
  },

  '.hero-assets': {
    flexDirection: 'row',
    gap: 10,

    '.product-volume': {
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 13,
      padding: '38px 20px',
    },

    '.product-detail': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10,
      width: '100%',

      '.membership-tier': {
        position: 'relative',
        width: '100%',

        '.membership': {
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          padding: '0 20px',
        },

        '.tier': {
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          padding: '38px 20px',
          borderRadius: 7,
          background: theme.palette.topProductsGradient.light,
          boxShadow: theme.palette.boxShadow.main,
          backdropFilter: 'blur(5px)',
        },
      },

      '.subscribe-membership': {
        position: 'relative',
        width: '100%',

        '.tier': {
          padding: '20px 20px',
        },

        '.subscribe-btn': {
          width: '100% !important',
          padding: '23px 20px !important',
          fontSize: '16px !important',
        },
      },
    },
  },

  [theme.breakpoints.down(1255)]: {
    gap: 70,
    padding: '136px 60px 90px',

    '.currency-switcher-wrapper': {
      right: 60,
    },

    '.product-badge': {
      left: 60,
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 40,
    padding: '112px 40px 40px',

    '.currency-switcher-wrapper': {
      right: 40,
    },

    '.product-badge': {
      left: 40,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gap: 32,
    padding: '112px 24px 40px',

    '.currency-switcher-wrapper': {
      right: 24,
    },

    '.product-badge': {
      left: 24,
    },

    '.hero-assets': {
      flexDirection: 'column',

      '.product-volume': {
        gap: 2,
        width: '100%',
        padding: '18px 20px',
      },
    },
  },
}));
