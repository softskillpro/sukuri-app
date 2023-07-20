import { styled } from '@mui/material/styles';

export const SidebarLayoutContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 5fr',
  gap: 15,
  
  [theme.breakpoints.down('xl')]: {
    gridTemplateColumns: '1fr',
  },
}));
