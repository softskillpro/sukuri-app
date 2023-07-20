import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const CategorySectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 15,

  [theme.breakpoints.down('sm')]: {
    gap: 5,
  },

  '.category-tile-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 15,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },

  '.section-title': {
    marginLeft: 30,
    [theme.breakpoints.down('md')]: {
      marginLeft: 15,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '100%',
      marginLeft: 0,
    },
  },
}));
