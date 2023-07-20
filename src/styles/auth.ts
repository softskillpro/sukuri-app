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
    width: '80%',
    padding: '60px 0',
  },

  [theme.breakpoints.down('sm')]: {
    '.auth-main-wrapper': {
      width: '100%',
      padding: 20,
    },
  },
}));
