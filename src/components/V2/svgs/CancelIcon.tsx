import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const CancelIcon = (props: SvgIconProps) => {
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
          stroke='#BC1010'
          strokeWidth='2'
        />
        <path
          id='crossVector'
          d='M11.7173 8.29289C11.3268 8.68342 11.3268 9.31658 11.7173 9.70711L13.2929 11.2827C13.6834 11.6732 13.6834 12.3064 13.2929 12.6969L12.6969 13.2929C12.3064 13.6834 11.6732 13.6834 11.2827 13.2929L9.70711 11.7173C9.31658 11.3268 8.68342 11.3268 8.29289 11.7173L6.71732 13.2929C6.3268 13.6834 5.69363 13.6834 5.30311 13.2929L4.70711 12.6969C4.31658 12.3064 4.31658 11.6732 4.70711 11.2827L6.28268 9.70711C6.6732 9.31658 6.6732 8.68342 6.28268 8.29289L4.70711 6.71732C4.31658 6.3268 4.31658 5.69363 4.70711 5.30311L5.30311 4.70711C5.69363 4.31658 6.3268 4.31658 6.71732 4.70711L8.29289 6.28268C8.68342 6.6732 9.31658 6.6732 9.70711 6.28268L11.2827 4.70711C11.6732 4.31658 12.3064 4.31658 12.6969 4.70711L13.2929 5.30311C13.6834 5.69363 13.6834 6.3268 13.2929 6.71732L11.7173 8.29289Z'
          fill='#BC1010'
        />
      </g>
    </SvgIcon>
  );
};

export default CancelIcon;