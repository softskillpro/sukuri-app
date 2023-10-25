import { styled } from '@mui/material/styles';

export const PartnershipHeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '7fr 5fr',
  gap: 40,
  alignItems: 'center',
  marginTop: 18,
  padding: '160px 60px 0 90px',
  overflow: 'hidden',

  '.build-sukuri': {
    button: {
      margin: '110px 0 100px',
    },
  },

  '.sukuri-img': {
    position: 'relative',

    img: {
      position: 'absolute',
      top: -60,
      width: '100%',
      height: 'auto',
    },
  },

  [theme.breakpoints.down('lg')]: {
    padding: '100px 60px 0 60px',

    '.build-sukuri': {
      button: {
        margin: '70px 0 60px',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 32,
    padding: '90px 28px 0 28px',

    '.build-sukuri': {
      button: {
        margin: '40px 0',
      },
    },

    '.sukuri-img': {
      display: 'flex',
      justifyContent: 'flex-end',
      height: 92,

      img: {
        width: 240,
      },
    },
  },
}));
