import { styled } from '@mui/material/styles';

export const TierCardContainer = styled('div')<{ active: string }>(
  ({ active = 'false', theme }) => ({
    position: 'relative',
    padding: '30px 34px',
    cursor: 'pointer',

    '.tier-card-glow': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: active === 'true' ? '2px solid #AAA' : 'none',
      opacity: 0.2,
      background:
        active === 'true' ? theme.palette.cardGradient.light : 'transparent',
      borderRadius: 7,
    },

    ul: {
      margin: '16px 0 0 0',
      paddingLeft: 20,

      li: {
        '::marker': {
          color: '#8E919B',
        },
      },
    },

    svg: {
      width: '100%',
    },

    '.subscribe-btn': {
      width: '100%',
    },
  }),
);
