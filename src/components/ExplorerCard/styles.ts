import { styled } from '@mui/material/styles';

export const ExplorerCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 375,
  borderRadius: 7,

  '.explorer-img': {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    objectFit: 'cover',
  },

  [theme.breakpoints.down(600)]: {
    height: 220,
  },
}));
