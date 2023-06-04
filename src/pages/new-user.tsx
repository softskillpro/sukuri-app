import Link from 'next/link';
import { useAccount } from 'wagmi';
import Typography from '@mui/material/Typography';
import LogoIcon from '@/components/svgs/LogoIcon';
import SetupProfile from '@/components/SetupProfile';
import FlexBox from '@/components/common/FlexBox';
import useIsMounted from '@/hooks/useIsMounted';
import { NewUserContainer } from '@/styles/new-user';

const NewUser = () => {
  const isMounted = useIsMounted();
  const { address, isConnected } = useAccount();

  return (
    <NewUserContainer>
      <LogoIcon
        fill='rgba(255, 192, 203, 0.25)'
        sx={{ fontSize: 650 }}
        className='new-user-flower'
      />

      <FlexBox style={{ flexDirection: 'column', margin: '0 20px' }}>
        <Typography
          variant='subtitle1'
          color='text1.main'
          textAlign='center'
          mt={3}
          mb={1.5}
        >
          Sukuri Protocol
        </Typography>

        <Typography
          variant='custom6'
          color='text1.contrastText'
          textAlign='center'
          mb={1}
        >
          Ready to get started?
        </Typography>

        <Typography
          variant='subtitle1'
          color='text1.contrastText'
          textAlign='center'
          mb={5.5}
        >
          Your Sukuri Pass is your key to the Sukuri ecosystem.
        </Typography>

        <Typography
          variant='custom8'
          color='text1.contrastText'
          textAlign='center'
        >
          Sukuri uses ERC4337 technology to make payments easy, frictionless and
          automatic.
          <br />
          Click{' '}
          <Link href='/' style={{ textDecoration: 'none', color: '#FFC0CB' }}>
            here
          </Link>{' '}
          to learn more about ERC4337 and how that makes Sukuri different.
          <br />
          <br />
          Connected wallet:
          <br />
          <span style={{ color: '#FFC0CB' }}>
            {isMounted && isConnected ? address : ''}
          </span>
        </Typography>
      </FlexBox>

      <SetupProfile address={address} />
    </NewUserContainer>
  );
};

export default NewUser;
