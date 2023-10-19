import { Typography } from '@mui/material';
import { LeaderboardTagContainer } from './styles';

interface LeaderboardTagProps {
  icon: any;
  title: string;
  value?: string;
  className?: string;
  children?: React.ReactNode;
}

const LeaderboardTag = ({
  icon,
  title,
  value,
  className,
  children,
}: LeaderboardTagProps) => {
  const Asset = icon;
  return (
    <LeaderboardTagContainer className={className || 'leaderboard-tag'}>
      <Asset sx={{ fontSize: 34 }} />

      <Typography variant='h5' mb={2}>
        {title}
      </Typography>

      {children ? children : <Typography variant='h3'>{value}</Typography>}
    </LeaderboardTagContainer>
  );
};

export default LeaderboardTag;
