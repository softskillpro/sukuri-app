import { styled } from '@mui/material/styles';

export const MySubscriptionContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 100,
  margin: '22px 0',
  padding: '96px 80px',

  '.subscription-header': {
    height: 92,
  },

  '.subscription-tier-wrapper': {
    '.subscription-tier-list': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10,
    },
  },

  '.subscription-features': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 'calc(100% - 92px)',

    ul: {
      margin: 0,
      paddingLeft: 20,
    },

    '.button-group': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16,

      '.cancel-btn': {
        cursor: 'pointer',
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    gap: 70,
    padding: '96px 60px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 40,
    padding: '112px 40px 40px',

    '.subscription-header': {
      height: 'auto',
      marginBottom: 30,
    },

    '.subscription-features': {
      ul: {
        marginBottom: 45,
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    gap: 32,
    padding: '40px 24px',
  },
}));
