import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const EntryCardContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  justifyContent: 'flex-end',
  width: '100%',
  height: 55,
  border: `1px solid ${theme.palette.border.contrastText}`,
  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
  borderRadius: 15,
  cursor: 'pointer',

  '.entry-title-wrapper':{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',

    padding: 10,
    
    zIndex: 3,
    width: '100%',
    height: '100%',
    borderRadius: 15,

    [theme.breakpoints.down('md')]: {
      padding: 5,
    },


    background:
      'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.20) 100%)',
    backgroundSize: '100%',
    backgroundPosition: 'right',

    transition: 'background 0.25s',

    '&:hover': {
      backgroundSize: '300%'
    },
  },

  '.entry-card-img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 15,
    zIndex: 2,
  },

  [theme.breakpoints.down('xl')]: {
    height: 95,
  },

  [theme.breakpoints.down('sm')]: {
    height: 35,
  },
}));
