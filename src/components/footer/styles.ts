import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const FooterContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  marginTop: 30,
  padding: '32px 200px 14px',
  background: theme.palette.primary.main,
  borderRadius: 5,

  a: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    textDecoration: 'none',
  },

  '.grid-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '32px 100px 14px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '32px 30px 14px',
  },
}))
