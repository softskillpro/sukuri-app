import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const TopProjectsSectionContainer = styled(Box)(({ theme }) => ({
  width: '100%',

  '.section-title': {
    marginLeft: 30,
    [theme.breakpoints.down('md')]: {
      marginLeft: 15,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '100%',
      marginLeft: 0,
    },
  },
}));

export const TopProjectsList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 15,

  [theme.breakpoints.down('lg')]: {
    gap: 10,
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
  },
}));

export const TopProjectEntry = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  border: '1px solid rgba(0,0,0,0.2)',
  boxShadow: '0px 0px 4px rgba(0,0,0,0.35)',

  borderRadius: 10,

  padding: 5,

  backdropFilter: 'blur(10px) brightness(150%)',

  '.project-category': {
    background: theme.palette.secondary.teal,
    border: '1px solid rgba(255,255,255,.2)',
    width: 'max-content',
    borderRadius: 5,
  },
}));

export const TopProjectInfoWrapper = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  height: 160,
  width: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'end',

  padding: '15px 10px 40px 10px',

  [theme.breakpoints.down('md')]: {
    alignItems: 'end',
    padding: '10px 10px 30px 10px',
  },

  [theme.breakpoints.down('sm')]: {
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
  },
}));

export const MembershipCardWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: -30,
  padding: '5px 5px 5px',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: -25,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginTop: -15,
  },
}));
