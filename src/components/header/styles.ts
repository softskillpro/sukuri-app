import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const HeaderContainer = styled(FlexBox)(({ theme }) => ({
  justifyContent: 'space-between',
  height: 58,
  margin: '40px 20px 0',
  padding: '0 24px 0 60px',
  background: theme.palette.primary.main,
  borderRadius: 5,

  a: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },

  '.avatar': {
    borderRadius: '50%',
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '.MuiPaper-root': {
    width: 260,
    padding: '40px 20px',
    background: theme.palette.primary.main,

    a: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
    },

    '.header-body': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 30,

      a: {
        marginBottom: 20,
      },

      '.avatar': {
        borderRadius: '50%',
      },
    },
  },
}));
