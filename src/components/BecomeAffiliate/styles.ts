import { styled } from '@mui/material/styles';

export const BecomeAffiliateContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 60,
  alignItems: 'center',
  margin: '100px 0 0',
  padding: '0 60px',
  borderRadius: 7,

  '.affiliate-contents-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '.affiliate-title': {
      marginBottom: 20,
    },

    '.affiliate-content': {
      marginBottom: 40,
    },

    '.affiliate-link': {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.accent.main,
    },
  },

  '.avatar-group': {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    gap: 32,
    flexWrap: 'wrap',
  },

  [theme.breakpoints.down('lg')]: {
    '.avatar-group': {
      gap: 20,

      '.avatar': {
        width: 78,
        height: 'auto',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },

  [theme.breakpoints.down('sm')]: {
    gap: 25,
    margin: 0,
    padding: '50px 18px',

    '.affiliate-contents-wrapper': {
      '.affiliate-title': {
        marginBottom: 12,
      },

      '.affiliate-content': {
        marginBottom: 25,
      },
    },

    '.avatar-group': {
      gap: 12,

      '.avatar': {
        width: 50,
        height: 'auto',
      },
    },
  },
}));
