import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FlexBox from '@/components/common/FlexBox';
import { Layout2 } from '@/components/common/PageLayout';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { GalleryContainer } from './styles';

const galleries = [300, 440, 175, 340, 430, 240, 380, 600, 500];

const Gallery = () => {
  return (
    <GalleryContainer>
      <Layout2>
        <HorizontalDivider />

        <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
          Gallery
        </Typography>
      </Layout2>

      <FlexBox>
        {galleries.map((gallery) => (
          <Box
            key={`gallery-${gallery}`}
            sx={{ width: gallery }}
            className='gallery'
          />
        ))}
      </FlexBox>
    </GalleryContainer>
  );
};

export default Gallery;
