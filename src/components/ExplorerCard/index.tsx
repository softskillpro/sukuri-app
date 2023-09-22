import Image from 'next/image';
import { ExplorerCardContainer } from './styles';
import { Explorer } from '@/types';

interface ExplorerCardProps {
  item: Explorer;
  className?: string;
}

const ExplorerCard = ({ item, className }: ExplorerCardProps) => {
  return (
    <ExplorerCardContainer className={className || 'explorer-card'}>
      <Image
        src={item.asset}
        width={300}
        height={400}
        alt='Explorer Img'
        className='explorer-img'
      />
    </ExplorerCardContainer>
  );
};

export default ExplorerCard;
