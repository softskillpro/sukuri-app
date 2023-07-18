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
export const TrendingSection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0px 30px',
}))

export const TopProjectsSection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0px 30px',
}))

export const CategorySection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0px 0px',

  display: 'flex',
  flexDirection: 'column',
  gap: 15,

  [theme.breakpoints.down('sm')]: {
    gap: 5
  },

  '.section-title': {
    marginLeft: 30,
    [theme.breakpoints.down('md')]: {
      marginLeft: 15
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '100%',
      marginLeft: 0
    }
  },

  '.category-tile-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 15,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  }
}))