import { styled } from '@mui/material/styles';

export const ProductDetailContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 100,
  margin: '22px 0',
  padding: '70px 80px',

  '.product-description': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 55,

    '.social-list': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 25,
    },
  },

  '.product-feature': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 55,

    ul: {
      margin: 0,
      paddingLeft: 20,
    },
  },

  [theme.breakpoints.down(1255)]: {
    gap: 70,
    padding: '70px 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 40,
    padding: '70px 40px',
  },

  [theme.breakpoints.down('sm')]: {
    gap: 70,
    padding: '40px 24px',

    '.product-description, .product-feature': {
      gap: 30,
    },
  },
}));
