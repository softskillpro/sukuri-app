import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FlexBox from '@/components/v2/Common/FlexBox';
import Stepper from '@/components/v2/Stepper';
import StyledInput from '@/components/v2/Common/StyledInput';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { AuthContainer } from '@/styles/auth';

const SignUp = () => {
  const [status, setStatus] = useState(2);

  return (
    <AuthContainer>
      <FlexBox className='auth-main-wrapper'>
        <Stepper
          status={status}
          content={
            status === 1
              ? 'Connect your wallet, pick a display name and link external accounts.'
              : 'Claim your VIP pass! This will grant perks in the future.'
          }
        />

        <Box mt={3.75}>
          <Typography mb={1}>You are not connected.</Typography>
          <StyledButton>connect wallet</StyledButton>
        </Box>

        <Box width='100%' mt={3.75}>
          <Typography mb={1} textAlign='center'>
            Your display name
          </Typography>
          <StyledInput />
        </Box>

        <Box width='100%' my={3.75}>
          <Typography mb={1} textAlign='center'>
            Link to services (optional)
          </Typography>

          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid item xs={6}>
              <Typography mb={0.5} textTransform='uppercase' textAlign='center'>
                email
              </Typography>
              <StyledInput placeholder='test@email.com' />

              <Typography
                mt={2}
                mb={0.5}
                textTransform='uppercase'
                textAlign='center'
              >
                confirm email
              </Typography>
              <StyledInput placeholder='test@email.com' />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                mt={2}
                mb={0.5}
                textTransform='uppercase'
                textAlign='center'
              >
                link twitter
              </Typography>

              <StyledButton
                sx={{
                  height: 'auto',
                  padding: '5px 15px',
                  background: 'rgba(107, 170, 232, 0.70)',
                }}
              >
                <Typography mr={3} textTransform='uppercase' textAlign='center'>
                  connect to twitter
                </Typography>
                <Image
                  src='/images/v2/twitter.png'
                  width={30}
                  height={24}
                  alt='Twitter'
                />
              </StyledButton>
            </Grid>
          </Grid>
        </Box>

        <StyledButton>submit</StyledButton>
      </FlexBox>
    </AuthContainer>
  );
};

export default SignUp;
