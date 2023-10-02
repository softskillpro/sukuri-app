import { styled } from '@mui/material/styles';

export const MintHeroContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',
  gap: 100,
  marginTop: 35,
  padding: '96px 80px',

  '.mint-section': {
    gap: 18,

    form: {
      position: 'relative',
      width: '100%',

      '.input-glow': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: theme.palette.topProductsGradient.light,
        borderRadius: 7,
        opacity: 0.2,
        zIndex: -3,
      },

      input: {
        width: '100%',
        padding: '13px 24px',
        outline: 'none',
        border: 'none',
        fontSize: 17,
        fontWeight: 400,
        lineHeight: '148%',
        letterSpacing: 0.17,
        fontFamily: 'var(--Inter)',
        background: 'transparent',
        color: 'white',
        borderRadius: 7,

        '::placeholder': {
          color: 'white',
          opacity: 0.2,
        },
      },
    },

    '.mint-btn-wrapper': {
      justifyContent: 'space-between',
      width: '100%',

      '.mint-btn-wrap': {
        position: 'relative',

        '.mint-btn': {
          background: theme.palette.topProductsGradient.light,
          backdropFilter: 'blur(5px)',
          width: 184,
          fontSize: 20,
        },

        svg: {
          position: 'absolute',
          bottom: -25,
          right: -25,
          zIndex: -3,
        },
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
    padding: '40px 40px 40px',

    '.mint-section': {
      '.mint-btn-wrapper': {
        '.mint-btn-wrap': {
          '.mint-btn': {
            width: 160,
            fontSize: 16,
          },

          svg: {
            bottom: -18,
            right: -18,
          },
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    gap: 32,
    padding: '40px 24px 40px',
  },
}));
