import { TrendingSectionContainer } from './styles';
import Typography from '@mui/material/Typography';
import { StyledHr } from '@/components/v2/Common/Splitter/styles';
import { NFTType } from '@/interface/Nft.interface';
import { MarketplaceCarouselCard } from '../Common/MarketplaceCarouselCard';

export type TrendingSectionProps = {
  trendingProject: NFTType[];
};
const TrendingSection = ({ trendingProject }: TrendingSectionProps) => {
  return (
    <TrendingSectionContainer>
      <Typography variant='h3' className='section-title'>
        Trending
      </Typography>
      <StyledHr />
      {trendingProject.map(
        (
          project,
          id, // MultiCarousel is broken with dynamically sized content as far as I can tell.
        ) => (
          <div key={`project-${id}`} className='product-carousel-img-container'>
            <MarketplaceCarouselCard
              key={id}
              name={project.name}
              category='gaming'
              membershipPrice={'$5'}
              largeImageURL={project.large_image}
            />
          </div>
        ),
      )}
    </TrendingSectionContainer>
  );
};

export default TrendingSection;
