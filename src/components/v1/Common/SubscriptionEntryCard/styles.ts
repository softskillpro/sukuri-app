import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const SubscriptionEntryCardContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  gap: 8,
  padding: 5,
  borderRadius: 10,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  background: theme.palette.secondary.dark,
  backgroundBlendMode: 'overlay',

  '.subscription-entry-header': {
    position: 'relative',
    flexDirection: 'column',
    width: '100%',

    '.subscription-entry-img': {
      width: '100%',
      objectFit: 'cover',
      borderRadius: 10,
    },

    '.subscription-entry-info': {
      position: 'absolute',
      top: 10,
      right: 10,
      flexDirection: 'column',
      alignItems: 'flex-end',
    },

    '.subscription-card-wrapper': {
      position: 'absolute',
      bottom: 10,
      left: 10,
      justifyContent: 'flex-start',
    },
  },

  '.subscription-entry-body': {
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 8px',
  },

  [theme.breakpoints.down('sm')]: {
    '.subscription-entry-header': {
      '.subscription-entry-img': {
        maxHeight: 130,
      },

      '.subscription-card-wrapper': {
        position: 'absolute',
        top: 10,
        bottom: 'auto',
        left: 10,
      },
    },
  },
}));
