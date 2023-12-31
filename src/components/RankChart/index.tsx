import RankBar from './RankBar';
import { RankChartContainer } from './styles';
import type { Leaderboard } from '@/types';
import formatAddress from '@/utils/formatAddress';

interface RankChartProps {
  leaderboards: Leaderboard[];
}

const RankChart = ({ leaderboards }: RankChartProps) => {
  return (
    <RankChartContainer>
      <RankBar
        username={
          leaderboards[1]?.address
            ? formatAddress(leaderboards[1]?.address)
            : ''
        }
        ranking={2}
        points={
          leaderboards[1]?.points ? parseFloat(leaderboards[1].points) : 0
        }
        className='ranking-2'
      />
      <RankBar
        username={
          leaderboards[0]?.address ? formatAddress(leaderboards[0].address) : ''
        }
        ranking={1}
        points={
          leaderboards[0]?.points ? parseFloat(leaderboards[0].points) : 0
        }
        className='ranking-1'
      />
      <RankBar
        username={
          leaderboards[2]?.address ? formatAddress(leaderboards[2].address) : ''
        }
        ranking={3}
        points={
          leaderboards[2]?.points ? parseFloat(leaderboards[2].points) : 0
        }
        className='ranking-3'
      />
    </RankChartContainer>
  );
};

export default RankChart;
