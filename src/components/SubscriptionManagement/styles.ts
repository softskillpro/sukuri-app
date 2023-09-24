import { styled } from '@mui/material/styles';

export const SubscriptionManagementContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '7.3fr 4.7fr',
  alignItems: 'center',
  gap: 10,
  padding: '15px 0 48px',

  '.btn-group': {
    justifyContent: 'flex-end',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',

    '.btn-group': {
      justifyContent: 'space-between',
    },
  },
}));

export const CategoryButton = styled('button')<{ active: boolean }>(
  ({ active, theme }) => ({
    padding: active ? '12px 24px' : 0,
    borderRadius: 7,
    background: active
      ? theme.palette.topProductsGradient.light
      : 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    color: 'white',

    ':not(:last-of-type)': {
      marginRight: 24,
    },
  }),
);
