import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const NewUserContainer = styled(FlexBox)(() => ({
  position: 'relative',
  flexDirection: 'column',
  overflow: 'hidden',

  '.new-user-flower': {
    position: 'absolute',
    top: -5,
    height: 'auto',
  },
}));
