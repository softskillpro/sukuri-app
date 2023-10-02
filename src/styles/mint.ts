import { styled } from '@mui/material/styles';

export const MintContainer = styled('div')(({ theme }) => ({
  marginBottom: 160,

  [theme.breakpoints.down('md')]: {
    marginBottom: 100,
  },
}));
