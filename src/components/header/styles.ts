import { Modal, styled } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';

export const HeaderContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'space-between',
  height: 100,
  padding: '0 80px',

  '.company-logo-wrapper': {
    '.beta-wrapper': {
      justifyContent: 'center',
      marginLeft: 20,
      padding: '8px 30px',
      borderRadius: 4,
      border: '1.37px solid #FFF',
    },
  },

  '.header-body': {
    gap: 24,

    a: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
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

  [theme.breakpoints.down('lg')]: {
    padding: '0 50px',
  },

  [theme.breakpoints.down('md')]: {
    padding: '0 30px',
  },

  [theme.breakpoints.down('sm')]: {
    '.company-logo-wrapper': {
      '.beta-wrapper': {
        marginLeft: 12,
        padding: '6px 12px',
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
      marginTop: 18,
      padding: '18px 30px 0',

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
      width: 'calc(100% - 60px)',

      button: {
        width: '100%',
        padding: '16px 24px',
      },

      '.button-glow': {
        width: 'calc(100% - 60px)',
      },
    },
  },
}));
