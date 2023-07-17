import { styled } from '@mui/material/styles';

export const SidebarLayoutContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  gap: 15,

  '.top-categories-card': {
    marginTop: 30,
  },

  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: '1fr',

    '.top-categories-card': {
      marginTop: 10,
    },
  },
}));
