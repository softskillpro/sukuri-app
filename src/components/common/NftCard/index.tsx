import Image from 'next/image'
import Typography from '@mui/material/Typography'
import FlexBox from '@/components/common/FlexBox'
import StyledDivider from '@/components/common/StyledDivider'
import type { NFTType } from '@/interface/Nft.interface'
import { NftCardContainer } from './styles'

interface NftCardProps {
  nft?: NFTType
}

const NftCard = ({ nft }: NftCardProps) => {
  return (
    <NftCardContainer>
      <Image
        src={nft?.large_image || 'https://picsum.photos/seed/picsum/200/300'}
        width={200}
        height={160}
        alt='NFT'
      />

      <Typography
        variant='body2'
        fontWeight={700}
        color='primary.main'
        mt={1.5}
        mb={2}
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

        <StyledDivider />

        <Typography
          variant='caption'
          fontWeight={600}
          color='primary.main'
          textAlign='center'
          sx={{ width: 110 }}
        >
          0.5Ξ - 1Ξ per year
        </Typography>
      </FlexBox>
    </NftCardContainer>
  )
}

export default NftCard
