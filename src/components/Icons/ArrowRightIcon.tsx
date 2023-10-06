import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface ArrowRightIconProps extends SvgIconProps {
  fillColor?: string;
}

const ArrowRightIcon = ({ fillColor, ...props }: ArrowRightIconProps) => {
  return (
    <SvgIcon width='9' height='14' viewBox='0 0 9 14' fill='none' {...props}>
      <path
        d='M0.968898 13.4967C0.777317 13.3051 0.669692 13.0452 0.669692 12.7742C0.669692 12.5032 0.777317 12.2433 0.968898 12.0517L6.02743 6.99316L0.968898 1.93462C0.782746 1.74189 0.679742 1.48375 0.68207 1.2158C0.684399 0.947855 0.791873 0.691544 0.981347 0.502069C1.17082 0.312596 1.42713 0.205123 1.69508 0.202794C1.96302 0.200466 2.22116 0.303471 2.4139 0.489622L8.19493 6.27066C8.38652 6.4623 8.49414 6.72218 8.49414 6.99316C8.49414 7.26414 8.38652 7.52402 8.19493 7.71566L2.4139 13.4967C2.22226 13.6883 1.96238 13.7959 1.6914 13.7959C1.42042 13.7959 1.16054 13.6883 0.968898 13.4967Z'
        fill={fillColor || 'white'}
      />
    </SvgIcon>
  );
};

export default ArrowRightIcon;
