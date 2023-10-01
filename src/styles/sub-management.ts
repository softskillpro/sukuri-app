import { styled } from '@mui/material/styles';

export const SubscriptionManagementContainer = styled('div')(({ theme }) => ({
  marginBottom: 160,

  [theme.breakpoints.down('md')]: {
    marginBottom: 100,
  },
}));
