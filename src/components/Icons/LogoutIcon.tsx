import SvgIcon from '@mui/material/SvgIcon';

const LogoutIcon = ({ ...props }) => {
  return (
    <SvgIcon
      width='22'
      height='23'
      viewBox='0 0 22 23'
      fill='transparent'
      {...props}
    >
      <path
        d='M13.8219 6.29102C13.8099 4.11602 13.7129 2.93802 12.9449 2.17002C12.0659 1.29102 10.6519 1.29102 7.8239 1.29102H6.8239C3.9949 1.29102 2.5809 1.29102 1.7019 2.17002C0.8239 3.04802 0.823899 4.46302 0.823899 7.29102V15.291C0.823899 18.119 0.8239 19.534 1.7019 20.412C2.5819 21.291 3.9949 21.291 6.8239 21.291H7.8239C10.6519 21.291 12.0659 21.291 12.9449 20.412C13.7129 19.644 13.8099 18.466 13.8219 16.291'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M7.82391 11.291H20.8239M20.8239 11.291L17.3239 8.29102M20.8239 11.291L17.3239 14.291'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
};

export default LogoutIcon;
