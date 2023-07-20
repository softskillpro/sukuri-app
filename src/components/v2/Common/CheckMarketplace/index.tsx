import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import { inter } from '@/components/v2/Common/CustomFont';

const CheckMarketplace = () => {
  const router = useRouter();

  return (
    <Typography
      variant='subHeading'
      textAlign='center'
      component='div'
      className='check-marketplace'
      sx={{
        fontFamily: inter.style.fontFamily,
      }}
      onClick={() => router.push('/marketplace')}
    >
      Looking for more? Check out the Marketplace.
    </Typography>
  );
};

export default CheckMarketplace;
