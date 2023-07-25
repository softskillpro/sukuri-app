import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useAccount, useConnect, Connector } from 'wagmi';
import FlexBox from '@/components/v2/Common/FlexBox';
import Loader from '@/components/v2/Common/Loader';
import { montserrat } from '@/components/v2/Common/CustomFont';
import { ConnectWalletContainer } from './styles';

const wallets = [
  {
    name: 'Metamask',
    icon: 'metamask.png',
  },
  {
    name: 'Coinbase Wallet',
    icon: 'coinbase.png',
  },
  {
    name: 'WalletConnect',
    icon: 'walletconnect.png',
  },
  {
    name: 'OKX Wallet',
    icon: 'okx.png',
  },
];

interface ConnectWalletProps {
  open: boolean;
  onClose: () => void;
}

const ConnectWallet = ({ open, onClose }: ConnectWalletProps) => {
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
      router.push('/subscription-management');
      onClose();
    } catch (err: any) {
      console.log(err?.message || err);
    }
  };

  return (
    <ConnectWalletContainer
      onClose={onClose}
      open={open}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Typography
        fontSize={34}
        textAlign='center'
        mb={1}
        sx={{ fontFamily: montserrat.style.fontFamily }}
      >
        SUKURI PROTOCOL
      </Typography>

      <FlexBox className='connect-wallet-dialog-body'>
        <Typography
          variant='labelXl'
          textTransform='uppercase'
          textAlign='center'
          sx={{ fontFamily: montserrat.style.fontFamily }}
        >
          Connect Wallet
        </Typography>

        {/* <div className='wallet-divider' /> */}
        <Image
          src='/images/v2/divider.png'
          width={334}
          height={0.5}
          alt='Divider'
        />

        <Typography
          variant='labelLg'
          textTransform='uppercase'
          textAlign='center'
          sx={{ fontFamily: montserrat.style.fontFamily }}
        >
          Choose a wallet to connect.
        </Typography>

        {connectors.map((connector, id) => (
          <FlexBox
            key={connector.id}
            className='wallet-card'
            onClick={() => handleConnectWallet(connector)}
          >
            <FlexBox>
              <Image
                src={`/images/v2/${wallets[id]?.icon}`}
                width={32}
                height={32}
                alt='Wallet'
              />
              <Typography
                variant='labelLg'
                textTransform='uppercase'
                textAlign='center'
                ml={1}
                sx={{ fontFamily: montserrat.style.fontFamily }}
              >
                {connector.name}
              </Typography>
            </FlexBox>

            {isLoading && current === connector.id && <Loader small='true' />}
          </FlexBox>
        ))}

        <Typography
          variant='labelMd'
          textAlign='center'
          textTransform='uppercase'
          sx={{ fontFamily: montserrat.style.fontFamily }}
        >
          By using Sukuri, you agree to our Terms of Service and our Privacy
          Policy
        </Typography>
      </FlexBox>
    </ConnectWalletContainer>
  );
};

export default ConnectWallet;
