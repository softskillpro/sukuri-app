import { styled } from '@mui/material/styles';
import FlexBox from '@/components/V2/Common/FlexBox';

export const FooterContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  maxHeight: '100%',
  padding: '30px',
  borderRadius: 15,
  border: `1px solid ${theme.palette.border.dark}`,
  background: theme.palette.secondary.main,
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(15px)',

  '.grid-wrapper': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: '60%',

    a: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      textDecoration: 'none',
    },
  },

  '.sukuri-protocal': {
    marginTop: 15,
  },

  [theme.breakpoints.down('lg')]: {
    '.grid-wrapper': {
      width: '75%',
    },

    '.sukuri-protocal': {
      marginTop: 20,
    },
  },

  [theme.breakpoints.down('sm')]: {
    padding: '30px 30px 15px 30px',

    '.grid-wrapper': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      width: '100%',

      '.grid-item-2': {
        margin: '20px 0',
      },
    },

    '.sukuri-protocal': {
      marginTop: 35,
    },
  },
}));
