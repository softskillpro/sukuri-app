import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ManageIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width='25' height='8' viewBox='0 0 25 8' fill='none' {...props}>
      <ellipse cx='3.39984' cy='3.82227' rx='3.39984' ry='3.5' fill='white' />
      <ellipse cx='12.2006' cy='3.82227' rx='3.39984' ry='3.5' fill='white' />
      <ellipse cx='20.9975' cy='3.82227' rx='3.39984' ry='3.5' fill='white' />
    </SvgIcon>
  );
};

export default ManageIcon;
