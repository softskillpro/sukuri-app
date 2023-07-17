import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import FlexBox from '@/components/v2/Common/FlexBox';
import EntryCard from '@/components/v2/Common/EntryCard';
import { EntryCardGroupContainer } from './styles';
import type { Entry } from '@/interface/entry.interface';

interface EntryCardGroupProps {
  title: string;
  entries: Entry[];
  children?: React.ReactNode;
}

const EntryCardGroup = ({ title, entries, children }: EntryCardGroupProps) => {
  const matches = useMediaQuery('(min-width:1400px)');

  return (
    <EntryCardGroupContainer>
      <FlexBox className='entry-card-title'>
        <Typography variant='subHeading' component='div'>
          {title}
        </Typography>

        {!matches && children}
      </FlexBox>

      <FlexBox className='entry-card-body'>
        {entries.map((entry) => (
          <EntryCard
            key={entry.title}
            imgUri={entry.imgUri}
            title={entry.title}
            uri={entry.uri}
          />
        ))}
      </FlexBox>

      {matches && children}
    </EntryCardGroupContainer>
  );
};

export default EntryCardGroup;
