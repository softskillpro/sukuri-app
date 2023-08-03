import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const AuthContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  gap: 30,

  '.auth-main-wrapper': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 720,
    margin: '50px 0',
    padding: 25,
    background: 'rgba(0, 0, 0, 0.50)',
    borderRadius: 30,
  },

  [theme.breakpoints.down('md')]: {
    '.auth-main-wrapper': {
      width: 'calc(100% - 100px)',
      margin: '50px 50px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.auth-main-wrapper': {
      width: 'calc(100% - 20px)',
      margin: '50px 10px',
      padding: 20,
    },
  },
}));
