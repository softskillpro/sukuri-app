import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LayoutContainer = styled(Box)(() => ({
  position: 'relative',
  overflowX: 'hidden',
  width: '100%',
  height: 'inherit',
  backgroundColor: '#1D1C4F',
  backgroundBlendMode: 'lighten',
  pointerEvents: 'none',

  '.background-img': {
    position: 'fixed',
    top: 0,
    minWidth: '100%',
    width: 'inherit',
    height: '100%',
    mixBlendMode: 'lighten',
    pointerEvents: 'none',
  },
}));
