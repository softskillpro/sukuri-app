import Image from 'next/image';
import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { HeroGlow } from '@/components/Common/HeroGlow';
import { ArrowDownIcon2 } from '@/components/Icons';
import { PartnershipHeroContainer } from './styles';

const PartnershipHero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <PartnershipHeroContainer>
      <HeroGlow />

      <section className='build-sukuri'>
        <Typography
          variant={matches ? 'h2' : 'h2Mobile'}
          mb={2.5}
          component='div'
        >
          Let’s build Sukuri together
        </Typography>

        <Typography variant='body1'>
          Are you an influencer or content creator? Do you like to play video
          games? Do you currently have other subscription gated content? Or are
          you just interested in promoting new and exciting protocols? If you
          answered “yes” to any of those questions, then the Sukuri Affiliate
          Program may be right for you!
        </Typography>

        <IconButton>
          <ArrowDownIcon2 sx={{ fontSize: 16 }} />
        </IconButton>
      </section>

      <section className='sukuri-img'>
        <Image
          src='/images/sukuri.png'
          width={600}
          height={500}
          priority
          quality={100}
          alt='Affiliate'
        />
      </section>
    </PartnershipHeroContainer>
  );
};

export default PartnershipHero;
