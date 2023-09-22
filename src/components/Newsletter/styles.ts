import { styled } from '@mui/material/styles';

export const NewsletterContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gap: 20,
  margin: '100px 0',
  borderRadius: 7,
  border: '1px solid rgba(254, 254, 254, 0.50)',
  background: theme.palette.glassMorphGradient.main,

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
    padding: '80px 60px',

    '.subscribe-form': {
      position: 'relative',

      '.input-subscribe': {
        width: 460,
        height: 50,
        padding: '15px 32px',
        borderRadius: 11,
        background: '#D9D9D9',
        outline: 'none',
        border: 'none',
        fontFamily: 'var(--Inter)',
      },

      '.subscribe-btn': {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        padding: '15px 26px',
        borderRadius: '0 11px 11px 0',
        fontSize: 15,
        fontFamily: 'var(--Inter)',
        cursor: 'pointer',
        border: 'none',
        background: theme.palette.cardGradient.main,
        color: theme.palette.white.main,
      },
    },
  },

  '.community': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '80px 60px',
    borderRadius: '0px 7px 7px 0px',
    background:
      'linear-gradient(212deg, #7C97FA 36.06%, rgba(153, 71, 214, 0.00) 90.15%)',

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

  [theme.breakpoints.down('md')]: {
    '.newsletter': {
      '.subscribe-form': {
        width: '100%',

        '.input-subscribe': {
          width: '100%',
        },
      },
    },
  },
}));
