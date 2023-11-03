import { styled } from '@mui/material/styles';

export const SearchBarContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100%',

  '.input-glow': {
    opacity: 0.2,
    zIndex: -5,
  },

  input: {
    width: '100%',
    padding: '10px 30px',
    outline: 'none',
    border: 'none',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: '148%',
    letterSpacing: 0.16,
    fontFamily: 'var(--Inter)',
    background: 'transparent',
    color: 'white',

    '::placeholder': {
      color: 'white',
    },
  },

  '.search-btn': {
    position: 'absolute',
    top: 13,
    right: 30,
    width: 16,
    height: 16,
  },

  [theme.breakpoints.down(500)]: {
    width: '100%',
  },
}));
