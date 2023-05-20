import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const ProjectIntroContainer = styled(Grid)(({ theme }) => ({
  borderRadius: 5,

  '.project-img': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '5px 0px 0px 5px',
    background: theme.palette.text.primary,
  },

  '.content-wrapper': {
    padding: 24,
    background: theme.palette.primary.main,
    borderRadius: '0px 5px 5px 0px',

    a: {
      textDecoration: 'none',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '.project-img': {
      height: '150px',
      borderRadius: '5px 5px 0px 0',
    },

    '.content-wrapper': {
      borderRadius: '0px 0 5px 5px',
    },
  },
}));
