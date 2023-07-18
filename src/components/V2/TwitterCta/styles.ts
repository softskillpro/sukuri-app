import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const TwitterCTAContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 15,

  position: 'relative',

  padding: '30px 60px',

  maxWidth: 1000,
  borderRadius: 15,

  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.35)',
  backdropFilter: 'blur(15px) brightness(150%)',

  [theme.breakpoints.down('md')]: {
    padding: '30px 15px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '15px 10px',
    borderRadius: 10,
  },
}));

export const ContentWrapper = styled('div')(() => ({
  position: 'relative',
  // paddingTop: "30px 0px",
  // zIndex: 2,
}));
