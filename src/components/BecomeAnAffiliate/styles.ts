import { styled } from '@mui/material/styles';

export const BecomeAnAffiliateContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 90,
  alignItems: 'center',
  marginTop: 14,
  padding: '130px 90px',

  '.section-left': {
    '.affiliate-title': {
      marginBottom: 84,
    },

    form: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
    },
  },

  '.affiliate-img': {
    display: 'flex',
    alignItems: 'center',

    img: {
      width: '100%',
      height: 'auto',
    },
  },

  [theme.breakpoints.down('lg')]: {
    padding: '64px 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 32,
    padding: '46px 28px',

    '.section-left': {
      '.affiliate-title': {
        marginBottom: 78,
      },
    },
  },
}));
