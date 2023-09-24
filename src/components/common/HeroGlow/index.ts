import { styled } from '@mui/material/styles';

export const HeroGlow = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: 7,
  opacity: 0.1,
  background: theme.palette.topProductsGradient.light,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(5px)',
}));
