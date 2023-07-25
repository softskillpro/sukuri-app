import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

export const ConnectWalletContainer = styled(Dialog)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',

  '.MuiPaper-root': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    margin: 0,
    zIndex: 1000000,
    background: 'transparent',

    '.connect-wallet-dialog-body': {
      flexDirection: 'column',
      padding: 12,
      gap: 12,
      borderRadius: 8,
      border: '2px solid rgba(255, 255, 255, 0.15)',
      background: theme.palette.primary.dark,
      boxShadow: theme.palette.shadow1.main,
      backdropFilter: 'blur(15px)',

      '.wallet-divider': {
        width: '100%',
        height: 1,
        background:
          'radial-gradient(863939.57% 50.15% at 50.00% -900.03%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
        borderBottom: '0.5px solid white',
      },

      '.wallet-card': {
        justifyContent: 'space-between',
        width: '100%',
        padding: 8,
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.35)',
        backdropFilter: 'blur(15px)',
        cursor: 'pointer',

        ':hover': {
          opacity: 0.6,
        },
      },
    },
  },
}));
