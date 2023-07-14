import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LightGlassWrapper = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: 'inherit',
  minHeight: '100vh',
  backdropFilter: 'blur(10px) brightness(120%)',
  boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.35)',
}));

export const DarkGlassWrapper = styled(LightGlassWrapper)(() => ({
  backgroundColor: 'rgba(0,0,0,0.4)',
  backdropFilter: 'blur(10px)',
}));
