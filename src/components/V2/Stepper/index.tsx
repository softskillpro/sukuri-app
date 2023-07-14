import Image from 'next/image';
import Typography from '@mui/material/Typography';

import FlexBox from '@/components/V2/Common/FlexBox';
import { StepperContainer, OutlinedNumber } from './styles';

interface StepperProps {
  status: number;
  content: string;
}

const Stepper = ({ status, content }: StepperProps) => {
  return (
    <StepperContainer>
      <Typography textTransform='uppercase' mb={3.75}>
        welcome to
      </Typography>

      <Typography textTransform='uppercase' mb={3.75}>
        sukuri protocol
      </Typography>

      <FlexBox mb={3.75}>
        <OutlinedNumber active={`${status === 1}`}>1</OutlinedNumber>

        <Image
          src='/images/v2/line.png'
          width={72}
          height={2}
          alt='Line'
          style={{ margin: '0 5px' }}
        />

        <OutlinedNumber active={`${status === 2}`}>2</OutlinedNumber>
      </FlexBox>

      <Typography mb={1}>
        Step {status}. {status === 2 && 'optional'}
      </Typography>

      <Typography textAlign='center' sx={{ maxWidth: 315 }}>
        {content}
      </Typography>
    </StepperContainer>
  );
};

export default Stepper;
