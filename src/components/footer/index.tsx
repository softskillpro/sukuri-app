import Image from 'next/image'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FlexBox from '@/components/common/FlexBox'
import { FooterContainer } from './styles'

interface HrefProps {
  title: string
  href: string
}

const navs: HrefProps[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Docs',
    href: '/docs',
  },
]

const socials: HrefProps[] = [
  {
    title: 'Twitter',
    href: '/twitter',
  },
  {
    title: 'Discord',
    href: '/discord',
  },
]

const docs: HrefProps[] = [
  {
    title: 'Terms & Conditions',
    href: '/terms-conditions',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
]

const FooterBody = ({ title, href }: HrefProps) => (
  <Link href={href}>
    <Typography variant='custom2' fontWeight={500} color='text.secondary'>
      {title}
    </Typography>
  </Link>
)

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container mb={2.5} className='grid-wrapper'>
        <Grid item xs={12} sm={4} className='grid-item'>
          {navs.map((nav) => (
            <FooterBody key={nav.href} title={nav.title} href={nav.href} />
          ))}
        </Grid>
        <Grid item xs={12} sm={4} className='grid-item'>
          {socials.map((nav) => (
            <FooterBody key={nav.href} title={nav.title} href={nav.href} />
          ))}
        </Grid>
        <Grid item xs={12} sm={4} className='grid-item'>
          {docs.map((nav) => (
            <FooterBody key={nav.href} title={nav.title} href={nav.href} />
          ))}
        </Grid>
      </Grid>

      <FlexBox mb={0.5}>
        <Image src='/images/logo.png' width={50} height={46} alt='Logo' />
        <Typography variant='body1' ml={2}>
          Sukuri Protocol
        </Typography>
      </FlexBox>

      <Typography
        variant='custom2'
        fontWeight={500}
        color='text.secondary'
        ml={2}
      >
        2023 © Sukuri Protocol
      </Typography>
    </FooterContainer>
  )
}

export default Footer
