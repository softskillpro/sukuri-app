import { styled } from '@mui/material/styles';

export const ProductContentCardGroupContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 15,
  padding: 15,
  backgroundBlendMode: 'overlay',
  borderRadius: 15,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  
  boxShadow: theme.palette.shadow.main,
  backdropFilter: 'brightness(150%)',

  '.product-content-body': {
    flexDirection: 'column',
    gap: 15,

    a: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      lineHeight: 1,

      svg: {
        marginRight: 10,
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));
