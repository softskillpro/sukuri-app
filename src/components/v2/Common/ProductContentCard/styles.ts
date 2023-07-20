import { styled } from '@mui/material/styles';

export const ProductContentCardContainer = styled('div')(({ theme }) => ({
  borderRadius: 10,
  border: `1px solid ${theme.palette.shadow1.light}`,
  background: theme.palette.primary.dark,
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(2.5px)',

  '.product-content-card-header': {
    padding: '15px 0px',
    borderRadius: 10,
    background: theme.palette.primary.dark,
  },

  '.product-content-card-body': {
    padding: 15,
  },
}));
