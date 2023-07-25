import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ProductContentCard from '@/components/v2/Common/ProductContentCard';
import FlexBox from '@/components/v2/Common/FlexBox';
import { inter } from '@/components/v2/Common/CustomFont';
import WebsiteIcon from '@/components/v2/svgs/WebsiteIcon';
import DiscordIcon from '@/components/v2/svgs/DiscordIcon';
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
    icon: WebsiteIcon,
  },
  {
    title: 'Gated Discord',
    link: 'https://vendor.com/about',
    icon: DiscordIcon,
  },
];

interface ProductContentCardGroupProps {
  description: string;
}

const ProductContentCardGroup = ({
  description,
}: ProductContentCardGroupProps) => {
  return (
    <ProductContentCardGroupContainer className='product-content-card-group'>
      <ProductContentCard title='About'>
        <Typography
          variant='paragraph'
          lineHeight={1}
          component='div'
          sx={{ fontFamily: inter.style.fontFamily }}
        >
          {description}
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
          {included.map((item) => {
            const SocialIcon = item.icon;

            return (
              <Link key={item.title} href={item.link} target='_blank'>
                <FlexBox>
                  <SocialIcon sx={{ fontSize: 32 }} />

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
            );
          })}
        </FlexBox>
      </ProductContentCard>
    </ProductContentCardGroupContainer>
  );
};

export default ProductContentCardGroup;
