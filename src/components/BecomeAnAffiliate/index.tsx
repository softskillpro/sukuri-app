import { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { ArrowRightIcon } from '@/components/Icons';
import InputWrapper from '@/components/Common/InputWrapper';
import { TertiaryButton } from '@/components/Common/StyledButton';
import { BecomeAnAffiliateContainer } from './styles';

const inter = Inter({
  subsets: ['latin'],
  variable: '--Inter',
});

const BecomeAnAffiliate = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [params, setParams] = useState({
    name: '',
    email: '',
    twitter: '',
    reason: '',
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      setParams({
        ...params,
        [e.target.name]: e.target.value,
      });
    },
    [params],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <BecomeAnAffiliateContainer>
      <HeroGlow />

      <section className='section-left'>
        <Typography
          component='div'
          variant={matches ? 'h4' : 'h3Mobile'}
          className='affiliate-title'
        >
          Apply to become an affiliate
        </Typography>

        <form className={`${inter.className}`} onSubmit={handleSubmit}>
          <InputWrapper
            title='Name'
            format='input'
            type='text'
            value={params.name}
            name='name'
            placeholder='Enter your name'
            handleChange={handleChange}
          />

          <InputWrapper
            title='Email (optional)'
            format='input'
            type='email'
            value={params.email}
            name='email'
            placeholder='Enter your email address'
            handleChange={handleChange}
          />

          <InputWrapper
            title='Twitter/X handle'
            format='input'
            type='text'
            value={params.twitter}
            name='twitter'
            placeholder='Enter your twitter handle'
            handleChange={handleChange}
          />

          <InputWrapper
            title='Why do you want to join Sukuri?'
            format='textarea'
            type='text'
            value={params.reason}
            name='reason'
            placeholder='In a few words, tell us why you think you’re a good fit for the Sukuri affiliate program?'
            handleChange={handleChange}
          />

          <TertiaryButton sx={{ width: 'fit-content', mt: 2 }} type='submit'>
            Apply now
            <ArrowRightIcon sx={{ fontSize: 20, marginLeft: '5px' }} />
          </TertiaryButton>
        </form>
      </section>

      {matches && (
        <section className='affiliate-img'>
          <Image
            src='/images/affiliate.png'
            width={600}
            height={500}
            priority
            quality={100}
            alt='Affiliate'
          />
        </section>
      )}
    </BecomeAnAffiliateContainer>
  );
};

export default BecomeAnAffiliate;
