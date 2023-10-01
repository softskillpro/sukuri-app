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
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 28,
    width: '100%',
  },

  [theme.breakpoints.down(1255)]: {},

  [theme.breakpoints.down('md')]: {
    '.tier-card-list': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.tier-card-list': {
      gridTemplateColumns: '1fr',
    },
  },
}));
