import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import LeaderboardHero from '@/components/LeaderboardHero';
import RankChart from '@/components/RankChart';
import LeaderboardTable from '@/components/LeaderboardTable';
import { LeaderboardContainer } from '@/styles/leaderboard';

const Leaderboard = () => {
  return (
    <LeaderboardContainer>
      <LeaderboardHero />

      <FlexBox
        flexDirection='column'
        justifyContent='center'
        className='leaderboard-intro'
      >
        <Typography variant='h3' mb={2} textAlign='center'>
          Sukuri Prime Leaderboard
        </Typography>

        <Typography variant='body1' textAlign='center'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices.
        </Typography>
      </FlexBox>

      <RankChart />

      <LeaderboardTable />
    </LeaderboardContainer>
  );
};

export default Leaderboard;
