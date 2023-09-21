import { styled } from '@mui/material';

export const FooterContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr 2fr 2fr 3fr',
  gap: 30,
  marginBottom: 180,

  a: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },

  '.company-info': {
    display: 'flex',
    flexDirection: 'column',
    gap: 23,

    '.social-group': {
      gap: 5,
    },
  },

  '.footer-item': {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '4.5fr 2.5fr 2.5fr 2.5fr',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
      "company-info company-info"
      "footer-link footer-resources"
      "footer-company footer-company"
    `,
    gap: 50,
    marginBottom: 60,

    '.company-info': {
      gap: 20,
      gridArea: 'company-info',
    },

    '.footer-link,.footer-resources,.footer-company': {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    },

    '.footer-link': {
      gridArea: 'footer-link',
    },

    '.footer-resources': {
      gridArea: 'footer-resources',
    },

    '.footer-company': {
      gridArea: 'footer-company',
    },
  },
}));
