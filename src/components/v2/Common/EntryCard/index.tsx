import Image from 'next/image';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { EntryCardContainer } from './styles';

interface EntryCardContainer {
  imgUri: string;
  title: string;
  uri: string;
}

const EntryCard = ({ imgUri, title, uri }: EntryCardContainer) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(uri);
  };

  return (
    <EntryCardContainer onClick={handleClick}>
      <Image
        src={imgUri}
        width={300}
        height={55}
        priority
        alt='Entry Card'
        className='entry-card-img'
      />
      <div className='entry-title-wrapper'>
        <Typography
          variant='labelLg'
          textTransform='uppercase'
          fontWeight={600}
          textAlign='right'
          zIndex={100}
        >
          {title}
        </Typography>
      </div>
    </EntryCardContainer>
  );
};

export default EntryCard;
