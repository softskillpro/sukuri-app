import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const MarketplaceContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.primary.main,
  boxShadow: theme.palette.shadow1.light,
  borderRadius: 5,
  zIndex: 10,
  overflow: 'hidden',

  '.marketplace-flower': {
    position: 'absolute',
    top: -130,
    right: -75,
    zIndex: -10,
  },

  '.marketplace-grid-wrapper': {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 64,
  },
}))
