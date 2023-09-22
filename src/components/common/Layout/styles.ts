import { styled } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';

export const LayoutContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  maxWidth: 1440,
  margin: '0 auto',
  padding: '0 80px',

  '.background-img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    zIndex: -100,
  },

  [theme.breakpoints.down('lg')]: {
    padding: '0 50px',
  },

  [theme.breakpoints.down('md')]: {
    padding: '0 30px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0 16px',
  },
}));
