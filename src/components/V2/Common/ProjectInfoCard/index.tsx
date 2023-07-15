import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Typography from '@mui/material/Typography';

import { ProjectInfoCardContainer } from './styles';
import FlexBox from '@/components/v2/Common/FlexBox';
import { StyledDivider } from '@/components/v2/Common/StyledDivider';
import { StyledButton } from '@/components/v2/Common/StyledButton';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const socials = [
  {
    name: 'discord',
    link: '',
  },
  {
    name: 'github',
    link: '',
  },
  {
    name: 'twitter',
    link: '',
  },
  {
    name: 'instagram',
    link: '',
  },
  {
    name: 'medium',
    link: '',
  },
  {
    name: 'website',
    link: '',
  },
];

const prices = [
  {
    value: '0.015Ξ',
    type: 'SELL NOW',
  },
  {
    value: '0.0175Ξ',
    type: 'floor price',
  },
  {
    value: '0.025Ξ',
    type: 'last traded',
  },
];

const ProjectInfoCard = () => {
  return (
    <ProjectInfoCardContainer>
      <Image
        src='/images/v2/project_info.png'
        width={500}
        height={500}
        alt='Project Info'
        className='project-info-bg'
      />

      <FlexBox className='social-group'>
        {socials.map((social) => (
          <Link key={social.name} href={social.link}>
            <Image
              src={`/images/v2/${social.name}.png`}
              width={19}
              height={19}
              alt='Social'
            />
          </Link>
        ))}
      </FlexBox>

      <FlexBox className='project-info-card-body'>
        <Typography
          variant='caption'
          fontStyle='italic'
          mb={1.25}
          sx={{ fontFamily: inter.style.fontFamily }}
        >
          Consequat incididunt do et commodo sunt mollit aliqua commodo
          incididunt esse fugiat esse. Reprehenderit consequat ullamco ipsum
          officia et cillum qui Lorem ullamco ex cillum laboris pariatur
          consequat.
        </Typography>

        <FlexBox className='price-card-group'>
          <FlexBox className='price-card-wrapper'>
            <FlexBox className='price-card'>
              <Typography
                variant='labelLg'
                textAlign='center'
                textTransform='uppercase'
                className='price-card-value'
              >
                {prices[0]?.value}
              </Typography>

              <Typography
                variant='labelSm'
                textAlign='center'
                textTransform='uppercase'
                className='price-card-type'
              >
                {prices[0]?.type}
              </Typography>
            </FlexBox>

            <StyledDivider
              orientation='vertical'
              flexItem
              sx={{ width: 'auto', mx: 1.5 }}
            />

            <FlexBox className='price-card'>
              <Typography
                variant='labelLg'
                textAlign='center'
                className='price-card-value'
              >
                {prices[1]?.value}
              </Typography>

              <Typography
                variant='labelSm'
                textAlign='center'
                textTransform='uppercase'
                className='price-card-type'
              >
                {prices[1]?.type}
              </Typography>
            </FlexBox>

            <StyledDivider
              orientation='vertical'
              flexItem
              sx={{ width: 'auto', mx: 1.5 }}
            />

            <FlexBox className='price-card'>
              <Typography
                variant='labelLg'
                textAlign='center'
                className='price-card-value'
              >
                {prices[2]?.value}
              </Typography>

              <Typography
                variant='labelSm'
                textAlign='center'
                textTransform='uppercase'
                className='price-card-type'
              >
                {prices[2]?.type}
              </Typography>
            </FlexBox>
          </FlexBox>

          <StyledButton sx={{ width: '100%' }}>
            {'View on marketplace ->'}
          </StyledButton>
        </FlexBox>
      </FlexBox>
    </ProjectInfoCardContainer>
  );
};

export default ProjectInfoCard;
