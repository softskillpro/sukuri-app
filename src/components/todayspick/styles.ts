import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const TodaysPickContainer = styled(FlexBox)(() => ({
  flexDirection: 'column',

  '.pick-header-wrapper': {
    width: '70%',
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
}))
