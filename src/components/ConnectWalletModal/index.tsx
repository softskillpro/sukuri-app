import { useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { useAccount, useConnect } from 'wagmi';
import type { Connector } from 'wagmi';
import { FlexBox } from '@/components/Common/FlexBox';
import { Loader } from '@/components/Common/Loader';
import { ConnectWalletModalContainer, WalletButton } from './styles';
import { wallets } from '@/constants';
import { api } from '@/utils/api';

const inter = Inter({
  subsets: ['latin'],
  variable: '--Inter',
});

interface ConnectWalletModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConnectWalletModal = ({ open, handleClose }: ConnectWalletModalProps) => {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { connectAsync, connectors, isLoading } = useConnect();

  const createUserMutation = api.user.create.useMutation();

  const [current, setCurrent] = useState('');

  const handleConnectWallet = async (connector: Connector) => {
    try {
      setCurrent(connector.id);
      if (!isConnected) {
        const wallet = await connectAsync({ connector });

        await createUserMutation.mutateAsync({
          name: 'Test User2',
          username: 'tester',
          address: wallet.account,
          email: 'tester@gmail.com',
        });
      }

      router.push('/');
    } catch (err: any) {
      if (err?.message === 'Connector not found') {
        toast.error(
          `It looks like you haven't installed the wallet extension. Please install a wallet extension`,
        );
      } else {
        toast.error(err?.message || err);
      }
    } finally {
      handleClose();
    }
  };

  return (
    <ConnectWalletModalContainer
      open={open}
      onClose={handleClose}
      aria-labelledby='connect-wallet-modal-title'
      aria-describedby='connect-wallet-modal-description'
    >
      <FlexBox className='modal-wrapper'>
        <FlexBox className={`${inter.className} connect-wallet-body`}>
          <Typography variant='h4' mb={1.5}>
            Connect Wallet
          </Typography>

          <Typography variant='bodyBoldMobile' mb={1.5}>
            Select your favourite wallet to log in to Sukuri
          </Typography>

          <Typography variant='bodyBoldMobile' mb={1.25}>
            Popular
          </Typography>

          <FlexBox flexDirection='column' className='button-list'>
            {connectors.map((connector, id) => {
              return (
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
              );
            })}
          </FlexBox>

          <Typography
            variant='body5'
            mt={1.5}
            textAlign='center'
            maxWidth='70%'
          >
            By using Sukuri, you agree to our Terms of Service and our Privacy
            Policy.
          </Typography>
        </FlexBox>
      </FlexBox>
    </ConnectWalletModalContainer>
  );
};

export default ConnectWalletModal;
