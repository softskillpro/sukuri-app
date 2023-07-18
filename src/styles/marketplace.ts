import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const MarketplaceContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '10px 0px',

  gap: 10,

  '.slider > .slide:not(.selected)': {
    filter: 'blur(5px) brightness(50%)',
  },

  '.marketplace-search': {
    maxWidth: 500,
    width: "50%",
    display: 'flex',
    itemAlign: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: "15px 60px",
    background: "none",
    border:"1px solid rgba(255,255,255,0.2)",
    borderRadius: 15,
    backdropFilter: 'brightness(150%)',
    color: "white",
    '&:focus-visible' : {
      border: "1px solid rgba(255,255,255,1)",
      outline: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: "80%",
    }
  }
}));

export const MarketplaceIntro = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "60px 15px 30px 15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  alignSelf: "stretch",
  borderRadius: "15px",
  border: "1px solid var(--major-dark-panel-border, rgba(255, 255, 255, 0.15))",
  background: "var(--black-40, rgba(0, 0, 0, 0.40))",
}))

// inside of MarketplaceIntro
export const CategoryList = styled('div')(({ theme }) => ({
  display:'flex',
  justifyContent: 'space-between',
  padding: "0px 15px",
  alignItems: 'center',
  width: '80%',
  
  '& a:hover': {
    color: 'grey',
  }
}))

export const MarketplaceContent = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "30px 15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 90,
  alignSelf: "stretch",
  borderRadius: "15px",
  border: "1px solid var(--major-dark-panel-border, rgba(255, 255, 255, 0.15))",
  background: "var(--black-40, rgba(0, 0, 0, 0.40))",

  [theme.breakpoints.down('lg')]: {
    gap: 30
  },

  [theme.breakpoints.down('md')]: {
    padding: "15px 10px"
  },

  [theme.breakpoints.down('sm')]: {
    padding: "5px 5px"
  },
}))

// inside of MarketplaceContent

export const CarouselContainer = styled(Box)(({ theme }) => ({
  '.slide': {
    width: 150,
  },
  
  '.product-carousel-img-container': {
    margin: '0 7px',
    borderRadius: 10,

    '.product-carousel-img': {
      borderRadius: 10,
      border: `2px solid ${theme.palette.border.main}`,
    },
  },
}))