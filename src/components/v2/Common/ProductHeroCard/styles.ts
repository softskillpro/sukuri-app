import { styled } from '@mui/material/styles';

export const ProductHeroCardContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 15,
  zIndex: 50,
  margin: "0px 15px",
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.6)',

  '.product-hero-img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 15,
    zIndex: -5,
    objectFit: 'cover',

    [theme.breakpoints.down('md')]: {
      borderRadius: 10,
    }
  },

  '.product-hero=img::after': {
    content: '""',
    // background:
    //   'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.72) 28.13%, rgba(0, 0, 0, 0.00) 100%)',
    background: 'red',
  },

  '.product-hero-card-wrapper': {
    padding: 15,
    borderRadius: 15,
    background:
      'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.72) 28.13%, rgba(0, 0, 0, 0.00) 100%)',

    [theme.breakpoints.down('md')]: {
      borderRadius: 10,
    },

    '.product-hero-content-wrapper': {
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginTop: 12,
      marginBottom: 40,
    },
  },

  '.membership-card-group-wrapper': {
    position: 'absolute',
    bottom: -68,
    right: 100,
    width: 650,
  },

  [theme.breakpoints.down('xl')]: {
    '.product-hero-card-wrapper': {
      '.product-hero-content-wrapper': {
        marginBottom: 100,
      },
    },

    '.membership-card-group-wrapper': {
      position: 'absolute',
      bottom: 15,
      right: 15,
      width: 420,
    },
  },

  [theme.breakpoints.down('md')]: {

    borderRadius: 10,

    '.product-hero-card-wrapper': {
      '.product-hero-content-wrapper': {
        marginBottom: 60,
      },
    },

    '.membership-card-group-wrapper': {
      position: 'initial',
      display: 'flex',
      justifyContent: 'center',
      width: 'calc(100% - 30px)',
      margin: '0 15px',
      paddingBottom: 15,

      '.membership-card-container': {
        width: '100%',
      },
    },
  },
}));
