import { styled } from '@mui/material/styles';

export const SubscriptionManagementContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '0.5fr 9fr 2.5fr',
  alignItems: 'center',
  gap: 10,
  padding: '15px 0',

  '.btn-group': {
    justifyContent: 'flex-end',
  },

  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: '8fr 4fr',
  },

  [theme.breakpoints.down(1240)]: {
    gridTemplateColumns: '7.3fr 4.7fr',
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
    padding: active ? '8px 6px' : 0,
    borderRadius: 7,
    background: active
      ? theme.palette.topProductsGradient.light
      : 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 700,
    color: 'white',
    whiteSpace: 'nowrap',
  }),
);

export const FilterButton = styled('button')(({ theme }) => ({
  background: theme.palette.topProductsGradient.light,
  color: 'white',
  fontSize: 16,
  fontWeight: 700,
  padding: '12px 25px',
  borderRadius: '7px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '24px',
  lineHeight: '117%',
  border: 'none',
  cursor: 'pointer',
}));

export const SearchbarBorder = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.buttonGradient.contrastText}`,
}));

export const CategoriesButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.buttonGradient.contrastText}`,
  padding: 11.5,
  borderRadius: 7,
}));
