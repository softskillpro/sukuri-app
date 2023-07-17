import { styled } from '@mui/material/styles';

export const SubscriptionManagementContainer = styled('div')(({ theme }) => ({
  margin: '40px 0',

  '.discovery-creators-card': {
    marginTop: 15,
  },

  '.sidebar-layout-body': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
    borderRadius: 15,
    border: `1px solid ${theme.palette.border.dark}`,
    background: theme.palette.secondary.main,
    boxShadow: theme.palette.shadow1.main,
    backdropFilter: 'blur(15px)',

    '.subscription-management-header': {
      width: '100%',
      padding: 15,
      background: theme.palette.secondary.main,
      borderRadius: '15px 15px 0 0',
    },

    '.subscription-management-body': {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '2fr 3fr',
      gap: 10,
      padding: '0 10px',

      '.deactivate-wrapper': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',

        '.deactivate-card': {
          justifyContent: 'space-between',
          width: '100%',
          gap: 15,
          marginBottom: 40,
          padding: '10px 15px',
          borderRadius: 10,
          border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
          background: theme.palette.secondary.dark,
          backgroundBlendMode: 'overlay',
        },
      },
    },

    '.subscription-management-footer': {
      width: '100%',
      padding: 15,
      borderRadius: '0px 0px 15px 15px',
      border: `2px solid ${theme.palette.lightInternalGlassBorder.main}`,
      background: theme.palette.green.dark,
      cursor: 'pointer',
    },
  },

  [theme.breakpoints.down('xl')]: {
    '.sidebar-layout-body': {
      '.subscription-management-body': {
        gridTemplateColumns: '1fr',
        gap: 40,
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '.sidebar-layout-body': {
      '.subscription-management-body': {
        '.deactivate-wrapper': {
          '.deactivate-card': {
            flexDirection: 'column',
            marginBottom: 20,
          },
        },
      },
    },
  },
}));
