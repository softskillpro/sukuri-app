import { styled } from '@mui/material/styles';

export const ProductContainer = styled('div')(({ theme }) => ({
  margin: '30px 0',

  '.product-layout': {
    margin: '90px 0 30px',

    '.sidebar-layout-body': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 15,
      border: `1px solid ${theme.palette.border.dark}`,
      background: theme.palette.secondary.main,
      boxShadow: theme.palette.shadow1.main,

      '.product-content-card-group': {
        margin: '30px 30px 60px',
      },

      '.product-divider': { width: '80%', mixBlendMode: 'overlay' },

      '.product-carousel-img-container': {
        margin: '0 7px',
        borderRadius: 10,

        '.product-carousel-img': {
          borderRadius: 10,
          border: `2px solid ${theme.palette.border.main}`,
        },
      },
    },
  },

  [theme.breakpoints.down('xl')]: {
    '.product-layout': {
      margin: '30px 0',

      section: {
        ':nth-of-type(1)': {
          order: 2,
        },

        ':nth-of-type(2)': {
          order: 1,
        },
      },

      '.sidebar-layout-body': {
        '.product-content-card-group': {
          margin: '15px 10px 30px',
        },

        '.product-divider': { width: 'calc(100% - 30px)' },
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '.product-layout': {
      '.sidebar-layout-body': {
        '.product-content-card-group': {
          margin: '10px 10px 20px',
        },

        '.product-divider': { width: 'calc(100% - 20px)' },
      },
    },
  },
}));

export const SidebarComboContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  gap: 10,

  [theme.breakpoints.down('xl')]: {
    flexDirection: 'row',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}))