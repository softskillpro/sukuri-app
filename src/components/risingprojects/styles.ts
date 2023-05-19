import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const RisingProjectsContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  marginBottom: 50,

  '.community-header': {
    width: '70%',
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
