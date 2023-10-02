import { styled } from '@mui/material/styles';

export const MintContainer = styled('div')(({ theme }) => ({
  marginBottom: 80,

  '.mint-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    gap: 100,
    padding: '0 80px',

    '.mint-contents': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 8,
    },

    '.mint-asset': {
      width: 456,
      height: 456,
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
      padding: '0 60px',
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

      '.mint-asset': {
        width: 308,
        height: 308,
        margin: '0 auto',
      },

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
    },

    '.mint-newsletter': {
      margin: '60px 0',
    },
  },
}));
