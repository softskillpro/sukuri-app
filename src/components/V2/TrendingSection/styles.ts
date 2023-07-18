import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const TrendingSectionContainer = styled(Box)(({ theme }) => ({
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