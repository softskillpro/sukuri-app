import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ArrowCircleRightIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width='32' height='32' viewBox='0 0 24 24' fill='none' {...props}>
      <path
        stroke='#FF8A65'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
        d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
      ></path>
      <path
        stroke='#FF8A65'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.74 15.53L14.26 12l-3.52-3.53'
      ></path>
    </SvgIcon>
  );
};

export default ArrowCircleRightIcon;
