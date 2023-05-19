import Typography from '@mui/material/Typography'
import { HorizontalDivider } from '@/components/common/StyledDivider'
import MultiCarousel from '@/components/multicarousel'
import { RisingProjectsContainer } from './styles'
import mock from '@/utils/mock'

const RisingProjects = () => {
  return (
    <RisingProjectsContainer>
      <div className='community-header'>
        <HorizontalDivider />
        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Rising Projects
        </Typography>
      </div>

      <MultiCarousel nfts={mock} />
    </RisingProjectsContainer>
  )
}

export default RisingProjects
