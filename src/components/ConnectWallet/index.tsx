import Image from 'next/image';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/common/FlexBox';
import { ConnectWalletContainer, StyledButton } from './styles';

const wallets = [
  {
    name: 'Metamask',
    icon: '/images/metamask.png',
  },
  {
    name: 'Coinbase Wallet',
    icon: '/images/coinbase.png',
  },
  {
    name: 'WalletConnect',
    icon: '/images/walletconnect.png',
  },
  {
    name: 'Rainbow',
    icon: '/images/rainbow.png',
  },
];

const ConnectWallet = () => {
  return (
    <ConnectWalletContainer>
      <Typography variant='h6' fontWeight={500} mt={4.5}>
        Welcome!
      </Typography>
      <Typography
        variant='custom1'
        color='text.secondary'
        mb={3.5}
        component='div'
      >
        Connect your wallet.
      </Typography>

      {wallets.map((wallet) => (
        <StyledButton key={wallet.name}>
          <Image
            src={wallet.icon}
            width={20}
            height={20}
            alt='Wallet'
            style={{ marginRight: 9 }}
          />
          {wallet.name}
        </StyledButton>
      ))}

      <FlexBox className='wallet-helper'>
        <Typography variant='subtitle2' fontWeight={700} color='white.main'>
          I’m a creator!
        </Typography>
        <Typography variant='custom1' color='white.main'>
          Learn more about Sukuri
        </Typography>
        <Typography variant='custom1' color='white.main'>
          Sign up as Creator
        </Typography>
      </FlexBox>
    </ConnectWalletContainer>
  );
};

export default ConnectWallet;
