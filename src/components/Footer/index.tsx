import Link from 'next/link';
import { Typography } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { FooterContainer } from './styles';
import { socials, links, resources } from '@/constants';
import type { Social, FooterLink } from '@/types';

interface FooterItemProps {
  title: string;
  navs: FooterLink[];
  className?: string;
}

const FooterItem = ({ title, navs, className }: FooterItemProps) => (
  <section className={className || 'footer-item'}>
    <Typography variant='h5' fontWeight={500} color='text.secondary' mb={0.5}>
      {title}
    </Typography>

    {navs.map((nav: FooterLink) => (
      <FlexBox
        key={nav.title}
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          cursor: 'pointer',
        }}
      >
        <Typography variant='body7' color='accent.light'>
          Coming soon
        </Typography>
        <Typography variant='body3Mobile' color='text.secondary'>
          {nav.title}
        </Typography>
      </FlexBox>
    ))}
  </section>
);

const Footer = () => {
  return (
    <footer style={{ width: '100%' }}>
      <FooterContainer>
        <section className='company-info'>
          <Typography variant='h5' color='text.secondary'>
            Sukuri Protocol
          </Typography>

          <Typography variant='body3Mobile' color='text.secondary'>
            Redefining subscriptions <br />
            on-chain
          </Typography>

          <FlexBox className='social-group'>
            {socials.map((social: Social, id: number) => {
              const SocialIcon = social.asset;

              return (
                <Link key={`social-${id}`} href={social.href} target='_blank'>
                  <SocialIcon sx={{ fontSize: 26 }} />
                </Link>
              );
            })}
          </FlexBox>
        </section>

        <FooterItem
          title='Links'
          navs={links}
          className='footer-link footer-item'
        />

        <FooterItem
          title='Resources'
          navs={resources}
          className='footer-resources footer-item'
        />

        {/* <FooterItem
          title='Company'
          navs={company}
          className='footer-company footer-item'
        /> */}
      </FooterContainer>
    </footer>
  );
};

export default Footer;
