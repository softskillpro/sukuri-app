import { styled } from '@mui/material/styles'

export const StateButton = styled('button')(({ theme }) => ({
  width: 210,
  height: 50,
  background: theme.palette.btnGradient.main,
  boxShadow: theme.palette.shadow.main,
  borderRadius: 5,
  border: 'none',
  cursor: 'pointer',
}))

export const ContainedButton = styled('button')(({ theme }) => ({
  width: 186,
  height: 54,
  background: theme.palette.text.secondary,
  boxShadow: theme.palette.shadow.contrastText,
  color: theme.palette.white.main,
  borderRadius: 5,
  fontWeight: 600,
  fontSize: 16,
  lineHeight: '20px',
  border: 'none',
  cursor: 'pointer',
}))
