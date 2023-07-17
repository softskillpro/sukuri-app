import EntryCardGroup from '@/components/v2/Common/EntryCardGroup';
import { StyledButton } from '@/components/v2/Common/StyledButton';
import type { Entry } from '@/interface/entry.interface';

const entries: Entry[] = [
  {
    imgUri: '/images/v2/marketplace.png',
    title: 'gaming',
    uri: '/gaming',
  },
  {
    imgUri: '/images/v2/trending.jpeg',
    title: 'utility',
    uri: '/utility',
  },
  {
    imgUri: '/images/v2/recommend.png',
    title: 'content',
    uri: '/content',
  },
];

const TopCategoriesCard = () => {
  return (
    <EntryCardGroup title='Top Categories' entries={entries}>
      <StyledButton className='view-all-btn'>view all</StyledButton>
    </EntryCardGroup>
  );
};

export default TopCategoriesCard;
