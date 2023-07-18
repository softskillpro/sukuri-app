import Typography from '@mui/material/Typography';
import CheckboxIcon from '@/components/v2/svgs/CheckboxIcon';
import CancelIcon from '@/components/v2/svgs/CancelIcon';
import type { Action } from '@/interface/action.interface';
import { StatusHinterContainer } from './styles';

interface StatusHinterProps {
  action: Action;
}

const StatusHinter = ({ action }: StatusHinterProps) => {
  return (
    <StatusHinterContainer action={action}>
      <Typography
        variant='labelMd'
        fontWeight={600}
        lineHeight={1}
        textTransform='uppercase'
      >
        {action}
      </Typography>

      {action === 'Active' ? (
        <CheckboxIcon sx={{ fontSize: 18 }} />
      ) : (
        <CancelIcon sx={{ fontSize: 18 }} />
      )}
    </StatusHinterContainer>
  );
};

export default StatusHinter;
