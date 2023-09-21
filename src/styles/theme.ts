import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '& ::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '& ::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 5px #fff`,
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C8CC',
            borderRadius: '10px',
          },
          '& ::-webkit-scrollbar-thumb:hover': {},
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontSize: 20,
    fontFamily: 'var(--Inter)',
    fontWeightRegular: 'normal',
  },
  palette: {
    primary: {
      main: '#1F1D2C',
      light: '#080C10',
      dark: '#D2D2D2',
      contrastText: '#ABD2FF',
    },
    secondary: {
      main: '#D9D9D9',
      light: '#898989',
    },
    white: {
      main: '#fff',
      light: '#FFF8F8',
    },
    text: {
      primary: '#fff',
      secondary: '#F4F4F4',
    },
    glassMorphGradient: {
      main: 'linear-gradient(180deg, rgba(207, 232, 255, 0.60) 0%, rgba(211, 221, 255, 0.43) 100%, rgba(50, 81, 199, 0.60) 100%)',
      light:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(83, 104, 184, 0.43) 100%, rgba(255, 255, 255, 0.00) 100%)',
      dark: 'linear-gradient(180deg, rgba(31, 29, 44, 0.00) 0%, #0F171E 100%)',
      contrastText:
        'linear-gradient(180deg, #080C10 0%, rgba(8, 12, 16, 0.64) 100%)',
    },
    topProductsGradient: {
      main: 'linear-gradient(183deg, rgba(235, 242, 255, 0.24) 2.41%, rgba(200, 222, 255, 0.10) 103.36%)',
    },
    greyGradient: {
      main: 'linear-gradient(183deg, rgba(217, 217, 217, 0.24) 2.41%, rgba(217, 217, 217, 0.00) 103.36%)',
    },
    cardGradient: {
      main: 'linear-gradient(180deg, rgba(166, 212, 255, 0.60) 0%, rgba(83, 104, 184, 0.43) 100%, rgba(83, 104, 184, 0.60) 100%)',
    },
    shapeFill: {
      main: 'linear-gradient(211deg, rgba(124, 151, 250, 0.50) 18.86%, rgba(153, 71, 214, 0.00) 56.35%)',
    },
    purpleGradient: {
      main: 'linear-gradient(140deg, #862CF4 10.22%, rgba(53, 71, 141, 0.54) 96.04%)',
    },
    stroke: {
      main: 'linear-gradient(180deg, #AAA 0%, rgba(118, 118, 118, 0.50) 100%)',
      light: 'rgba(255, 255, 255, 0.50)',
    },
    shapeFill2: {
      main: 'linear-gradient(211deg, rgba(17, 94, 243, 0.20) 18.86%, rgba(211, 71, 214, 0.00) 56.35%)',
    },
    shapeFill3: {
      main: 'linear-gradient(180deg, #5FBCD0 0%, rgba(42, 137, 224, 0.00) 100%)',
    },
    shapeFill4: {
      main: 'linear-gradient(211deg, rgba(124, 250, 227, 0.60) 18.86%, rgba(153, 71, 214, 0.00) 56.35%)',
    },
    border: {
      main: 'rgba(255, 255, 255, 0.41)',
      light: 'rgba(217, 217, 217, 0.30)',
      dark: 'rgba(255, 248, 248, 0.40)',
      contrastText: '#AAA',
    },
    boxShadow: {
      main: '0px 4px 24px -21px rgba(0, 0, 0, 0.10)',
      light: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      dark: '0px 6.032px 36.19197px -3.016px rgba(0, 0, 0, 0.10)',
      contrastText: '0px 15px 19px 0px rgba(0, 0, 0, 0.10)',
    },
    imgBackground: {
      main: 'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.04) 100%)',
      light:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)',
      dark: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.99%, rgba(0, 0, 0, 0.30) 86.65%, rgba(0, 0, 0, 0.50) 100%)',
    },
    dividerBg: {
      main: 'linear-gradient(183deg, rgba(255, 255, 255, 0.24) 2.4%, rgba(217, 217, 217, 0.11) 50%, rgba(217, 217, 217, 0.80) 97.6%, rgba(255, 255, 255, 0.48) 97.6%)',
      light:
        'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 0.01%, rgba(255, 255, 255, 0.49) 11.34%, rgba(255, 255, 255, 0.82) 20.62%, rgba(255, 255, 255, 0.82) 80.9%, rgba(255, 255, 255, 0.40) 89.33%, rgba(255, 255, 255, 0.00) 98.97%)',
    },
    dark: {
      main: '#000',
    },
    fadeGradient: {
      main: 'linear-gradient(183deg, rgba(45, 52, 67, 0.00) 2.41%, rgba(108, 127, 172, 0.37) 103.36%)',
      light:
        'linear-gradient(183deg, rgba(0, 0, 0, 0.00) 2.41%, rgba(0, 0, 0, 0.10) 66.87%, rgba(0, 0, 0, 0.24) 103.36%)',
      dark: 'linear-gradient(90deg, #F4F4F4 0%, rgba(244, 244, 244, 0.00) 61.11%)',
    },
    accent: {
      main: '#ABD2FF',
    },
    buttonGradient: {
      main: 'linear-gradient(90deg, rgba(255, 255, 255, 0.70) -2.15%, rgba(255, 255, 255, 0.12) 102.01%)',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    glassMorphGradient: Palette['primary'];
    topProductsGradient: Palette['primary'];
    greyGradient: Palette['primary'];
    cardGradient: Palette['primary'];
    shapeFill: Palette['primary'];
    purpleGradient: Palette['primary'];
    stroke: Palette['primary'];
    shapeFill2: Palette['primary'];
    shapeFill3: Palette['primary'];
    shapeFill4: Palette['primary'];
    border: Palette['primary'];
    boxShadow: Palette['primary'];
    imgBackground: Palette['primary'];
    dividerBg: Palette['primary'];
    dark: Palette['primary'];
    fadeGradient: Palette['primary'];
    accent: Palette['primary'];
    buttonGradient: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    glassMorphGradient?: PaletteOptions['primary'];
    topProductsGradient?: PaletteOptions['primary'];
    greyGradient?: PaletteOptions['primary'];
    cardGradient?: PaletteOptions['primary'];
    shapeFill?: PaletteOptions['primary'];
    purpleGradient?: PaletteOptions['primary'];
    stroke?: PaletteOptions['primary'];
    shapeFill2?: PaletteOptions['primary'];
    shapeFill3?: PaletteOptions['primary'];
    shapeFill4?: PaletteOptions['primary'];
    border?: PaletteOptions['primary'];
    boxShadow?: PaletteOptions['primary'];
    imgBackground?: PaletteOptions['primary'];
    dividerBg?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    fadeGradient?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
    buttonGradient?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    body5: React.CSSProperties;
    body6: React.CSSProperties;
    bodyBold: React.CSSProperties;
    bodyTitle: React.CSSProperties;
    h1Mobile: React.CSSProperties;
    h2Mobile: React.CSSProperties;
    h3Mobile: React.CSSProperties;
    h4Mobile: React.CSSProperties;
    body1Mobile: React.CSSProperties;
    body2Mobile: React.CSSProperties;
    body3Mobile: React.CSSProperties;
    priceMobile: React.CSSProperties;
    bodyBoldMobile: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    body5?: React.CSSProperties;
    body6?: React.CSSProperties;
    bodyBold?: React.CSSProperties;
    bodyTitle?: React.CSSProperties;
    h1Mobile?: React.CSSProperties;
    h2Mobile?: React.CSSProperties;
    h3Mobile?: React.CSSProperties;
    h4Mobile?: React.CSSProperties;
    body1Mobile?: React.CSSProperties;
    body2Mobile?: React.CSSProperties;
    body3Mobile?: React.CSSProperties;
    priceMobile?: React.CSSProperties;
    bodyBoldMobile?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    body5: true;
    body6: true;
    bodyBold: true;
    bodyTitle: true;
    h1Mobile: true;
    h2Mobile: true;
    h3Mobile: true;
    h4Mobile: true;
    body1Mobile: true;
    body2Mobile: true;
    body3Mobile: true;
    priceMobile: true;
    bodyBoldMobile: true;
  }
}

