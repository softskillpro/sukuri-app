import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const HambergerMenuIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        stroke='#030712'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
      />
    </SvgIcon>
  );
};

export default HambergerMenuIcon;
