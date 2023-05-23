// import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProjectIntroContainer } from './styles';

const ProjectIntro = () => {
  return (
    <ProjectIntroContainer container>
      <Grid item xs={12} sm={7}>
        {/* <Image
          src='/images/pick.png'
          width={320}
          height={237}
          className='project-img'
          alt='Project'
        /> */}
        <div className='project-img'>
          <Typography variant='custom1' color='white.main'>
            preview image
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={5} className='content-wrapper'>
        <Typography variant='body2' fontWeight={700} mb={1}>
          Project Title
        </Typography>
        <Typography
          variant='custom1'
          mb={2}
          component='div'
          color='text.secondary'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus
          nibh, varius vel aliquam in, egestas ullamcorper arcu. Praesent leo
          leo, iaculis eget.
        </Typography>
        <Link href='/'>
          <Typography variant='custom1' fontWeight={700} color='text.primary'>
            Visit
          </Typography>
        </Link>
      </Grid>
    </ProjectIntroContainer>
  );
};

export default ProjectIntro;
