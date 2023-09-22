import Image from 'next/image';
import { Typography } from '@mui/material';
import { StyledButton } from '@/components/Common/StyledButton';
import { IntroSukuriContainer } from './styles';

const IntroSukuri = () => {
  return (
    <IntroSukuriContainer>
      <section>
        <Typography variant='h2' className='intro-title'>
          Why Sukuri?
        </Typography>

        <Typography variant='body1' className='intro-content'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices.
        </Typography>

        <StyledButton>Start Selling</StyledButton>
      </section>

      <section>
        <Image
          src='/images/subscribe.png'
          width={400}
          height={400}
          alt='Subscribe'
          className='subscribe-img'
        />
      </section>
    </IntroSukuriContainer>
  );
};

export default IntroSukuri;
