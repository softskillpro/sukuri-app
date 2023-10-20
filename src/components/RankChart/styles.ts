import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const RankChartContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'flex-end',
  margin: 'auto',

  '.rank-bar': {
    '.ranking-1': {
      background: theme.palette.glassMorphGradient.main,
    },

    '.ranking-3': {
      background: theme.palette.cardGradient.main,
    },
  },

  [theme.breakpoints.down('md')]: {
    '.rank-bar': {
      '.ranking-1': {
        '.p-rank, .p-points-val': {
          fontSize: 17,
        },

        '.p-points': {
          fontSize: 6,
        },

        svg: {
          fontSize: 24,
        },
      },

      '.ranking-2, .ranking-3': {
        '.p-rank, .p-points-val': {
          fontSize: 13,
        },

        '.p-points': {
          fontSize: 6,
        },

        svg: {
          fontSize: 18,
        },
      },
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
    padding: '62px 92px',
    background: theme.palette.purpleGradient.main,
  },

  [theme.breakpoints.down('md')]: {
    '.rank-bar-body': {
      gap: 9,
      padding: '30px 45px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.rank-bar-body': {
      padding: '30px 30px',
    },
  },
}));
