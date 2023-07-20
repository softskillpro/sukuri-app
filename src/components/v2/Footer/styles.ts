import { styled } from '@mui/material/styles';
import FlexBox from '@/components/v2/Common/FlexBox';

export const FooterContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  maxHeight: '100%',
  padding: '30px',
  borderRadius: 15,
  border: `1px solid ${theme.palette.border.dark}`,
  background: theme.palette.primary.dark,
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'blur(15px)',

  '.grid-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 60,

    a: {
      display: 'flex',
      alignItems: 'start',
      width: 'fit-content',
      marginTop: 5,
      textDecoration: 'none',
    },
  },

  '.grid-item, .grid-item-2':{
    height: '75px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'flex-start',
  },

  '.sukuri-protocal': {
    marginTop: 15,
  },

  [theme.breakpoints.down('lg')]: {
    '.grid-wrapper': {
    },

    '.sukuri-protocal': {
      marginTop: 20,
    },
  },

  [theme.breakpoints.down('sm')]: {
    padding: '30px 30px 15px 30px',

    '.grid-wrapper': {
      flexDirection: 'column',
      width: '100%',
      alignItems: 'start',
    },



    '.sukuri-protocal': {
      marginTop: 35,
    },
  },
}));
