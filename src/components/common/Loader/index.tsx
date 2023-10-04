import { styled } from '@mui/material/styles';

export const Loader = styled('span')(() => ({
  width: 26,
  height: 26,
  marginLeft: 12,
  border: '3px solid #FFF',
  borderBottomColor: 'transparent',
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: 'rotation 1s linear infinite',

  '@keyframes rotation': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));