theme.typography.h1 = {
  fontSize: 66,
  fontWeight: 700,
  lineHeight: '100%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h2 = {
  fontSize: 48,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h3 = {
  fontSize: 34,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h4 = {
  fontSize: 26,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h5 = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h6 = {
  fontSize: 22,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.body1 = {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '150.5%',
  letterSpacing: '-0.4px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body2 = {
  fontSize: 17,
  fontWeight: 400,
  lineHeight: '148%',
  letterSpacing: '0.17px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body3 = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '148%',
  letterSpacing: '0.16px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body4 = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '132.5%',
  letterSpacing: '0.6px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body5 = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '132.5%',
  letterSpacing: '0.24px',
  fontFamily: 'var(--Inter)',
};

theme.typography.bodyBold = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '132.5%',
  letterSpacing: '0.4px',
  fontFamily: 'var(--Inter)',
};

theme.typography.bodyTitle = {
  fontSize: 10,
  fontWeight: 700,
  lineHeight: '132.5%',
  letterSpacing: '0.2px',
  fontFamily: 'var(--Inter)',
};

theme.typography.h1Mobile = {
  fontSize: 41,
  fontWeight: 700,
  lineHeight: '100%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h2Mobile = {
  fontSize: 27.5,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h3Mobile = {
  fontSize: 20,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.h4Mobile = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.body1Mobile = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '150.5%',
  letterSpacing: '-0.32px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body2Mobile = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '148%',
  letterSpacing: '0.16px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body3Mobile = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '132.5%',
  letterSpacing: '0.7px',
  fontFamily: 'var(--Inter)',
};

theme.typography.priceMobile = {
  fontSize: 22,
  fontWeight: 700,
  lineHeight: '117%',
  fontFamily: 'var(--Inter)',
};

theme.typography.bodyBoldMobile = {
  fontSize: 16,
  fontWeight: 700,
  lineHeight: '150.5%',
  letterSpacing: '-0.32px',
  fontFamily: 'var(--Inter)',
};

theme.typography.body6 = {
  fontSize: 18,
  fontWeight: 700,
  fontFamily: 'var(--Inter)',

  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
};

declare module '@mui/material/styles' {
  interface Palette {
    button: Palette['primary'];
    hover: Palette['primary'];
    shadow: Palette['primary'];
    black40: Palette['primary'];
    lightInternalGlassBorder: Palette['primary'];
    green: Palette['primary'];
  }

  interface PaletteOptions {
    button?: PaletteOptions['primary'];
    hover?: PaletteOptions['primary'];
    shadow?: PaletteOptions['primary'];
    black40?: PaletteOptions['primary'];
    lightInternalGlassBorder?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
  }
}

export default theme;
