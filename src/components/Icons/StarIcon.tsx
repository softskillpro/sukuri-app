import SvgIcon from '@mui/material/SvgIcon';

const StarIcon = ({ ...props }) => {
  return (
    <SvgIcon width='15' height='15' viewBox='0 0 15 15' fill='none' {...props}>
      <path
        d='M7.53418 12.3822L11.0759 14.5243C11.7245 14.9169 12.5182 14.3365 12.3475 13.6026L11.4087 9.57442L14.5408 6.86052C15.1126 6.36554 14.8054 5.42677 14.0544 5.36703L9.93231 5.01712L8.31933 1.21084C8.02917 0.519564 7.03919 0.519564 6.74903 1.21084L5.13605 5.00859L1.014 5.35849C0.262986 5.41823 -0.0442479 6.357 0.527548 6.85199L3.65962 9.56588L2.72085 13.5941C2.55017 14.328 3.34386 14.9083 3.99246 14.5158L7.53418 12.3822Z'
        fill='url(#paint0_linear_765_2179)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_765_2179'
          x1='7.53418'
          y1='0.692383'
          x2='7.53418'
          y2='14.6509'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' stopOpacity='0.5' />
          <stop offset='1' stopColor='white' stopOpacity='0.4' />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};

export default StarIcon;
