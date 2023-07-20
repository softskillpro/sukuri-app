import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const CheckboxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width='18' height='18' viewBox='0 0 18 18' fill='none' {...props}>
      <g id='iconContainer'>
        <rect
          id='Rectangle 383'
          x='1'
          y='1'
          width='16'
          height='16'
          rx='4'
          fill='white'
          stroke='#216D15'
          strokeWidth='2'
        />
        <path
          id='tickVector'
          d='M4.68002 9.9846C4.30139 9.59777 4.29929 8.97989 4.67528 8.5905L5.03465 8.21831C5.42554 7.81348 6.07335 7.81078 6.4676 8.21233L7.28123 9.04102C7.67518 9.44227 8.3224 9.43992 8.71343 9.03582L11.9027 5.7399C12.2947 5.3348 12.9439 5.33359 13.3374 5.73722L13.6976 6.10673C14.0756 6.4944 14.0763 7.11245 13.6994 7.50106L8.71456 12.6398C8.32295 13.0435 7.67556 13.045 7.28214 12.6431L4.68002 9.9846Z'
          fill='#216D15'
        />
      </g>
    </SvgIcon>
  );
};

export default CheckboxIcon;
