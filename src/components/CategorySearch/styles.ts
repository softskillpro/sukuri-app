import { styled } from '@mui/material/styles';

export const CategorySearchContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gap: 20,
  alignItems: 'center',
  margin: '15px 0',

  '.search-bar': {
    position: 'relative',

    '.input-glow': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 7,
      opacity: 0.2,
      background: theme.palette.topProductsGradient.light,
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

    svg: {
      position: 'absolute',
      top: 13,
      right: 30,
    },
  },

  '.category-group-wrapper': {
    width: '100%',

    '.category-group': {
      justifyContent: 'space-between',
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 27,
  },

  [theme.breakpoints.down(500)]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '.search-bar': {
      width: '100%',
    },

    '.category-group-wrapper': {
      '.category-group': {
        gap: 27,
      },
    },
  },
}));
