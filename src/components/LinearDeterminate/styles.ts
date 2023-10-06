import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LinearDeterminateContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  left: -80,
  width: 'calc(100% + 80px)',
  zIndex: 1000,

  '.MuiLinearProgress-bar': {
    background: '#ABD2FF',
  },

  [theme.breakpoints.down('lg')]: {
    left: -50,
    width: 'calc(100% + 50px)',
  },

  [theme.breakpoints.down('md')]: {
    left: -30,
    width: 'calc(100% + 30px)',
  },

  [theme.breakpoints.down('sm')]: {
    left: -16,
    width: 'calc(100% + 16px)',
  },
}));
