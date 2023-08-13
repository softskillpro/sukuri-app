import { useCallback, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import FlexBox from '@/components/v2/Common/FlexBox';
import Stepper from '@/components/v2/Stepper';
import StyledInput from '@/components/v2/Common/StyledInput';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import { inter } from '@/components/v2/Common/CustomFont';
import { AuthContainer } from '@/styles/auth';

const SignUp = () => {
  const [status, setStatus] = useState(1);

  const handleStepper = useCallback((_status: number) => {
    setStatus(_status);
  }, []);

  const handleSubmit = () => {
    setStatus((prev) => prev + 1);
  };

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
          handleStepper={handleStepper}
        />

        {status === 1 ? (
          <>
            <FlexBox mt={3.75} sx={{ flexDirection: 'column' }}>
              <Typography
                variant='subHeading'
                textAlign='center'
                lineHeight={1}
                mb={1}
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                You are not connected.
              </Typography>
              <StyledButton variants='xl' sx={{ height: 30 }}>
                <Typography variant='labelMd' textTransform='uppercase'>
                  connect wallet
                </Typography>
              </StyledButton>
            </FlexBox>

            <Box width='100%' mt={3.75}>
              <Typography
                variant='subHeading'
                textAlign='center'
                lineHeight={1}
                mb={1}
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                Your display name
              </Typography>

              <StyledInput placeholder='enter display name' />
            </Box>

            <FlexBox width='100%' my={3.75} sx={{ flexDirection: 'column' }}>
              <Typography
                variant='subHeading'
                textAlign='center'
                lineHeight={1}
                mb={1}
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                Link to services (optional)
              </Typography>

              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='labelMd'
                    textTransform='uppercase'
                    textAlign='center'
                    mb={0.5}
                  >
                    email
                  </Typography>
                  <StyledInput placeholder='test@email.com' />

                  <Typography
                    mt={2}
                    mb={0.5}
                    variant='labelMd'
                    textTransform='uppercase'
                    textAlign='center'
                  >
                    confirm email
                  </Typography>
                  <StyledInput placeholder='test@email.com' />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pt: '16px !important',
                  }}
                >
                  <Typography
                    variant='labelMd'
                    textTransform='uppercase'
                    textAlign='center'
                    mb={0.625}
                  >
                    link twitter
                  </Typography>

                  <StyledButton
                    sx={{
                      padding: '5px 15px',
                      background: 'rgba(107, 170, 232, 0.70)',

                      ':hover': {
                        background: 'rgba(107, 170, 232, 0.70)',
                      },
                    }}
                  >
                    <Typography
                      mr={3}
                      textTransform='uppercase'
                      textAlign='center'
                      variant='labelMd'
                    >
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
            </FlexBox>

            <StyledButton
              variants='xl'
              sx={{ height: 30 }}
              onClick={handleSubmit}
            >
              <Typography variant='labelMd' textTransform='uppercase'>
                submit
              </Typography>
            </StyledButton>
          </>
        ) : (
          <>
            <FlexBox mt={3.75} sx={{ flexDirection: 'column' }}>
              <Typography
                variant='paragraph'
                lineHeight={1}
                mb={1}
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                Connected wallet:
              </Typography>
              <Typography
                variant='subHeading'
                textAlign='center'
                lineHeight={1}
                fontWeight={600}
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                0x123456789875r4e3w212345678987654321
              </Typography>
            </FlexBox>

            <FlexBox textAlign='center' mt={3.75}>
              <Typography
                variant='subHeading'
                textAlign='center'
                lineHeight={1}
                fontWeight={600}
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                This account does not yet have a VIP pass.
              </Typography>
            </FlexBox>

            <Box textAlign='center' my={3.75}>
              <StyledButton
                variants='xl'
                sx={{ height: 30 }}
                onClick={handleSubmit}
              >
                <Typography variant='labelMd' textTransform='uppercase'>
                  MINT
                </Typography>
              </StyledButton>
            </Box>

            <StyledButton
              sx={{
                height: 30,
                backgroundColor: 'transparent !important',
                border: 'none !important',
              }}
              status='Unavailable'
              onClick={handleSubmit}
            >
              <Typography variant='labelMd' textTransform='uppercase'>
                skip
              </Typography>
            </StyledButton>
          </>
        )}
      </FlexBox>
    </AuthContainer>
  );
};

export default SignUp;
