import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MarketplaceCarouselCardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: '100%',

  height: 355,

  [theme.breakpoints.down('md')]: {
    height: 200,
  },

  [theme.breakpoints.down('sm')]: {
    height: 300,
  },

  '.card-bg': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    zIndex: -5,
    objectFit: 'cover',
  },

  '.category-button': {
    width: 'max-content',
    background: theme.palette.teal.main,
    order: '1px solid rgba(255,255,255.2)',
  },


  '.membership-card-wrapper':{
    width: "50%",
    padding: 5,

    [theme.breakpoints.down('md')]: {
      width: "100%",
    }
  }
}));

export const InfoWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  height: '100%',
  justifyContent: 'space-between',
  background:
      'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.72) 28.13%, rgba(0, 0, 0, 0.00) 100%)',
  borderRadius: 5,

  padding: 15,
  [theme.breakpoints.down('md')]: {
    padding: 10,
  },

  [theme.breakpoints.down('sm')]: {
    padding: 5,
  },
}));
