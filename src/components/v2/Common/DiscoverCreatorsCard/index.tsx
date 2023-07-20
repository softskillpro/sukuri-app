import EntryCardGroup from '@/components/v2/Common/EntryCardGroup';
import type { Entry } from '@/interface/entry.interface';

const entries: Entry[] = [
  {
    imgUri: '/images/v2/marketplace.png',
    title: 'marketplace',
    uri: '/marketplace',
  },
  {
    imgUri: '/images/v2/trending.jpeg',
    title: 'trending',
    uri: '/trending',
  },
  {
    imgUri: '/images/v2/recommend.png',
    title: 'recommended',
    uri: '/recommended',
  },
];

interface DiscoverCreatorsCardProps {
  className?: string;
}

const DiscoverCreatorsCard = ({
  className = 'discovery-creators-card',
}: DiscoverCreatorsCardProps) => {
  return (
    <EntryCardGroup
      title='Discover Creators'
      entries={entries}
      className={className}
    />
  );
};

export default DiscoverCreatorsCard;
