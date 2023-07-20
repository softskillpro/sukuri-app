import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const SubscriptionOverviewHeaderContainer = styled(FlexBox)(
  ({ theme }) => ({
    justifyContent: 'center',
    width: '100%',
    gap: 50,
    padding: 15,
    background: theme.palette.secondary.main,
    borderRadius: '15px 15px 0 0',

    '.action-toggle-wrapper': {
      flexDirection: 'column',
    },

    [theme.breakpoints.down('xl')]: {
      '.subscription-overview-header': {
        justifyContent: 'space-between',
      },
    },

    [theme.breakpoints.down('md')]: {
      gap: 35,
    },

    [theme.breakpoints.down('md')]: {
      gap: 15,
    },
  }),
);

export const SubscriptionOverviewHeaderPopper = styled(Popper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '13px !important',
  padding: 10,
  gap: 10,
  zIndex: 1000,
  borderRadius: 10,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  background: theme.palette.secondary.main,
  backgroundBlendMode: 'overlay',

  '.subscription-token-card-group': {
    width: '100%',
    padding: 0,
    background: 'transparent',
    border: 'none',

    '.ETH-token': {
      width: '100%',
    },

    '.token-card': {
      width: '100%',
    },
  },
}));
