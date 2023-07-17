import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const UserInfoCardContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: '100%',
  padding: '30px 15px',
  borderRadius: 15,
  border: `1px solid ${theme.palette.border.dark}`,
  background: theme.palette.secondary.main,
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(2.5px)',

  '.user-info-item': {
    flexDirection: 'column',
    width: '100%',

    '.user-info-token-card-group': {
      background: 'transparent',
      backdropFilter: 'none',
    },
  },

  [theme.breakpoints.down('xl')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    padding: 20,
  },

  [theme.breakpoints.down('sm')]: {
    padding: 12,
  },
}));
