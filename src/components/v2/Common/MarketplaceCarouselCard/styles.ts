import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MarketplaceCarouselCardContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  width: '100%',

  height: 355,

  padding: 15,

  [theme.breakpoints.down('md')]: {
    height: 200,
    padding: 10,
  },

  [theme.breakpoints.down('sm')]: {
    height: 300,
    padding: 5,
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
    background: theme.palette.secondary.teal,
    order: '1px solid rgba(255,255,255.2)',
  },

  '.product-title': {
    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))',
  },
}));

export const InfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  height: '100%',
  justifyContent: 'space-between',
  padding: '30px 15px 15px 15px',
  background: 'rgb(0,0,0,0.4)', // TODO: temp solution
  borderRadius: 5,
}));
