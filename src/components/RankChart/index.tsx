import RankBar from './RankBar';
import { RankChartContainer } from './styles';

const RankChart = () => {
  return (
    <RankChartContainer>
      <RankBar username='Max' ranking={2} points={600} />
      <RankBar username='Grit' ranking={1} points={700} className='ranking-2' />
      <RankBar username='Fido' ranking={3} points={523} className='ranking-3' />
    </RankChartContainer>
  );
};

export default RankChart;
