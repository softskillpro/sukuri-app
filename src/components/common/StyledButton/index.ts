import { styled } from '@mui/material/styles'

const StyledButton = styled('button')(({ theme }) => ({
  width: 210,
  height: 50,
  background: theme.palette.btnGradient.main,
  boxShadow: theme.palette.shadow.main,
  borderRadius: 5,
  border: 'none',
  cursor: 'pointer',
}))

export default StyledButton
