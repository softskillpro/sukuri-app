import SvgIcon from '@mui/material/SvgIcon';

const DividerIcon = ({ ...props }) => {
  return (
    <SvgIcon width='225' height='2' viewBox='0 0 225 2' fill='none' {...props}>
      <path
        d='M0.426025 0.707031H112.426H224.426'
        stroke='#8E919B'
        strokeDasharray='2 2'
      />
    </SvgIcon>
  );
};

export default DividerIcon;
