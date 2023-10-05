import { styled } from '@mui/material/styles';

export const MintContainer = styled('div')(({ theme }) => ({
  marginBottom: 80,

  '.mint-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    gap: 100,
    padding: '80px 80px',

    '.mint-contents': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
    },

    '.mint-asset': {
      width: '100%',
      height: 'auto',
      margin: '0 auto',
    },

    '.mint-asset1': {
      width: 'auto',
      height: 320,
    },

    '.mint-asset2': {
      width: 'auto',
      height: 200,
    },

    '.mint-asset3': {
      width: 'auto',
      height: 380,
    },
  },

  '.mint-newsletter': {
    '.newsletter, .community': {
      padding: '80px 80px',
    },
  },

  [theme.breakpoints.down('lg')]: {
    '.mint-grid': {
      gap: 70,
      padding: 60,
    },

    '.mint-newsletter': {
      '.newsletter, .community': {
        padding: '60px 60px',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    marginBottom: 0,

    '.mint-grid': {
      gridTemplateColumns: '1fr',
      gap: 30,
      padding: '70px 0 0',

      // '.mint-asset': {
      //   width: 308,
      //   height: 308,
      //   margin: '0 auto',
      // },

      ':nth-of-type(2)': {
        '.mint-contents': {
          order: 1,
        },

        '.mint-asset': {
          order: 2,
        },
      },
    },

    '.mint-newsletter': {
      '.newsletter, .community': {
        padding: '60px 40px',
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.mint-grid': {
      padding: '70px 0 0',

      '.mint-asset1': {
        width: '100%',
        height: 'auto',
      },

      '.mint-asset2': {
        width: '100%',
        height: 'auto',
      },

      '.mint-asset3': {
        width: '100%',
        height: 'auto',
      },
    },

    '.mint-newsletter': {
      margin: '60px 0',
    },
  },
}));
