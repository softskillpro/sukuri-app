import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { useAccount, useConnect } from 'wagmi';
import type { Connector } from 'wagmi';
import { FlexBox } from '@/components/Common/FlexBox';
import { Loader } from '@/components/Common/Loader';
import { ConnectWalletModalContainer, WalletButton } from './styles';
import { wallets } from '@/constants';

interface ConnectWalletModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConnectWalletModal = ({ open, handleClose }: ConnectWalletModalProps) => {
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
    <ConnectWalletModalContainer
      open={open}
      onClose={handleClose}
      aria-labelledby='connect-wallet-modal-title'
      aria-describedby='connect-wallet-modal-description'
    >
      <div className='connect-wallet-body'>
        <Typography variant='h4'>Connect Wallet</Typography>
        <Typography variant='bodyBoldMobile'>
          Select your favourite wallet to log in to Sukuri
        </Typography>

        <div className='button-list'>
          {connectors.map((connector, id) => (
            <WalletButton
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
              {isLoading && current === connector.id && <Loader />}
            </WalletButton>
          ))}
        </div>
      </div>
    </ConnectWalletModalContainer>
  );
};

export default ConnectWalletModal;
