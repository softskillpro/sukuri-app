import { styled } from '@mui/material/styles';

export const LeaderboardTableContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '48px 42px',

  '.leaderboard-th': {},

  '.leaderboard-tb': {
    position: 'relative',
    height: 110,
    alignItems: 'center',
  },

  [theme.breakpoints.down('md')]: {
    padding: '48px 16px',

    '.leaderboard-tb': {
      height: 66,
    },
  },
}));

export const TableRow = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '100px 5fr 7fr',
  gap: 13,
  marginBottom: 13,
  padding: '0 40px',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '40px 7.5fr 4.5fr',
    marginBottom: 7,
    padding: '0 20px',
  },
}));
