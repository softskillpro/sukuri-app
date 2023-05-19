import Typography from '@mui/material/Typography'
import { HorizontalDivider } from '@/components/common/StyledDivider'
import MultiCarousel from '@/components/multicarousel'
import { RecommendedCommunitiesContainer } from './styles'
import mock from '@/utils/mock'

const RecommendedCommunities = () => {
  return (
    <RecommendedCommunitiesContainer>
      <div className='community-header'>
        <HorizontalDivider />
        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Recommended Communities
        </Typography>
      </div>

      <MultiCarousel nfts={mock} />
    </RecommendedCommunitiesContainer>
  )
}

export default RecommendedCommunities
