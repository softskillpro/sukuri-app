import { Modal, styled } from '@mui/material';

export const ConnectWalletModalContainer = styled(Modal)(({ theme }) => ({}));

export const WalletButton = styled('button')(() => ({
  padding: 20,
  borderRadius: 7,
  border: '1px solid rgba(255, 255, 255, 0.40)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.40) 100%)',
}));
