import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const Layout1 = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0 90px',

  [theme.breakpoints.down(1024)]: {
    padding: '0 20px',
  },
}));

// 60% width
export const Layout2 = styled(Box)(({ theme }) => ({
  width: '60%',

  [theme.breakpoints.down(1024)]: {
    width: '85%',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 40px)',
  },
}));

// 50% width
export const Layout4 = styled(FlexBox)(({ theme }) => ({
  width: '50%',

  [theme.breakpoints.down(1300)]: {
    width: '60%',
  },

  [theme.breakpoints.down(1024)]: {
    width: '85%',
  },

  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 40px)',
  },
}));

export const Layout3 = styled(FlexBox)(() => ({
  width: '100%',
  flexDirection: 'column',
  marginBottom: 50,
}));
