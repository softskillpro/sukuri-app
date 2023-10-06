import { styled } from '@mui/material/styles';

export const NewsletterContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  margin: '100px 0',
  borderRadius: 7,

  '.newsletter-glow': {
    background: theme.palette.topProductsGradient.light,
    border: '1px solid rgba(254, 254, 254, 0.50)',
    borderRadius: 7,
    opacity: 0.2,
  },

  '.newsletter-title': {
    marginBottom: 10,
  },

  '.newsletter-content': {
    marginBottom: 35,
  },

  '.newsletter': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '80px 50px',

    '.subscribe-form': {
      position: 'relative',
      width: '90%',

      '.input-subscribe': {
        width: '100%',
        padding: '20px 32px',
        borderRadius: 11,
        background: '#D9D9D9',
        outline: 'none',
        border: 'none',
        fontSize: 20,
        fontFamily: 'var(--Inter)',
      },

      '.subscribe-btn': {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        padding: '20px 32px',
        borderRadius: '0 11px 11px 0',
        fontSize: 20,
        fontFamily: 'var(--Inter)',
        cursor: 'pointer',
        border: 'none',
        background: theme.palette.cardGradient.main,
        color: theme.palette.white.main,
      },
    },
  },

  '.community': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '80px 50px',
    borderRadius: '0px 7px 7px 0px',

    '.community-glow': {
      opacity: 0.4,
      borderRadius: '0px 7px 7px 0px',
      background:
        'linear-gradient(212deg, #7C97FA 36.06%, rgba(153, 71, 214, 0.00) 90.15%)',
    },

    '.social-group': {
      gap: 12,

      '.social-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 48,
        borderRadius: 7,
        border: '1.5px solid #FFF',
        boxShadow: theme.palette.boxShadow.main,
        backdropFilter: 'blur(5px)',
      },
    },
  },

  [theme.breakpoints.down('lg')]: {
    '.newsletter': {
      padding: '60px 30px',

      '.subscribe-form': {
        width: '100%',

        '.input-subscribe': {
          padding: 20,
        },

        '.subscribe-btn': {
          padding: 20,
        },
      },
    },

    '.community': {
      padding: '60px 30px',
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',

    '.newsletter-content': {
      marginBottom: 15,
    },

    '.newsletter': {
      padding: '60px 36px',

      '.subscribe-form': {
        width: '100%',

        '.input-subscribe': {
          width: '100%',
          padding: '12px 20px',
          fontSize: 12,
        },

        '.subscribe-btn': {
          padding: '12px 20px 12px 14px',
          fontSize: 12,
        },
      },
    },

    '.community': {
      padding: '60px 36px',
      borderRadius: '0px 0 7px 7px',

      '.social-group': {
        gap: 8,

        '.social-item': {
          width: 34,
          height: 32,
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    margin: '20px 0 70px',
  },
}));
