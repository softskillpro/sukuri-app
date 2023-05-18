import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const TodaysPickContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',

  '.pick-header-wrapper': {
    width: '70%',
    marginBottom: 25,
  },

  '.pick-grid-wrapper': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,

    '.pick-image': {
      width: '100%',
      height: 'auto',
    },
  },

  [theme.breakpoints.down('md')]: {
    '.pick-header-wrapper': {
      width: '85%',
    },
  },

  [theme.breakpoints.down(500)]: {
    '.pick-header-wrapper': {
      width: '95%',
    },
  },
}))
