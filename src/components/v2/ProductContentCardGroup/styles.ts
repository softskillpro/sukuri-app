import { styled } from '@mui/material/styles';

export const ProductContentCardGroupContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 15,
  padding: 15,
  borderRadius: 15,
  border: `1px solid ${theme.palette.lightInternalGlassBorder.main}`,
  backdropFilter:'blur(10px) brightness(150%)',

  boxShadow: theme.palette.shadow.main,

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
