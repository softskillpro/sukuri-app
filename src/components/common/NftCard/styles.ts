import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const NftCardContainer = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  width: 320,
  background: theme.palette.bgGradient.light,
  borderRadius: 5,

  img: {
    borderRadius: ' 5px 5px 0px 0px',
    width: '100%',
  },

  [theme.breakpoints.down(450)]: {
    width: 'calc(100% - 40px)',
  },
}))
