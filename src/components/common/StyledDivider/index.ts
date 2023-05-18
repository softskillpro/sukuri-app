import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: 32,
  margin: '0 20px',
  border: `1px solid ${theme.palette.primary.main}`,
}))

export default StyledDivider
