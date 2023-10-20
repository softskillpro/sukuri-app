import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { FlexBox } from '@/components/Common/FlexBox';

export const LeaderboardHeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '3fr 9fr',
  alignItems: 'center',
  gap: 60,
  marginTop: 18,
  padding: '84px 80px',

  '.user-info': {
    display: 'flex',
    flexDirection: 'column',
  },

  '.leaderboard-info': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'wrap',
    padding: 40,

    svg: {
      path: { fill: 'white' },
    },

    '.clain-reward': {
      '.price-tag': {
        marginBottom: 16,
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    padding: '64px 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 32,
    padding: '40px 40px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: 0,

    '.user-info': {
      margin: '54px 40px 32px',
    },

    '.leaderboard-info': {
      margin: '0 12px 16px',
      padding: '52px 28px',
    },
  },
}));

export const ConnectWalletNotify = styled(FlexBox)(() => ({
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  height: 400,
}));

export const LeaderboardInfoGlow = styled(HeroGlow)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.dark}`,
}));

export const LeaderboardDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary.dark,
}));
