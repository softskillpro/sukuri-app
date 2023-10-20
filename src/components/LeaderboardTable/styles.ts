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
  padding: '0 40px',

  ':not(last-of-type)': {
    marginBottom: 13,
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '60px 7fr 5fr',
    padding: '0 20px',

    ':not(last-of-type)': {
      marginBottom: 7,
    },
  },
}));
