import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CategoryTileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  position: 'relative',

  width: '100%',
  height: '128px',
  overflow: 'hidden',

  cursor: 'pointer',

  gap: 0,

  borderRadius: 15,
  border: `2px solid ${theme.palette.border.main}`,

  [theme.breakpoints.down('md')]: {
    height: 80,
  },

  '.category-tile-bg': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    zIndex: -5,
    objectFit: 'cover',
  },

  '.category-content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    
    background:
      'linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0.20) 100%)',
    backgroundSize: '100%',
    backgroundPosition: 'right',

    transition: 'background 0.25s',

    '&:hover': {
      backgroundSize: '300%'
    },
  }
}));
