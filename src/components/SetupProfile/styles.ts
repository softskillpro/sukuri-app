import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const SetupProfileContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: 'calc(100% - 40px)',
  margin: '32px 20px',
  padding: '0 60px',
  background: theme.palette.primary.main,
  boxShadow: theme.palette.shadow1.contrastText,
  borderRadius: 5,
  zIndex: 5,

  '.profile-wrapper': {
    width: '100%',
    alignItems: 'flex-start',

    '.setup-profile': {
      width: 'calc((100% - 51px) / 2)',

      '.sukuri-pass-preview': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 230,
        marginTop: 27,
        background: theme.palette.secondary.main,
      },
    },

    '.profile-divider': {
      height: '460px',
      margin: '0 25px',
      border: `0.5px solid ${theme.palette.text1.main}`,
    },
  },

  [theme.breakpoints.down('lg')]: {
    padding: '0 35px',

    '.profile-wrapper': {
      flexDirection: 'column',

      '.setup-profile': {
        width: '100%',
      },

      '.profile-divider': {
        width: '100%',
        height: 'inherit',
        margin: '25px 0',
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
  },
}));
