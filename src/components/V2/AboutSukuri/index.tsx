import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AboutContainer, Entry, Entries, InfoText } from './styles';
import { StyledHr } from '../Common/Splitter/styles';

const AboutSukuri = () => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <AboutContainer>
      <Typography variant='h3' className='oneliner'>
        Sukuri Protocol is the future of on-chain subscriptions.
      </Typography>
      <Entries>
        <Entry>
          <StyledHr className='leading-decoration' />
          <InfoText>
            <Typography variant='subHeading'>
              Revolutionizing Subscription Models
            </Typography>
            <Typography variant='paragraph'>
              With ERC4337, we aim to lower barriers for newcomers in
              decentralized finance and catalyze the widespread adoption of this
              future-proof digital standard.
            </Typography>
          </InfoText>
        </Entry>
        <Entry>
          <StyledHr className='leading-decoration' />
          <InfoText>
            <Typography variant='subHeading'>
              Strategic Partnerships & User Experiences
            </Typography>
            <Typography variant='paragraph'>
              Providing exclusive access to communities, valuable info, and
              premium services via NFTs, playing a key role in the expanding
              digital economy.
            </Typography>
          </InfoText>
        </Entry>
        <Entry>
          <StyledHr className='leading-decoration' />
          <InfoText>
            <Typography variant='subHeading'>
              ERC4337: Sukuri's Adoption Catalyst
            </Typography>
            <Typography variant='paragraph'>
              Sukuri ensures transparent, sustainable income for on-chain
              subscription NFTs, adhering to decentralized finance principles.
            </Typography>
          </InfoText>
        </Entry>
      </Entries>
    </AboutContainer>
  );
};

export default AboutSukuri;
