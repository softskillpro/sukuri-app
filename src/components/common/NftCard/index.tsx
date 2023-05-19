import Image from 'next/image'
import Typography from '@mui/material/Typography'
import FlexBox from '@/components/common/FlexBox'
import { VerticalDivider } from '@/components/common/StyledDivider'
import type { NFTType } from '@/interface/Nft.interface'
import { NftCardContainer } from './styles'

interface NftCardProps {
  nft?: NFTType
  className?: string
}

const NftCard = ({ nft, className }: NftCardProps) => {
  return (
    <NftCardContainer className={className || 'nft-card-container'}>
      <Image
        src={nft?.large_image || 'https://picsum.photos/seed/picsum/200/300'}
        width={320}
        height={160}
        alt='NFT'
      />

      <Typography
        variant='body2'
        fontWeight={700}
        color='primary.main'
        textAlign='center'
        sx={{
          maxWidth: 260,
          margin: '12px 0 16px',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {nft?.name}
      </Typography>

      <FlexBox mb={2}>
        <Typography
          variant='caption'
          fontWeight={600}
          color='primary.main'
          textAlign='center'
          sx={{ width: 110 }}
        >
          {nft?.member_count ? nft?.member_count.toLocaleString('en-US') : 0}{' '}
          Members
        </Typography>

        <VerticalDivider />

        <Typography
          variant='caption'
          fontWeight={600}
          color='primary.main'
          textAlign='center'
          sx={{ width: 110 }}
        >
          {nft?.tiers[0]?.subscription_length} <br />
          {nft?.tiers[0]?.subscription_length_unit}
        </Typography>
      </FlexBox>
    </NftCardContainer>
  )
}

export default NftCard
