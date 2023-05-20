import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const FooterContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  flexDirection: 'column',
  maxHeight: '100%',
  margin: '0 20px 12px',
  padding: '32px 200px 14px',
  overflow: 'hidden',
  background: theme.palette.primary.main,
  borderRadius: 5,
  zIndex: 10,

  '.bg-img': {
    position: 'absolute',
    top: -115,
    right: -5,
    zIndex: -10,
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    textDecoration: 'none',
    marginBottom: 4,
  },

  '.grid-wrapper': {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '32px 100px 14px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '32px 30px 14px',

    '.bg-img': {
      top: -5,
      fontSize: 300,
    },
  },
}));
