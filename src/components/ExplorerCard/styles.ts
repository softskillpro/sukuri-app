import { styled } from '@mui/material/styles';

export const ExplorerCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 375,
  borderRadius: 7,
  cursor: 'pointer',

  '.explorer-img': {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    objectFit: 'cover',
  },

  '.explorer-title': {
    position: 'absolute',
    left: 20,
    bottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 40px)',
    padding: 30,
    borderRadius: 7,
    background: theme.palette.topProductsGradient.light,
    boxShadow: theme.palette.boxShadow.main,
    backdropFilter: 'blur(5px)',
  },

  [theme.breakpoints.down(600)]: {
    height: 220,

    '.explorer-title': {
      left: 10,
      bottom: 10,
      width: 'calc(100% - 20px)',
      padding: '16px 30px',
    },
  },
}));
