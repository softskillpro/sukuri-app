import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { useConnect } from 'wagmi';
import type { Connector } from 'wagmi';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/common/FlexBox';
import Loader from '@/components/common/Loader';
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
  const router = useRouter();
  const { isConnected } = useAccount();
  const { connectAsync, connectors, isLoading } = useConnect();

  const [current, setCurrent] = useState('');

  const handleConnectWallet = async (connector: Connector) => {
    try {
      setCurrent(connector.id);
      if (!isConnected) {
        await connectAsync({ connector });
      }
      router.push('/marketplace');
    } catch (err: any) {
      console.log(err?.message || err);
    }
  };

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

      {connectors.map((connector, id) => (
        <StyledButton
          key={connector.id}
          disabled={isLoading}
          onClick={() => handleConnectWallet(connector)}
          style={{ justifyContent: 'space-between' }}
        >
          <FlexBox>
            <Image
              src={wallets[id]?.icon || ''}
              width={20}
              height={20}
              alt='Wallet'
              style={{ marginRight: 9 }}
            />
            {connector.name}
          </FlexBox>
          {isLoading && current === connector.id && <Loader small='true' />}
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
