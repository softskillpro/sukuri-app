import { styled } from '@mui/material/styles';

export const ProductSubscriptionCardContainer = styled('div')(({ theme }) => ({
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

  '.ellipse-icon-list': {
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

    '.product-info-price': {
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: 'calc(100% - 40px)',
      margin: '0 20px 12px',

      '.product-info-item': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },

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

      '.product-contents-header': {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        gap: 20,
        marginBottom: 2,

        '.active-btn': {
          padding: '8px 28px',
          border: 'none',
          borderRadius: 7,
          background: theme.palette.secondary.main,
          cursor: 'pointer',
          color: '#000',
        },
      },

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
