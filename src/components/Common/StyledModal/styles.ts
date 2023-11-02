import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';

export const StyledModalContainer = styled(Modal)(({ theme }) => ({
  '.MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  '.modal-body': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    flexDirection: 'column',
    width: 780,
    padding: '116px 60px',
    borderRadius: 7,
    background: theme.palette.primary.light,
    boxShadow: theme.palette.boxShadow.main,
    backdropFilter: 'blur(5px)',
    border: 'none',
    outline: 'none',

    ':focus-visible': {
      border: 'none',
      outline: 'none',
    },

    '.close-btn': {
      position: 'absolute',
      top: 48,
      right: 54,
      cursor: 'pointer',
    },
  },

  [theme.breakpoints.down('lg')]: {
    '.modal-body': {
      width: 680,
    },
  },

  [theme.breakpoints.down('md')]: {
    '.modal-body': {
      width: 500,
      padding: '116px 40px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.modal-body': {
      width: 'calc(100% - 32px)',
      padding: '116px 24px',
    },
  },
}));

export const SecondaryModalContainer = styled(Modal)(({ theme }) => ({
  zIndex: 10,

  '.MuiBackdrop-root': {
    opacity: '0.8 !important',
    background: theme.palette.primary.light,
  },

  '.modal-wrapper': {
    width: '100%',
    height: '100%',

    '.modal-body': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      flexDirection: 'column',
      width: 590,
      padding: 60,
      borderRadius: 7,
      background: theme.palette.topProductsGradient.main,
      boxShadow: theme.palette.boxShadow.main,
      backdropFilter: 'blur(10px)',

      '.close-btn': {
        position: 'absolute',
        top: 30,
        right: 30,
        cursor: 'pointer',
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.modal-wrapper': {
      '.modal-body': {
        width: 'calc(100% - 40px)',
        padding: '60px 20px',
      },
    },
  },
}));
