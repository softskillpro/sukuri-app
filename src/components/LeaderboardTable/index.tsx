import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { FlexBox } from '@/components/Common/FlexBox';
import { TrophyIcon } from '@/components/Icons';
import { LeaderboardTableContainer, TableRow } from './styles';
import { leaderboardHeader } from '@/constants';
import type { Leaderboard } from '@/types';

interface LeaderboardTableProps {
  leaderboards: Leaderboard[];
}

const LeaderboardTable = ({ leaderboards }: LeaderboardTableProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LeaderboardTableContainer>
      <HeroGlow />

      <TableRow>
        {leaderboardHeader.map((head) => (
          <Typography
            key={head}
            variant={matches ? 'body3' : 'body3Mobile'}
            color='accent.light'
          >
            {head}
          </Typography>
        ))}
      </TableRow>
      <div>
        {leaderboards.map((leaderboard: Leaderboard) => {
          const { ranking, name, points } = leaderboard;
          return (
            <TableRow
              key={`leaderboard-${leaderboard.ranking}`}
              className='leaderboard-tb'
            >
              <HeroGlow />
              <Typography
                variant={matches ? 'h5' : 'body1Mobile'}
                fontWeight={700}
              >
                {ranking}
              </Typography>
              <Typography
                variant={matches ? 'h5' : 'body1Mobile'}
                fontWeight={700}
              >
                {name}
              </Typography>
              <FlexBox>
                <TrophyIcon sx={{ fontSize: 22 }} />
                <Typography
                  variant={matches ? 'h5' : 'body1Mobile'}
                  fontWeight={700}
                  ml={1}
                >
                  {points}
                </Typography>
              </FlexBox>
            </TableRow>
          );
        })}
      </div>
    </LeaderboardTableContainer>
  );
};

export default LeaderboardTable;
