import { styled } from '@mui/material/styles';

export const CategorySearchContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gap: 20,
  alignItems: 'center',
  margin: '15px 0',

  '.category-group-wrapper': {
    width: '100%',

    '.category-group': {
      justifyContent: 'space-between',
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: 27,
  },

  [theme.breakpoints.down(500)]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '.category-group-wrapper': {
      '.category-group': {
        gap: 27,
      },
    },
  },
}));
