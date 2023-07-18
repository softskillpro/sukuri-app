import Image from 'next/image'
import MembershipCardGroup from "@/components/V2/Common/MembershipCardGroup"

import { MarketplaceCarouselCardContainer, InfoWrapper } from "./styles"
import { Typography } from '@mui/material'
import { StyledButton } from '@/components/V2/Common/StyledButton'
import theme from '@/styles/theme'

type MarketplaceCarouselCardProps = {
  name: string,
  category: string,
  membershipPrice: string,
  largeImageURL: string,
}

export const MarketplaceCarouselCard = ({name, category, membershipPrice, largeImageURL}: MarketplaceCarouselCardProps) => {
  return(<MarketplaceCarouselCardContainer>
    <Image 
      src={largeImageURL}
      alt='Product'
      className='card-bg'
      fill={true}
    />
    <InfoWrapper>
      <Typography variant='productTitle' align='right' className='product-tile'>
        {name}
      </Typography> 
      <StyledButton style={{width:'max-content', background: theme.palette.secondary.main}}>
        {category}
      </StyledButton>
    </InfoWrapper>
    <MembershipCardGroup membershipPrice={membershipPrice}/>
  </MarketplaceCarouselCardContainer>)
}