import { styled } from '@mui/material/styles';
import FlexBox from '@/components/common/FlexBox';

export const ProjectContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  overflow: 'hidden',
  minHeight: 'calc(100vh - 370px)',
  margin: '30px 20px',
  paddingTop: 30,
  background: theme.palette.primary.main,
  boxShadow: theme.palette.shadow1.light,
  borderRadius: 5,

  '.project-image': {
    width: '70%',
    height: 'auto',
    marginBottom: 33,
    boxShadow: theme.palette.shadow.contrastText,
    borderRadius: 5,
  },

  [theme.breakpoints.down(1024)]: {
    '.project-image': {
      width: 'calc(100% - 40px)',
    },
  },
}));
