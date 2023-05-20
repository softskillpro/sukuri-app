import Typography from '@mui/material/Typography';
import { HorizontalDivider } from '@/components/common/StyledDivider';
import { Layout2 } from '@/components/common/PageLayout';
import type { NFTType } from '@/interface/Nft.interface';

interface ProjectAboutProps {
  nft?: NFTType;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectAbout = ({ nft }: ProjectAboutProps) => {
  return (
    <Layout2>
      <HorizontalDivider />

      <Typography variant='h6' color='text.secondary' mt={6.25} mb={3}>
        About
      </Typography>

      <Typography variant='caption' textAlign='left' component='div' mb={6.25}>
        Pepe Gladiators is a thrilling game-fi alpha group that takes you on a
        wild adventure through ancient Rome. In this game, you play as a
        gladiator who must fight for survival in the brutal arenas of the Roman
        Empire.
        <br />
        <br />
        As a member of the Pepe Gladiators group, you will be part of a team of
        skilled warriors who are dedicated to achieving victory in the arena.
        You&apos;ll have to hone your combat skills, strategize with your
        teammates, and use your wits to outsmart your opponents.
        <br />
        <br />
        With stunning graphics and immersive gameplay, Pepe Gladiators
        transports you to a world of danger, excitement, and glory. Whether
        you&apos;re battling ferocious beasts or dueling with other gladiators,
        every fight is a test of your strength, agility, and skill.
      </Typography>
    </Layout2>
  );
};

export default ProjectAbout;
