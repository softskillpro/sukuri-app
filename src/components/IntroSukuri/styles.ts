import { styled } from '@mui/material/styles';

export const IntroSukuriContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '5fr 7fr',
  gap: 60,
  alignItems: 'center',
  margin: '100px 0 0',
  padding: '20px 60px',
  borderRadius: 7,
  background: theme.palette.fadeGradient.contrastText,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(5px)',

  '.intro-content-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '.intro-title': {
      marginBottom: 20,
    },

    '.intro-content': {
      marginBottom: 48,
    },
  },

  '.subscribe-img': {
    width: '100%',
    height: 'auto',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },

  [theme.breakpoints.down('sm')]: {
    gap: 25,
    margin: 0,
    padding: '50px 18px',
    background: 'transparent',
  },
}));
