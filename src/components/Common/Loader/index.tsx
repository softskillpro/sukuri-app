import { styled } from '@mui/material/styles';

export const Loader = styled('span')<{ variant?: 'Primary' | 'Secondary' }>(
  ({ variant = 'Primary' }) => ({
    width: variant === 'Primary' ? 20 : 50,
    height: variant === 'Primary' ? 20 : 50,
    marginLeft: variant === 'Primary' ? 12 : 0,
    border: variant === 'Primary' ? '3px solid #FFF' : '5px solid #FFF',
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
  }),
);
