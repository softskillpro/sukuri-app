import { styled } from '@mui/material/styles';
import FlexBox from '@/components/V2/Common/FlexBox';

export const StepperContainer = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const OutlinedNumber = styled(FlexBox)(
  ({ active }: { active?: string }) => ({
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1px solid #FFF',
    background:
      active === 'true' ? 'rgba(255, 255, 255, 0.50);' : 'transparent',
  }),
);
