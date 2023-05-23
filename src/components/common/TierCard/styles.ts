import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const TierCardContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: 378,
  height: 516,
  background: theme.palette.bgGradient.light,
  boxShadow: theme.palette.shadow.contrastText,
  borderRadius: 5,

  [theme.breakpoints.down(450)]: {
    width: '100%',
  },
}));

export const PriceCard = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: 280,
  height: 230,
  marginTop: '-200px',
  background: theme.palette.primary.main,
  boxShadow: theme.palette.shadow1.main,
  borderRadius: 5,

  [theme.breakpoints.down(420)]: {
    width: 230,
  },
}));
