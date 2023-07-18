import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';
import type { Action } from '@/interface/action.interface';

export const StatusHinterContainer = styled(FlexBox)<{ action: Action }>(
  ({ action, theme }) => ({
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    width: 116,
    padding: '5px 10px',
    borderRadius: 5,
    backgroundColor:
      action === 'Active'
        ? theme?.palette.green.main
        : theme?.palette.hardNegative.main,
  }),
);
