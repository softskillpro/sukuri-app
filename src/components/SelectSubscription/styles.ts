import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const SelectSubscriptionContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  margin: '80px 0',

  '.select-plan': {
    gap: 9,
    margin: '32px 0 88px',
  },

  '.tier-card-list': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 28,
    width: '100%',
  },

  [theme.breakpoints.down(1255)]: {},

  [theme.breakpoints.down('md')]: {},

  [theme.breakpoints.down('sm')]: {
    '.tier-card-list': {},
  },
}));
