import { styled } from '@mui/material/styles';

export const ProductCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: 320,
  borderRadius: 7,
  cursor: 'pointer',

  '.product-img': {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    objectFit: 'cover',
  },

  '.favorite-icon': {
    position: 'absolute',
    right: 18,
    top: 18,
  },

  '.product-info': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',

    '.product-contents-wrapper': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      minHeight: 125,
      gap: 3,
      padding: '22px 20px',
      borderRadius: '0px 0px 7px 7px',
      background: theme.palette.topProductsGradient.light,

      '.product-contents': {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',

        '.ratings': {
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 2,
          marginLeft: 20,
        },
      },
    },
  },
}));
