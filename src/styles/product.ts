import { styled } from '@mui/material/styles';

export const ProductContainer = styled('div')(({ theme }) => ({
  marginBottom: 190,

  [theme.breakpoints.down('md')]: {
    marginBottom: 100,
  },
}));
