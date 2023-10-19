import { styled } from '@mui/material/styles';

export const LeaderboardContainer = styled('div')(({ theme }) => ({
  marginBottom: 160,

  '.leaderboard-intro': {
    maxWidth: '80%',
    margin: '80px auto 120px',
  },

  [theme.breakpoints.down('md')]: {
    marginBottom: 100,
  },
}));
