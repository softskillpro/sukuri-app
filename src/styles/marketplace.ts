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
}))

export const CarouselContainer = styled(Box)(({ theme }) => ({
  width: 'inherit',
  '.slide': {
    width: 150,
    minWidth: 'auto',
  }
}))

export const TopProjectsSection = styled(Box)(({ theme }) => ({
  width: '100%',

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
}))

export const TopProjectsList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 15,

  [theme.breakpoints.down('lg')]: {
    gap: 10
  },
  
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
  },
}))

export const TopProjectEntry = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  padding: 5,

  backdropFilter: 'brightness(150%)',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },

  '.project-category': {
    background: theme.palette.secondary.main,
    width: 'max-content',
  },

  borderRadius: 10,
}))

export const TopProjectInfoWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: 160,
  width: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems:'end',

  padding: '15px 10px 40px 10px',

  [theme.breakpoints.down('md')]: {
    padding: '5px',
    width: '80%',
    alignItems: 'start',
  },

  [theme.breakpoints.down('sm')]: {
    height: 160,
    width: 'auto',
    padding: '5px 5px 15px 5px',
  },

  '.top-proj-bg': {
    position: 'relative',
    borderRadius: 10,
    top: 0,
    left: 0,
    objectFit: 'cover',
    zIndex: -1,
  },

  '& > *': {
    zIndex: 1,
  }
}))

export const MembershipCardWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: -30,
  padding: '5px 5px 5px',

  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    width: 310,
    right: 0,
    marginTop: 0,
  },

  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '100%',
    marginTop: -15,
    padding: '5px 5px 5px',
  }
}))

export const CategorySection = styled(Box)(({ theme }) => ({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: 15,

  [theme.breakpoints.down('sm')]: {
    gap: 5
  },

  '.category-tile-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 15,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
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
}))