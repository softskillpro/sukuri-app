import { styled } from '@mui/material/styles';

export const SecondaryProductCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 7,
  cursor: 'pointer',

  '.product-img': {
    width: '100%',
    height: 250,
    marginTop: 16,
    borderRadius: '5px 5px 0 0',
    objectFit: 'cover',
  },

  '.favorite-icon': {
    position: 'absolute',
    right: 20,
    top: 34,
  },

  '.product-info': {
    position: 'absolute',
    left: 0,
    top: 210,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 'calc(100% - 40px)',
    margin: '0 20px',

    '.product-price': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  '.product-contents': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 16,
    padding: '16px 20px',
    borderRadius: '0px 0px 7px 7px',
  },

  [theme.breakpoints.down('sm')]: {
    '.product-img': {
      height: 160,
    },

    '.favorite-icon': {
      right: 13,
      top: 30,
    },

    '.product-info': {
      width: 'calc(100% - 26px)',
      top: 132,
      margin: '0 13px',
    },

    '.product-contents': {
      gap: 10,
      padding: '5px 13px 12px',
    },
  },
}));
