import { Typography } from '@mui/material';
import { TrophyIcon } from '@/components/Icons';
import { FlexBox } from '@/components/Common/FlexBox';
import { RankBarContainer } from './styles';

interface RankBarProps {
  username: string;
  ranking: number;
  points: number | string;
  className?: string;
}

const RankBar = ({
  username,
  ranking,
  points,
  className = '',
}: RankBarProps) => {
  return (
    <RankBarContainer className='rank-bar'>
      <Typography variant='h4' mb={4}>
        {username}
      </Typography>

      <div className={`rank-bar-body ${className}`}>
        <Typography variant={ranking === 1 ? 'h3' : 'h4'}>
          Rank {ranking}
        </Typography>

        <TrophyIcon sx={{ fontSize: ranking === 1 ? 46 : 36 }} />

        <FlexBox flexDirection='column'>
          <Typography variant={ranking === 1 ? 'h3' : 'h4'}>
            {points}
          </Typography>

          <Typography variant='body4' textTransform='uppercase'>
            points
          </Typography>
        </FlexBox>
      </div>
    </RankBarContainer>
  );
};

export default RankBar;
