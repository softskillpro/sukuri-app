import { styled } from '@mui/material/styles';

export const SubscriptionTiersCardContainer = styled('div')(({ theme }) => ({
  width: 'calc(100% - 60px)',
  margin: '60px 30px 30px',
  padding: 30,
  borderRadius: 15,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  backgroundBlendMode: 'overlay',
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(10px) brightness(150%)',

  '.subscription-tiers-card-body': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 15,

    '.subscription-tiers-group': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 15,
    },

    '.subscription-tier-detail': {
      flexDirection: 'column',
      gap: 15,
      padding: 30,
      borderRadius: 10,
      border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
      background: theme.palette.primary.dark,
      boxShadow: theme.palette.shadow.main,
      backdropFilter: 'blur(2.5px)',

      '.subscription-tier-detail-contents': {
        width: '100%',
        alignItems: 'stretch',
        gap: 15,

        '.subscription-tier-detail-content': {
          flex: 1,
          width: 'calc((100% - 15px) / 2)',
          padding: 15,
          borderRadius: 5,
          border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
          background: theme.palette.primary.dark,
          backgroundBlendMode: 'overlay',
        },
      },
    },
  },

  [theme.breakpoints.down('xl')]: {
    width: 'calc(100% - 20px)',
    margin: '20px 10px 10px',

    '.subscription-tiers-card-body': {
      '.subscription-tier-detail': {
        padding: 15,

        '.subscription-tier-detail-contents': {
          flexDirection: 'column',

          '.subscription-tier-detail-content': {
            width: '100%',
          },
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    margin: '30px 10px 10px',
    padding: 15,

    '.subscription-tiers-card-body': {
      gridTemplateColumns: '1fr',
    },
  },
}));
