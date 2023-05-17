import Image from 'next/image'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src='/images/logo.png' width={50} height={46} alt='Logo' />
        <Typography variant='body1' color='text.primary'>
          Sukuri Protocol
        </Typography>
      </Link>
    </HeaderContainer>
  )
}

export default Header
