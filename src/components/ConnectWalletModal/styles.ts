import { Modal, styled } from '@mui/material';

export const ConnectWalletModalContainer = styled(Modal)(({ theme }) => ({
  zIndex: 10,

  '.modal-wrapper': {
    width: '100%',
    height: '100%',

    '.connect-wallet-body': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      flexDirection: 'column',
      width: 'fit-content',
      padding: '45px 52px 35px',
      borderRadius: 7,
      background: theme.palette.topProductsGradient.light,
      boxShadow: theme.palette.boxShadow.main,
      backdropFilter: 'blur(5px)',

      '.button-list': {
        gap: 12,
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.modal-wrapper': {
      '.connect-wallet-body': {
        width: 'calc(100% - 40px)',
        padding: '45px 20px 35px',

        '.button-list': {
          width: '100%',
        },
      },
    },
  },
}));

export const WalletButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 456,
  padding: 20,
  borderRadius: 7,
  border: '1px solid rgba(255, 255, 255, 0.40)',
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.40) 100%)',
  cursor: 'pointer',
  fontSize: 20,
  fontWeight: 700,
  color: '#fff',

  ':hover': {
    opacity: 0.7,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
