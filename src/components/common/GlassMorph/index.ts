import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/Common/FlexBox';

export const GlassMorph = styled(FlexBox)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: 7,
  background: theme.palette.topProductsGradient.light,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(5px)',
  zIndex: -3,
}));

export const SecondaryGlassMorph = styled(FlexBox)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: 5,
  opacity: 0.8,
  background: theme.palette.glassMorphGradient.main,
  boxShadow: theme.palette.boxShadow.main,
  backdropFilter: 'blur(4px)',
  zIndex: -3,
}));
