import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const HomeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  margin: 20,

  '.home-logo': {
    position: 'absolute',
    left: -218,
    top: -220,
    height: 'auto',
    transform: 'rotate(45deg)',
  },

  '.signup-section': {
    padding: '218px 135px 135px',
  },

  '.project-intro-wrapper': {
    padding: '90px 135px',
  },

  [theme.breakpoints.down('lg')]: {
    '.signup-section': {
      padding: '218px 80px 135px',
    },

    '.project-intro-wrapper': {
      padding: '90px 80px',
    },
  },

  [theme.breakpoints.down('md')]: {
    '.signup-section': {
      padding: '218px 20px 135px',
    },

    '.project-intro-wrapper': {
      padding: '90px 20px',
    },
  },
}));
