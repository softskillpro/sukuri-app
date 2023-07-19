import { styled } from '@mui/material/styles';

export const SubscriptionOverviewContainer = styled('div')(({ theme }) => ({
  margin: '40px 0',

  '.discovery-creators-card': {
    marginTop: 15,
  },

  '.sidebar-layout-body': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 15,
    border: `1px solid ${theme.palette.border.dark}`,
    background: 'rgba(0,0,0,0.4)',
    boxShadow: theme.palette.shadow1.main,

    '.subscription-overview-body': {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 15,
      padding: 15,
    },

    '.subscription-overview-footer': {
      width: '100%',
      padding: 15,
      borderRadius: '0px 0px 15px 15px',
      border: `2px solid ${theme.palette.lightInternalGlassBorder.main}`,
      background: theme.palette.green.dark,
      cursor: 'pointer',
    },
  },

  [theme.breakpoints.down('lg')]: {
    '.sidebar-layout-body': {
      '.subscription-overview-body': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.sidebar-layout-body': {
      '.subscription-overview-body': {
        gridTemplateColumns: '1fr',
      },
    },
  },
}));
