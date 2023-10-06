import { styled } from '@mui/material/styles';

export const SubscriptionManagementHeroContainer = styled('div')(
  ({ theme }) => ({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    gap: 100,
    padding: '96px 80px',

    '.currency-switcher-wrapper': {
      position: 'absolute',
      right: 43,
      top: 33,
      zIndex: 10,
    },

    '.hero-contents': {
      gap: 18,

      '.hero-content': {
        maxWidth: '80%',
      },
    },

    '.hero-assets': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      width: 'fit-content',

      '.hero-assets-1': {
        position: 'relative',

        '.discount-time': {
          padding: '0 35px',
        },

        '.subscription-price': {
          padding: '38px 50px',
          borderRadius: 7,
          background: theme.palette.topProductsGradient.light,
          boxShadow: theme.palette.boxShadow.main,
          backdropFilter: 'blur(5px)',
        },
      },

      '.hero-assets-2': {
        position: 'relative',
        width: '100%',

        '.tier': {
          padding: '20px 20px',
        },

        '.active-sub': {
          padding: '23px 20px',
          borderRadius: 7,
          background: theme.palette.topProductsGradient.light,
          boxShadow: theme.palette.boxShadow.main,
          backdropFilter: 'blur(5px)',
        },

        svg: {
          position: 'absolute',
          right: -26,
          bottom: -26,
          zIndex: -3,
        },
      },
    },

    [theme.breakpoints.down('lg')]: {
      gap: 70,
      padding: '96px 60px',
    },

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
      gap: 40,
      padding: '112px 40px 40px',

      '.currency-switcher-wrapper': {
        right: 24,
      },
    },

    [theme.breakpoints.down('sm')]: {
      gap: 32,
      padding: '112px 24px 40px',

      '.hero-assets': {
        width: '100%',

        '.hero-assets-1': {
          position: 'relative',
          width: '100%',

          '.discount-time': {
            width: 140,
            padding: '0px 15px 0 25px',
          },

          '.subscription-price': {
            width: 'calc(100% - 140px)',
            padding: '38px 0 38px 30px',
            borderRadius: 7,
            background: theme.palette.topProductsGradient.light,
            boxShadow: theme.palette.boxShadow.main,
            backdropFilter: 'blur(5px)',
          },
        },

        '.hero-assets-2': {
          svg: {
            right: -15,
            bottom: -15,
          },
        },
      },
    },
  }),
);
