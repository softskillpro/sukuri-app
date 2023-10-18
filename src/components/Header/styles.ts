import { Modal, styled } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { StyledButton } from '@/components/Common/StyledButton';

export const HeaderContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'space-between',
  height: 100,

  '.logo-navigation': {
    textDecoration: 'none',
    color: '#fff',

    '.company-logo-wrapper': {
      '.beta-wrapper': {
        justifyContent: 'center',
        marginLeft: 16,
        padding: '8px 32px',
        borderRadius: 4,
        border: '1.37px solid #FFF',
      },
    },
  },

  '.header-body': {
    gap: 24,
    alignItems: 'flex-end',
    height: 36,
    maxHeight: 36,
    a: {
      textDecoration: 'none',
    },
  },

  '.menu-btn': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 35,
    borderRadius: 8,
    background: theme.palette.greyGradient.main,
    cursor: 'pointer',
    border: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    '.logo-navigation': {
      '.company-logo-wrapper': {
        '.beta-wrapper': {
          marginLeft: 12,
          padding: '6px 12px',
        },
      },
    },
  },
}));

export const HeaderModalContainer = styled(Modal)(({ theme }) => ({
  '.header-body-wrapper': {
    position: 'relative',
    width: '100%',
    height: '100%',
    background: '#080C10',
    boxShadow: theme.palette.boxShadow.main,

    '.company-logo-wrapper': {
      height: 100,
      padding: '0 30px 0',

      '.logo-navigation': {
        textDecoration: 'none',
        color: '#fff',

        '.beta-wrapper': {
          justifyContent: 'center',
          marginLeft: 12,
          padding: '6px 12px',
          borderRadius: 4,
          border: '1.37px solid #FFF',
        },
      },

      '.close-btn': {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      },
    },

    '.header-body': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '30px 40px',
      gap: 18,

      a: {
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.body1.fontFamily,
      },
    },

    '.connect-btn-wrapper': {
      position: 'absolute',
      left: 30,
      bottom: 50,
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 60px)',

      '.connect-btn': {
        width: '100%',
        padding: '16px 24px',
      },

      '.button-glow': {
        width: 'calc(100% - 60px)',
      },
    },
  },
}));

export const WalletButton = styled('button')(() => ({
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
}));

export const DisconnectButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 36,
  maxHeight: 36,
  padding: 12,
  borderRadius: 7,
  border: 'none',
  background: theme.palette.topProductsGradient.light,
  cursor: 'pointer',
  color: '#fff',
}));

export const ConnectButton = styled(StyledButton)(({ theme }) => ({
  height: 36,
  maxHeight: 36,
  ':disabled': {
    background: theme.palette.topProductsGradient.light,
  },

  ':hover': {
    background: theme.palette.topProductsGradient.light,
  },
}));
