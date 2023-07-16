import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const MembershipCardGroupContainer = styled(FlexBox)(({ theme }) => ({
  padding: 10,
  borderRadius: 10,
  border: '1px solid rgba(255, 255, 255, 0.20))',
  background: 'rgba(0, 0, 0, 0.50))',
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(2.5px)',

  '.membership-1': {
    width: 'calc((100% - 10px)/2)',
    marginRight: 10,
  },

  '.secondary-1': {
    width: 'calc((100% - 10px)/2)',
  },

  [theme.breakpoints.up('xl')]: {
    '.membership-1': {
      width: '40%',
    },

    '.secondary-1': {
      width: '60%',
    },
  },
}));
