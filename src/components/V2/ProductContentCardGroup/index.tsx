import Image from 'next/image';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ProductContentCard from '@/components/v2/Common/ProductContentCard';
import FlexBox from '@/components/v2/Common/FlexBox';
import { inter } from '@/components/v2/Common/CustomFont';
import { ProductContentCardGroupContainer } from './styles';

const socials = [
  {
    title: 'twitter.com/vendor',
    link: 'https://twitter.com/vendor',
  },
  {
    title: 'vendor.com/about',
    link: 'https://vendor.com/about',
  },
];

const included = [
  {
    title: 'Custom Community Site',
    link: 'https://twitter.com/vendor',
    icon: 'website.png',
  },
  {
    title: 'Gated Discord',
    link: 'https://vendor.com/about',
    icon: 'discord.png',
  },
];

const ProductContentCardGroup = () => {
  return (
    <ProductContentCardGroupContainer className='product-content-card-group'>
      <ProductContentCard title='About'>
        <Typography
          variant='paragraph'
          lineHeight={1}
          component='div'
          sx={{ fontFamily: inter.style.fontFamily }}
        >
          Cupidatat amet qui excepteur esse velit. Voluptate dolore amet
          exercitation aute pariatur culpa. Ullamco commodo consectetur commodo
          quis est qui sunt eu do irure non aliqua sit. Enim sit.
        </Typography>
      </ProductContentCard>

      <ProductContentCard title='Learn More'>
        <FlexBox className='product-content-body'>
          {socials.map((social) => (
            <Link key={social.title} href={social.link} target='_blank'>
              <Typography
                variant='paragraph'
                lineHeight={1}
                component='div'
                sx={{ fontFamily: inter.style.fontFamily }}
              >
                {social.title}
              </Typography>
            </Link>
          ))}
        </FlexBox>
      </ProductContentCard>
      <ProductContentCard title='What’s Included?'>
        <FlexBox
          className='product-content-body'
          sx={{ alignItems: 'flex-start' }}
        >
          {included.map((item) => (
            <Link key={item.title} href={item.link} target='_blank'>
              <FlexBox>
                <Image
                  src={`/images/v2/${item.icon}`}
                  width={32}
                  height={32}
                  alt='icon'
                />

                <Typography
                  variant='paragraph'
                  lineHeight={1}
                  component='div'
                  sx={{ fontFamily: inter.style.fontFamily }}
                >
                  {item.title}
                </Typography>
              </FlexBox>
            </Link>
          ))}
        </FlexBox>
      </ProductContentCard>
    </ProductContentCardGroupContainer>
  );
};

export default ProductContentCardGroup;
