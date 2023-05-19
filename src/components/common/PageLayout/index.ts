import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const PageLayout = styled(Box)(({ theme }) => ({
  padding: '0 90px',

  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
  },
}))

export default PageLayout
