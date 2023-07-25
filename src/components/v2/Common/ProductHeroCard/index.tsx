import Image from 'next/image';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/v2/Common/FlexBox';
import TokenCardGroup from '@/components/v2/Common/TokenCardGroup';
import SocialGroup from '@/components/v2/Common/SocialGroup';
import MembershipCardGroup from '@/components/v2/Common/MembershipCardGroup';

import { inter } from '@/components/v2/Common/CustomFont';
import { ProductHeroCardContainer } from './styles';

interface ProductHeroCardProps {
  name: string;
  description: string;
}

const ProductHeroCard = ({ name, description }: ProductHeroCardProps) => {
  const matches = useMediaQuery('(min-width:720px)');

  return (
    <ProductHeroCardContainer>
      <Image
        src='/images/v2/project_info.png'
        width={500}
        height={500}
        alt='Product Hero'
        priority
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
            {name}
          </Typography>
          <Typography
            variant='paragraph'
            maxWidth='600px'
            textAlign='right'
            sx={{ fontFamily: inter.style.fontFamily }}
          >
            {description}
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
