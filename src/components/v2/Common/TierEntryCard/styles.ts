import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const TierEntryCardContainer = styled(FlexBox)<{ active: string }>(
  ({ active, theme }) => ({
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderRadius: 10,
    border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
    background:
      active === 'true'
        ? 'rgba(0,0,0,0.2)'
        : 'rgba(0,0,0,0.4)',
    cursor: 'pointer',
  }),
);
