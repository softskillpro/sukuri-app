import { Typography } from '@mui/material';
import { LeaderboardTableContainer } from './styles';
import { leaderboards } from '@/constants';

const LeaderboardTable = () => {
  return (
    <LeaderboardTableContainer>
      <div className='leaderboard-th'>
        {leaderboards.map((leaderboard) => (
          <Typography key={leaderboard}>{leaderboard}</Typography>
        ))}
      </div>
      <div className='leaderboard-tb'>
        <div className='leaderboard-tr'>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
        </div>
      </div>
    </LeaderboardTableContainer>
  );
};

export default LeaderboardTable;
