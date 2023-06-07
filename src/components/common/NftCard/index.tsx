import Image from 'next/image';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/common/FlexBox';
import { VerticalDivider } from '@/components/common/StyledDivider';
import type { NFTType } from '@/interface/Nft.interface';
import { NftCardContainer } from './styles';

interface NftCardProps {
  project: NFTType;
  className?: string;
}

const NftCard = ({ project, className }: NftCardProps) => {
  return (
    <NftCardContainer
      href={`/project/${project.id}`}
      className={className || 'nft-card-container'}
    >
      <Image
        src={
          project.large_image.includes('https://example.com')
            ? 'https://i.seadn.io/gcs/files/d34ed1514aa22989df91aec0feda0aba.gif?auto=format&dpr=1&h=500&fr=1'
            : project.large_image
        }
        width={320}
        height={160}
        priority
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
        {project.name}
      </Typography>

      <FlexBox mb={2}>
        <Typography
          variant='caption'
          fontWeight={600}
          color='primary.main'
          textAlign='center'
          sx={{ width: 110 }}
        >
          {project.member_count
            ? project.member_count.toLocaleString('en-US')
            : 0}{' '}
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
          {project.tiers[0]?.subscription_length} <br />
          {project.tiers[0]?.subscription_length_unit}
        </Typography>
      </FlexBox>
    </NftCardContainer>
  );
};

export default NftCard;
