import { Modal, styled } from '@mui/material';

export const SpinnerModalContainer = styled(Modal)(({ theme }) => ({
  zIndex: 10,

  '.MuiBackdrop-root': {
    opacity: '0.8 !important',
    background: theme.palette.primary.light,
  },

  '.modal-wrapper': {
    width: '100%',
    height: '100%',

    '.spinner-body': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      flexDirection: 'column',
      width: 'max-content',
      padding: '80px 150px',
      borderRadius: 7,
      background: theme.palette.topProductsGradient.main,
      boxShadow: theme.palette.boxShadow.main,
      backdropFilter: 'blur(10px)',

      '.close-btn': {
        position: 'absolute',
        top: 30,
        right: 30,
        cursor: 'pointer',
      },

      a: {
        textDecoration: 'none',
        color: '#fff',
      },

      '.spinner-animation': {
        margin: '50px 0',

        svg: {
          path: {
            fill: 'transparent',
            strokeWidth: 2,
            stroke: '#fff',
            strokeDasharray: 2935,
            strokeDashoffset: 2935,
            animation: 'animate-flower 3s ease-in-out infinite',
          },
        },

        ':hover': {
          svg: {
            path: {
              fill: '#fff',
              transition: '0.5s all ease-in-out',
              filter: 'drop-shadow(0px 0px 30px #fff)',
              strokeWidth: 10,
              stroke: '#fff',
              animation: 'animate-glow 3s ease-in-out infinite',
              transitionProperty: 'fill',
            },
          },
        },
      },

      '.mint-hero-bg': {
        width: 196,
        height: 'auto',
        margin: '50px 0 20px',
      },

      '.intro': {
        maxWidth: 430,
        padding: 15,
        borderRadius: 7,
        background: theme.palette.topProductsGradient.main,

        '.soon-bg': {
          width: '100%',
          height: 'auto',
          marginTop: 20,
        },
      },

      '.spinner-btn': {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 38px',
        borderRadius: 7,
        background: theme.palette.topProductsGradient.light,
        boxShadow: theme.palette.boxShadow.main,
        backdropFilter: 'blur(5px)',
        fontSize: 20,
        fontWeight: 700,
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--Inter)',

        ':hover': {
          border: '2px solid rgba(255, 255, 255, 0.50)',
          background: 'transparent',
        },
      },
    },
  },

  '@keyframes animate-glow': {
    '0%': {
      filter: 'drop-shadow(0px 0px 30px #fff)',
    },
    '35%': {
      filter: 'drop-shadow(0px 0px 35px #fff)',
    },
    '65%': {
      filter: 'drop-shadow(0px 0px 25px #fff)',
    },
    '100%': {
      filter: 'drop-shadow(0px 0px 30px #fff)',
    },
  },

  '@keyframes animate-flower': {
    '0%': {
      strokeDashoffset: 0,
    },
    '50%': {
      strokeDashoffset: 2935,
      filter: 'drop-shadow(0px 0px 35px #fff)',
      fill: '#fff',
    },
    '100%': {
      strokeDashoffset: 5870,
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.modal-wrapper': {
      '.spinner-body': {
        width: 'calc(100% - 40px)',
        padding: '80px 20px',

        '.button-list': {
          flexDirection: 'column',
        },
      },
    },
  },
}));
