import { styled } from '@mui/material/styles';

export const AboutContainer = styled('div')(({ theme }) => ({
  padding: '60px 15px 30px 15px',

  maxWidth: 960,

  display: 'flex',
  flexDirection: 'row',
  gap: 15,
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },

  '.oneliner': {
    width: '35%',
    maxWidth: 440,
    textAlign: 'right',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '0px 15px',
    },
  },
}));

export const Entries = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 45,
}));

export const Entry = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 10,

  '.leading-decoration': {
    width: 100,
    [theme.breakpoints.down('lg')]: {
      width: 30,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export const InfoText = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  width: '100%',
}));
