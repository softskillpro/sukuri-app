import Image from 'next/image';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/v2/Common/FlexBox';
import TokenCardGroup from '@/components/v2/Common/TokenCardGroup';
import SocialGroup from '@/components/v2/Common/SocialGroup';
import MembershipCardGroup from '@/components/v2/Common/MembershipCardGroup';

import inter from '@/components/v2/Common/InterFont';
import { ProductHeroCardContainer } from './styles';

const ProductHeroCard = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <ProductHeroCardContainer>
      <Image
        src='/images/v2/project_info.png'
        width={500}
        height={500}
        alt='Product Hero'
        className='product-hero-img'
      />

      <div className='product-hero-card-wrapper'>
        {matches && <TokenCardGroup />}

        <FlexBox className='product-hero-content-wrapper'>
          <Typography
            variant='productTitle'
            maxWidth='600px'
            lineHeight={1.2}
            mb={1.5}
            textAlign='right'
            sx={{ fontFamily: inter.style.fontFamily }}
          >
            sukuri paid alpha group 100x guarantee
          </Typography>
          <Typography
            variant='paragraph'
            maxWidth='600px'
            textAlign='right'
            sx={{ fontFamily: inter.style.fontFamily }}
          >
            An optional blurb, ideally not too long can just add some flavour
            for the project.
          </Typography>
        </FlexBox>

        <FlexBox sx={{ justifyContent: 'space-between' }}>
          <SocialGroup variant={matches ? 'md' : 'sm'} />
          {!matches && <TokenCardGroup variant='Horizontal' />}
        </FlexBox>
      </div>

      <div className='membership-card-group-wrapper'>
        <MembershipCardGroup />
      </div>
    </ProductHeroCardContainer>
  );
};

export default ProductHeroCard;
