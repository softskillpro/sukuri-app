import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const PrevCircleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon width='56' height='55' viewBox='0 0 56 55' fill='none' {...props}>
      <g filter='url(#filter0_bd_2077_726)'>
        <ellipse
          cx='28.0487'
          cy='27.5017'
          rx='23.9002'
          ry='23.4978'
          fill='#156D53'
          fillOpacity='0.9'
        />
        <path
          d='M51.4489 27.5017C51.4489 40.195 40.9803 50.4994 28.0487 50.4994C15.117 50.4994 4.64844 40.195 4.64844 27.5017C4.64844 14.8083 15.117 4.50391 28.0487 4.50391C40.9803 4.50391 51.4489 14.8083 51.4489 27.5017Z'
          stroke='white'
          strokeOpacity='0.2'
        />
        <path
          d='M15.6875 27.5016L34.2308 16.9754L34.2308 38.0278L15.6875 27.5016Z'
          fill='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_bd_2077_726'
          x='-0.851562'
          y='-0.996094'
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
            result='effect1_backgroundBlur_2077_726'
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
            in2='effect1_backgroundBlur_2077_726'
            result='effect2_dropShadow_2077_726'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect2_dropShadow_2077_726'
            result='shape'
          />
        </filter>
      </defs>
    </SvgIcon>
  );
};

export default PrevCircleIcon;
