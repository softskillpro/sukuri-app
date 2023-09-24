import { styled } from '@mui/material/styles';

export const SubscriptionInfoCardContainer = styled('div')(() => ({
  position: 'relative',
  width: 156,
  padding: 25,
  gap: 7,

  '.info-title': {
    whiteSpace: 'pre-line',
    marginBottom: 7,
  },

  '.circle-icon': {
    position: 'absolute',
    top: -20,
    right: -20,
    zIndex: -10,
  },
}));
