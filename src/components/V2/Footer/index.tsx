import Link from 'next/link';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/V2/Common/FlexBox';
import { inter } from '@/components/V2/Common/CustomFont';

import { FooterContainer } from './styles';

interface HrefProps {
  title: string;
  href: string;
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
];

const socials: HrefProps[] = [
  {
    title: 'Twitter',
    href: '/twitter',
  },
  {
    title: 'Discord',
    href: '/discord',
  },
];

const docs: HrefProps[] = [
  {
    title: 'Terms & Conditions',
    href: '/terms-conditions',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const FooterBody = ({ title, href }: HrefProps) => (
  <Link href={href}>
    <Typography
      variant='footer'
      color='text.primary'
      style={{ fontFamily: inter.style.fontFamily, lineHeight: 1 }}
    >
      {title}
    </Typography>
  </Link>
);

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <FlexBox className='grid-wrapper'>
          <div className='grid-item'>
            {navs.map((nav) => (
              <FooterBody key={nav.href} title={nav.title} href={nav.href} />
            ))}
          </div>

          <div className='grid-item-2'>
            {socials.map((nav) => (
              <FooterBody key={nav.href} title={nav.title} href={nav.href} />
            ))}
          </div>

          <div className='grid-item'>
            {docs.map((nav) => (
              <FooterBody key={nav.href} title={nav.title} href={nav.href} />
            ))}
          </div>
        </FlexBox>

        <Typography
          variant='wordmarkFooter'
          mt={2}
          textTransform='uppercase'
          className='sukuri-protocal'
        >
          Sukuri <span style={{ fontWeight: 400 }}>Protocol</span>
        </Typography>

        <Typography
          variant='code'
          style={{
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          2023 © Sukuri Protocol
        </Typography>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
