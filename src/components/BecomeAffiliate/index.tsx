import Image from 'next/image';
import Link from 'next/link';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowRightIcon } from '@/components/Icons';
import { BecomeAffiliateContainer } from './styles';

const BecomeAffiliate = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <BecomeAffiliateContainer>
      <section className='affiliate-contents-wrapper'>
        <Typography
          variant={matches ? 'h2' : 'h2Mobile'}
          className='affiliate-title'
        >
          Become an Affiliate
        </Typography>

        <Typography
          variant={matches ? 'body1' : 'body1Mobile'}
          className='affiliate-content'
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices.
        </Typography>

        <Link href='/' className='affiliate-link'>
          <Typography variant={matches ? 'body1' : 'body1Mobile'} mr={0.75}>
            Learn more...
          </Typography>
          <ArrowRightIcon fillColor='#ABD2FF' sx={{ fontSize: 14 }} />
        </Link>
      </section>

      <section className='avatar-group'>
        {[0, 1, 2, 3, 4, 5, 6].map((id: number) => (
          <Image
            key={`avatar-${id}`}
            src={`/images/avatar${id + 1}.png`}
            width={98}
            height={92}
            alt='avatar'
            className='avatar'
          />
        ))}
      </section>
    </BecomeAffiliateContainer>
  );
};

export default BecomeAffiliate;
