import Image from 'next/image';
import MembershipCardGroup from '@/components/v2/Common/MembershipCardGroup';

import { MarketplaceCarouselCardContainer, InfoWrapper } from './styles';
import { Typography } from '@mui/material';
import { StyledButton } from '@/components/v2/Common/StyledButton';

type MarketplaceCarouselCardProps = {
  name: string;
  category: string;
  membershipPrice: string;
  largeImageURL: string;
};

export const MarketplaceCarouselCard = ({
  name,
  category,
  membershipPrice,
  largeImageURL,
}: MarketplaceCarouselCardProps) => {
  return (
    <MarketplaceCarouselCardContainer>
        <Image
        // src={largeImageURL}
          src={
            'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1' ??
            largeImageURL
          }
          priority
          alt='Product'
          className='card-bg'
          fill={true}
        />
        <InfoWrapper>
          <Typography
            variant='productTitle'
            align='right'
            className='product-tile'
          >
            {name}
          </Typography>
          <StyledButton className='category-button'>{category}</StyledButton>
          <div className='membership-card-wrapper'>
            <MembershipCardGroup membershipPrice={membershipPrice}/>
          </div>
        </InfoWrapper>
    </MarketplaceCarouselCardContainer>
  );
};
