import Drawer from '@mui/material/Drawer';
import Popper from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const HeaderContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'space-between',
  height: 46,
  padding: '0 40px',
  background: theme.palette.primary.dark,
  borderRadius: 15,
  border: `1px solid ${theme.palette.border.dark}`,
  backgroundBlendMode: 'overlay',
  boxShadow: theme.palette.shadow.main,

  a: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',

    ':not(:last-of-type)': {
      marginRight: 80,
    },

    [theme.breakpoints.down('lg')]: {
      ':not(:last-of-type)': {
        marginRight: 40,
      },
    },
  },

  '.avatar': {
    borderRadius: '50%',
  },

  [theme.breakpoints.down('xl')]: {
    padding: '0 20px',
  },
}));

export const StyledDrawer = styled(Drawer)(() => ({
  '.MuiPaper-root': {
    width: 260,
    padding: '40px 20px',
    background: 'rgba(26, 25, 73, 0.8)',

    a: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },

    '.header-body': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 30,

      a: {
        marginBottom: 20,
        fontFamily: 'var(--Montserrat)',
      },

      '.avatar': {
        borderRadius: '50%',
      },

      button: {
        margin: 0,
      },
    },
  },
}));

export const HeaderPopper = styled(Popper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: 170,
  marginTop: '13px !important',
  padding: '15px 10px',
  zIndex: 1000,
  borderRadius: 15,
  border: `1px solid ${theme.palette.border.main}`,
  background: theme.palette.secondary.main,
  backgroundBlendMode: 'overlay',
  backdropFilter: 'blur(10px)',

  a: {
    textDecoration: 'none',
    lineHeight: 1,
    fontSize: 9,

    ':hover': {
      opacity: 0.7,
    },

    ':not(:last-of-type)': {
      marginBottom: 15,
    },
  },
}));

export const HeaderBodyContainer = styled(FlexBox)(({ theme }) => ({
  a: {
    fontSize: 9,

    ':hover': {
      opacity: 0.7,
    },
  },

  '.header-more-button': {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 20,
    padding: 10,
    borderRadius: 10,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#fff',
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'var(--Montserrat)',
    textTransform: 'uppercase',

    img: {
      marginLeft: 10,
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 10,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
}));