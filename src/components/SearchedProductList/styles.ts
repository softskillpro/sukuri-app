import { styled } from '@mui/material/styles';

export const ProductsContainer = styled('div')(({ theme }) => ({
  '.product-group': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 15,
  },

  [theme.breakpoints.down('md')]: {
    '.product-group': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.product-group': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 12,
    },
  },
}));
