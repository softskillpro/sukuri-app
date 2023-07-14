import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const AuthContainer = styled(FlexBox)(() => ({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',

  '.auth-main-wrapper': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: '60px 0',
  },
}));
