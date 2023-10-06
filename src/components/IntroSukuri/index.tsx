import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { StyledButton } from '@/components/Common/StyledButton';
import { IntroSukuriContainer } from './styles';

const IntroSukuri = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <IntroSukuriContainer>
      <section className='intro-content-wrapper'>
        <Typography
          variant={matches ? 'h2' : 'h2Mobile'}
          className='intro-title'
        >
          Why Sukuri?
        </Typography>

        <Typography
          variant={matches ? 'body1' : 'body1Mobile'}
          className='intro-content'
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices.
        </Typography>

        <StyledButton className='sell-btn'>Start Selling</StyledButton>
      </section>

      <section>
        <Image
          src='/images/subscribe.png'
          width={400}
          height={400}
          priority
          alt='Subscribe'
          className='subscribe-img'
        />
      </section>
    </IntroSukuriContainer>
  );
};

export default IntroSukuri;
