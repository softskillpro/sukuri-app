import theme from '@/styles/theme'
import { styled } from '@mui/material/styles'
import FlexBox from '@/components/common/FlexBox'

export const HeaderContainer = styled(FlexBox)(() => ({
  height: 58,
  background: theme.palette.primary.main,
  borderRadius: 5,

  a: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
}))
