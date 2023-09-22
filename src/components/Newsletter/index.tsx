import { ChangeEvent, FormEvent, useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { FlexBox } from '@/components/Common/FlexBox';
import { NewsletterContainer } from './styles';
import { socials } from '@/constants';
import type { Social } from '@/types';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--Inter',
});

const Newsletter = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [email, setEmail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <NewsletterContainer>
      <section className='newsletter'>
        <Typography
          variant={matches ? 'h3' : 'h2Mobile'}
          className='newsletter-title'
        >
          Sukuri Substack
        </Typography>

        <Typography
          variant={matches ? 'body1' : 'body1Mobile'}
          className='newsletter-content'
        >
          Subscribe to get the latest offers and updates
        </Typography>

        <form
          className={`${inter.className} subscribe-form`}
          onSubmit={handleSubmit}
        >
          <input
            required
            name='email'
            value={email}
            type='email'
            placeholder='Enter your email'
            className='input-subscribe'
            onChange={handleChange}
          />

          <button type='submit' className='subscribe-btn'>
            Subscribe
          </button>
        </form>
      </section>

      <section className='community'>
        <Typography
          variant={matches ? 'h3' : 'h2Mobile'}
          className='newsletter-title'
        >
          Join our community
        </Typography>

        <Typography
          variant={matches ? 'body1' : 'body1Mobile'}
          className='newsletter-content'
        >
          Follow our social channels
        </Typography>

        <FlexBox className='social-group'>
          {socials.map((social: Social, id: number) => {
            const SocialIcon = social.asset;

            return (
              <Link
                key={`social-${id}`}
                href={social.href}
                target='_blank'
                className='social-item'
              >
                <SocialIcon sx={{ fontSize: matches ? 26 : 18 }} />
              </Link>
            );
          })}
        </FlexBox>
      </section>
    </NewsletterContainer>
  );
};

export default Newsletter;
