import { styled } from '@mui/material/styles';

export const LikedProductsContainer = styled('div')(({ theme }) => ({
  '.active-subscription-header': {
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: '7px 0',
  },

  '.filter-btn': {
    padding: '10px 24px',
    borderRadius: 9,
    border: '1.275px solid white',
    cursor: 'pointer',

    ':hover': {
      opacity: 0.7,
    },
  },

  '.product-group': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 15,
  },

  '.see-all-btn': {
    width: 190,
    margin: '68px auto 48px',
    padding: '17px 42px',
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
