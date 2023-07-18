import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const MembershipCardGroupContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: 10,
  borderRadius: 15,
  border: '1px solid rgba(255, 255, 255, 0.20))',
  background: 'rgba(0, 0, 0, 0.50)',
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(2.5px)',

  '.membership-1': {
    width: '40%',
    height: '100%',
    marginRight: 10,
  },

  '.secondary-1': {
    width: '60%',
    height: '100%',
  },
}));
