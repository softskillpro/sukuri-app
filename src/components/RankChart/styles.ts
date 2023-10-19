import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const RankChartContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'flex-end',
  margin: 'auto',

  '.rank-bar': {
    '.ranking-2': {
      background: theme.palette.glassMorphGradient.main,
    },

    '.ranking-3': {
      background: theme.palette.cardGradient.main,
    },
  },
}));

export const RankBarContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',

  '.rank-bar-body': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 18,
    padding: '62px 92px ',
    background: theme.palette.purpleGradient.main,
  },
}));
