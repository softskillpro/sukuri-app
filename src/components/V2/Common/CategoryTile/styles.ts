import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CategoryTileContainer = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'column',

  position:'relative',

  width: '100%',
  height: '128px',
  overflow:'hidden',
  flexShrink: 0,

  cursor: 'pointer',

  gap: 0,

  borderRadius: 15,
  border: `2px solid ${theme.palette.border.main}`,

  // transition: 'filter 0.25s',

  "&:hover":{
    filter:'brightness(90%)'
  },

  [theme.breakpoints.down('md')]: {
    height: 80
  },

  ".category-tile-bg":{
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    zIndex: -5,
    objectFit: 'cover',
  },
}))