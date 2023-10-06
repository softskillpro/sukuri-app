import { styled } from '@mui/material/styles';

export const SubscriptionHeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',
  gap: 80,
  height: 392,
  padding: '0 80px',

  '.currency-switcher-wrapper': {
    position: 'absolute',
    right: 43,
    top: 33,
    zIndex: 10,
  },

  '.hero-contents': {
    gap: 11,

    '.hero-content': {
      maxWidth: '80%',
    },
  },

  '.hero-assets': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },

  [theme.breakpoints.down('lg')]: {
    gap: 60,
    padding: '0 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 26,
    height: 'auto',
    padding: '112px 40px 40px',

    '.currency-switcher-wrapper': {
      right: 24,
    },
  },

  [theme.breakpoints.down('sm')]: {
    gap: 32,
    padding: '112px 30px 40px',

    '.hero-assets': {
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 7,

      '.active-subscriptions': {
        width: 187,
        padding: '30px 20px',

        '.circle-icon': {
          top: -24,
          right: -24,

          svg: {
            fontSize: 50,
          },
        },

        '.info-title': {
          fontSize: 20,
        },

        '.info-content': {
          fontSize: 40,
        },
      },

      '.total-subscriptions': {
        position: 'absolute',
        top: 58,
        left: 160,
        width: 133,
        padding: 16,

        '.circle-icon': {
          top: -18,
          right: -18,

          svg: {
            fontSize: 36,
          },
        },

        '.info-title': {
          fontSize: 14,
        },

        '.info-content': {
          fontSize: 28,
        },
      },

      '.monthly-spend': {
        width: 133,
        padding: 16,

        '.circle-icon': {
          top: 'inherit',
          bottom: 1,
          right: -18,

          svg: {
            fontSize: 36,
          },
        },

        '.info-title': {
          fontSize: 14,
        },

        '.info-content': {
          fontSize: 28,
        },
      },
    },
  },
}));
