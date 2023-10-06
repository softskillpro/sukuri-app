import Image from 'next/image';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { ExplorerCardContainer } from './styles';
import { Explorer } from '@/types';

interface ExplorerCardProps {
  item: Explorer;
  className?: string;
}

const ExplorerCard = ({ item, className }: ExplorerCardProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ExplorerCardContainer className={className || 'explorer-card'}>
      <Image
        src={item.asset}
        width={300}
        height={400}
        alt='Explorer Img'
        className='explorer-img'
      />

      <Typography
        variant={matches ? 'h5' : 'body4'}
        fontWeight={700}
        component='div'
        className='explorer-title'
      >
        {item.title}
      </Typography>
    </ExplorerCardContainer>
  );
};

export default ExplorerCard;
