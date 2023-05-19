import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const ProjectIntroContainer = styled(Grid)(({ theme }) => ({
  borderRadius: 5,

  '.project-img': {
    width: '100%',
    height: '100%',
    borderRadius: '5px 0px 0px 5px',
  },

  '.content-wrapper': {
    padding: 24,
    background: theme.palette.primary.main,
    borderRadius: '0px 5px 5px 0px',

    a: {
      textDecoration: 'none',
    },
  },
}));
