import Image from 'next/image';
import Typography from '@mui/material/Typography';

import FlexBox from '@/components/v2/Common/FlexBox';
import { inter } from '@/components/v2/Common/CustomFont';
import { StepperContainer, OutlinedNumber } from './styles';

interface StepperProps {
  status: number;
  content: string;
  handleStepper: (_status: number) => void;
}

const Stepper = ({ status, content, handleStepper }: StepperProps) => {
  return (
    <StepperContainer>
      <Typography
        variant='h4'
        textTransform='uppercase'
        textAlign='center'
        lineHeight={1}
        mb={3.75}
      >
        welcome to
      </Typography>

      <Typography
        variant='wordmarkSignup'
        textTransform='uppercase'
        textAlign='center'
        lineHeight={1}
        mb={3.75}
      >
        sukuri protocol
      </Typography>

      <FlexBox mb={3.75}>
        <OutlinedNumber
          active={`${status === 1}`}
          onClick={() => handleStepper(1)}
        >
          <Typography
            variant='signupNumber'
            sx={{ fontFamily: inter.style.fontFamily }}
          >
            1
          </Typography>
        </OutlinedNumber>

        <Image
          src='/images/v2/line.png'
          width={72}
          height={2}
          alt='Line'
          style={{ margin: '0 5px' }}
        />

        <OutlinedNumber active={`${status === 2}`}>
          <Typography
            variant='signupNumber'
            sx={{ fontFamily: inter.style.fontFamily }}
          >
            2
          </Typography>
        </OutlinedNumber>
      </FlexBox>

      <Typography
        variant='subHeading'
        textAlign='center'
        lineHeight={1}
        sx={{ fontFamily: inter.style.fontFamily }}
        mb={1}
      >
        Step {status}. {status === 2 && 'optional'}
      </Typography>

      <Typography
        variant='paragraph'
        textAlign='center'
        lineHeight={1}
        sx={{ maxWidth: 315, fontFamily: inter.style.fontFamily }}
      >
        {content}
      </Typography>
    </StepperContainer>
  );
};

export default Stepper;
