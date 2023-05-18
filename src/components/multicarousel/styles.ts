import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const MultiCarouselContainer = styled(FlexBox)(({ theme }) => ({
  position: 'relative',
  width: '100%',

  '.arrow-left-btn': {
    position: 'absolute',
    left: -50,
  },

  '.arrow-right-btn': {
    position: 'absolute',
    right: -50,
  },

  '.nft-card-container': {
    marginRight: 20,
  },

  [theme.breakpoints.down('sm')]: {
    '.arrow-left-btn': {
      position: 'absolute',
      left: 0,
    },

    '.arrow-right-btn': {
      position: 'absolute',
      right: 0,
    },
  },
}))
