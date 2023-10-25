import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import LeaderboardHero from '@/components/LeaderboardHero';
import RankChart from '@/components/RankChart';
import LeaderboardTable from '@/components/LeaderboardTable';
import { LeaderboardContainer } from '@/styles/leaderboard';
import { leaderboards } from '@/constants';

const Leaderboard = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LeaderboardContainer>
      <LeaderboardHero />

      <FlexBox
        flexDirection='column'
        justifyContent='center'
        className='leaderboard-intro'
      >
        <Typography
          variant={matches ? 'h3' : 'h2Mobile'}
          mb={2}
          textAlign='center'
        >
          Sukuri Prime Leaderboard
        </Typography>

        <Typography
          variant={matches ? 'body1' : 'body2Mobile'}
          textAlign='center'
        >
          Complete challenges, refer friends, and participate in the protocol to
          earn points and ETH!
        </Typography>
      </FlexBox>

      <RankChart leaderboards={leaderboards} />

      <LeaderboardTable leaderboards={leaderboards} />
    </LeaderboardContainer>
  );
};

export default Leaderboard;
