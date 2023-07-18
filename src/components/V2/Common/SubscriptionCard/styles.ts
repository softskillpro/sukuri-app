import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const SubscriptionCardContainer = styled(FlexBox)<{
  variant?: 'primary' | 'secondary';
  orientation?: 'horizontal' | 'vertical';
}>(({ variant, orientation, theme }) => ({
  flexDirection: orientation === 'vertical' ? 'row' : 'column',
  borderRadius: 5,
  border: `1px solid ${theme.palette.border.main}`,

  '.subscription-label': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    padding: ' 0 10px',
  },

  '.price-label': {
    background:
      variant === 'primary'
        ? theme.palette.green.light
        : theme.palette.blue.dark,
    borderRadius: orientation === 'vertical' ? '5px 0 0 5px' : '5px 5px 0 0',
  },

  '.period-label': {
    background:
      variant === 'primary'
        ? theme.palette.green.dark
        : theme.palette.blue.main,
    borderRadius: orientation === 'vertical' ? '0 5px 5px 0' : '0 0 5px 5px',
  },

  // [theme.breakpoints.down('sm')]: {
  //   flexDirection: 'column',

  //   '.price-label': {
  //     width: '100%',
  //     borderRadius: '5px 5px 0 0',
  //   },

  //   '.period-label': {
  //     width: '100%',
  //     borderRadius: '0 0 5px 5px',
  //   },
  // },
}));
