import { Typography, useMediaQuery, useTheme } from '@mui/material';
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <RankBarContainer className='rank-bar'>
      <Typography variant={matches ? 'h4' : 'h4Mobile'} mb={matches ? 4 : 2}>
        {username}
      </Typography>

      <div className={`rank-bar-body ${className}`}>
        <Typography variant={ranking === 1 ? 'h3' : 'h4'} className='p-rank'>
          Rank {ranking}
        </Typography>

        <TrophyIcon sx={{ fontSize: ranking === 1 ? 46 : 36 }} />

        <FlexBox flexDirection='column'>
          <Typography
            variant={ranking === 1 ? 'h3' : 'h4'}
            className='p-points-val'
          >
            {points}
          </Typography>

          <Typography
            variant='body4'
            textTransform='uppercase'
            className='p-points'
          >
            points
          </Typography>
        </FlexBox>
      </div>
    </RankBarContainer>
  );
};

export default RankBar;
