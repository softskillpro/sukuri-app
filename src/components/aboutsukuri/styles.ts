import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const AboutSukuriContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  marginBottom: 40,

  '.community-header': {
    width: '70%',
    marginBottom: 50,
  },

  [theme.breakpoints.down('md')]: {
    '.community-header': {
      width: '85%',
    },
  },

  [theme.breakpoints.down(500)]: {
    '.community-header': {
      width: '95%',
    },
  },
}))
