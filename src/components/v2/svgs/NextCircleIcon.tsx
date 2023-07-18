import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const NextCircleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width='57' height='55' viewBox='0 0 57 55' fill='none' {...props}>
      <g id='prevButton' filter='url(#filter0_bd_2077_729)'>
        <g id='Ellipse 21'>
          <ellipse
            cx='28.8576'
            cy='27.4983'
            rx='23.9002'
            ry='23.4978'
            transform='rotate(-180 28.8576 27.4983)'
            fill='#156D53'
            fillOpacity='0.9'
          />
          <path
            d='M5.45737 27.4983C5.45737 14.805 15.926 4.50055 28.8576 4.50055C41.7892 4.50055 52.2578 14.805 52.2578 27.4983C52.2578 40.1917 41.7892 50.4961 28.8576 50.4961C15.926 50.4961 5.45737 40.1917 5.45737 27.4983Z'
            stroke='white'
            strokeOpacity='0.2'
          />
        </g>
        <path
          id='Polygon 10'
          d='M41.2187 27.4945L22.6755 38.0207L22.6755 16.9683L41.2187 27.4945Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_bd_2077_729'
          x='-0.0429688'
          y='-1'
          width='57.8008'
          height='56.9961'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='2.5' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_2077_729'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
          />
          <feBlend
            mode='normal'
            in2='effect1_backgroundBlur_2077_729'
            result='effect2_dropShadow_2077_729'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_2077_729'
            result='shape'
          />
        </filter>
      </defs>
    </SvgIcon>
  );
};

export default NextCircleIcon;
