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
        body: {
          background: '#000',
        },
      },
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: 'var(--Montserrat)',
    fontWeightRegular: 'normal',
    subtitle1: {
      fontSize: 25,
      lineHeight: '30px',
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 24,
      lineHeight: '29px',
      fontWeight: 500,
    },
    body1: {
      fontSize: 22,
      lineHeight: '27px',
      fontWeight: 700,
    },
    body2: {
      fontSize: 20,
      lineHeight: '24px',
      fontWeight: 400,
    },
    custom1: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 500,
      fontFamily: 'var(--Montserrat)',
    },
    custom2: {
      fontSize: 14,
      lineHeight: '17px',
      fontWeight: 400,
      fontFamily: 'var(--Montserrat)',
    },
    custom3: {
      fontSize: 50,
      lineHeight: '60px',
      fontWeight: 700,
      fontFamily: 'var(--Montserrat)',
    },
    custom4: {
      fontSize: 180,
      lineHeight: '219px',
      fontWeight: 700,
      fontFamily: 'var(--Montserrat)',
    },
    custom5: {
      fontSize: 90,
      lineHeight: '110px',
      fontWeight: 700,
      fontFamily: 'var(--Montserrat)',
    },
    custom6: {
      fontSize: 69,
      lineHeight: '84px',
      fontWeight: 700,
      fontFamily: 'var(--Montserrat)',
    },
    custom7: {
      fontSize: 38,
      lineHeight: '46px',
      fontWeight: 500,
      fontFamily: 'var(--Montserrat)',
    },
    custom8: {
      fontSize: 12,
      lineHeight: '15px',
      fontWeight: 700,
      fontFamily: 'var(--Montserrat)',
    },
    custom9: {
      fontSize: 10,
      lineHeight: '12px',
      fontWeight: 400,
      fontStyle: 'italic',
      fontFamily: 'var(--Montserrat)',
    },
  },
  palette: {
    primary: {
      main: '#FFF2F4',
      dark: 'rgba(0, 0, 0, 0.40)',
      light:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)',
    },
    text: { primary: '#fff', secondary: '#461427' },
    text1: { main: '#F88497', light: '#FFC0CB', contrastText: '#FAFAF9' },
    black: {
      main: '#000',
      light: '#A5A5A5',
      dark: '#2F2F2F',
      contrastText: '#E3E3E3',
    },
    white: { main: '#fff' },
    btnGradient: {
      main: 'linear-gradient(0deg, rgba(103, 181, 76, 0.19), rgba(103, 181, 76, 0.19)), #FFFFFF',
      dark: 'linear-gradient(0deg, rgba(208, 44, 44, 0.19), rgba(208, 44, 44, 0.19)), #FFFFFF',
      light:
        'linear-gradient(0deg, rgba(208, 113, 44, 0.19), rgba(208, 113, 44, 0.19)), #FFFFFF',
    },
    bgGradient: {
      main: 'linear-gradient(90deg, #030712 0%, #461427 50.52%, #030712 100%)',
      light: 'linear-gradient(180deg, #331122 0%, #020617 100%)',
    },
    shadow: {
      main: '0px 0px 4px 0px rgba(0, 0, 0, 0.35)',
      dark: 'inset 0px -4px 0px #D02C2C',
      light: 'inset 0px -4px 0px #D0712C',
      contrastText: '1px 1px 10px 1px rgba(248, 132, 151, 0.5)',
    },
    shadow1: {
      main: '0px 0px 8px 0px rgba(0, 0, 0, 0.35)',
      light: 'rgba(0, 0, 0, 0.05)',
      dark: '1px 1px 2px 1px #030712',
      contrastText: 'inset 0px -4px 0px #FFC0CB, inset 0px 8px 0px #FFC0CB',
    },
    shadow2: {
      main: '0px 0px 5px rgba(248, 132, 151, 0.5)',
      light: '1px 1px 10px rgba(248, 132, 151, 0.5)',
    },

    green: {
      main: 'rgba(21, 109, 46, 0.80)',
      dark: 'rgba(20, 78, 36, 0.89)',
      light: 'rgba(31, 147, 64, 0.80)',
      contrastText: '#67B54C',
    },
    blue: {
      main: 'rgba(23, 67, 179, 0.80)',
      dark: 'rgba(20, 53, 137, 0.80)',
      light: 'rgba(32, 82, 208, 0.80)',
    },
    hardNegative: {
      main: '#BC1010',
    },
    unavailableBg: {
      main: 'rgba(65, 65, 65, 0.90)',
    },
    lightInternalGlassBorder: {
      main: 'rgba(255, 255, 255, 0.05)',
    },
    border: {
      main: 'rgba(255, 255, 255, 0.20)',
      light: '#67B54C',
      dark: 'rgba(255, 255, 255, 0.15)',
      contrastText: 'rgba(255, 255, 255, 0.50)',
    },
    secondary: {
      main: 'rgba(21, 109, 83, 0.9)',
      dark: 'rgba(255, 255, 255, 0.40)',
      light: 'rgba(0, 0, 0, 0.30)',
      contrastText: 'rgba(0, 0, 0, 0.10)',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 1200,
      xl: 1400,
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    text1: Palette['primary'];
    black: Palette['primary'];
    white: Palette['primary'];
    btnGradient: Palette['primary'];
    bgGradient: Palette['primary'];
    shadow: Palette['primary'];
    shadow1: Palette['primary'];
    shadow2: Palette['primary'];
    border: Palette['primary'];

    blue: Palette['primary'];
    green: Palette['primary'];
    hardNegative: Palette['primary'];
    unavailableBg: Palette['primary'];
    lightInternalGlassBorder: Palette['primary'];
  }

  interface PaletteOptions {
    text1?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    btnGradient?: PaletteOptions['primary'];
    bgGradient?: PaletteOptions['primary'];
    shadow?: PaletteOptions['primary'];
    shadow1?: PaletteOptions['primary'];
    shadow2?: PaletteOptions['primary'];
    border?: PaletteOptions['primary'];

    blue?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    hardNegative?: PaletteOptions['primary'];
    unavailableBg?: PaletteOptions['primary'];
    lightInternalGlassBorder?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    custom1: React.CSSProperties;
    custom2: React.CSSProperties;
    custom3: React.CSSProperties;
    custom4: React.CSSProperties;
    custom5: React.CSSProperties;
    custom6: React.CSSProperties;
    custom7: React.CSSProperties;
    custom8: React.CSSProperties;
    custom9: React.CSSProperties;

    code: React.CSSProperties;
    paragraph: React.CSSProperties;
    labelXl: React.CSSProperties;
    labelLg: React.CSSProperties;
    labelMd: React.CSSProperties;
    labelSm: React.CSSProperties;
    labelXs: React.CSSProperties;
    subHeading: React.CSSProperties;
    productTitle: React.CSSProperties;
    productTitleSmall: React.CSSProperties;
    userBar: React.CSSProperties;
    wordmarkMarketplace: React.CSSProperties;
    wordmarkFooter: React.CSSProperties;
    wordmarkHeader: React.CSSProperties;
    wordmarkSignup: React.CSSProperties;
    footer: React.CSSProperties;
    input: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    custom1?: React.CSSProperties;
    custom2?: React.CSSProperties;
    custom3?: React.CSSProperties;
    custom4?: React.CSSProperties;
    custom5?: React.CSSProperties;
    custom6?: React.CSSProperties;
    custom7?: React.CSSProperties;
    custom8?: React.CSSProperties;
    custom9?: React.CSSProperties;

    code?: React.CSSProperties;
    paragraph?: React.CSSProperties;
    labelXl?: React.CSSProperties;
    labelLg?: React.CSSProperties;
    labelMd?: React.CSSProperties;
    labelSm?: React.CSSProperties;
    labelXs?: React.CSSProperties;
    subHeading?: React.CSSProperties;
    productTitle?: React.CSSProperties;
    userBar?: React.CSSProperties;
    wordmarkMarketplace?: React.CSSProperties;
    wordmarkFooter?: React.CSSProperties;
    wordmarkHeader?: React.CSSProperties;
    wordmarkSignup?: React.CSSProperties;
    footer?: React.CSSProperties;
    input?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    custom1: true;
    custom2: true;
    custom3: true;
    custom4: true;
    custom5: true;
    custom6: true;
    custom7: true;
    custom8: true;
    custom9: true;

    code: true;
    paragraph: true;
    labelXl: true;
    labelLg: true;
    labelMd: true;
    labelSm: true;
    labelXs: true;
    subHeading: true;
    productTitle: true;
    productTitleSmall: true;
    userBar: true;
    wordmarkMarketplace: true;
    wordmarkFooter: true;
    wordmarkHeader: true;
    wordmarkSignup: true;
    footer: true;
    input: true;
  }
}

theme.typography.code = {
  fontSize: 12,
};

theme.typography.h1 = {
  fontSize: 40,
  fontFamily: 'var(--Montserrat)',
};

theme.typography.h2 = {
  fontSize: 36,
  fontFamily: 'var(--Montserrat)',
};

theme.typography.h3 = {
  fontSize: 30,
  fontWeight:600,
  lineHeight: '100%',
  textTransform:'uppercase',
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]:{
    fontSize: 25,
  }
};

theme.typography.h4 = {
  fontSize: 24,
  fontFamily: 'var(--Montserrat)',
  textTransform: 'uppercase',
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
};

theme.typography.h5 = {
  fontSize: 18,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
  },
};

theme.typography.caption = {
  fontSize: 12,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
  },
};

theme.typography.paragraph = {
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '100%',
  fontFamily: 'var(--Inter)',
};

theme.typography.labelXl = {
  fontSize: 22,
  fontWeight: 600,
  fontFamily: 'var(--Montserrat)',
};

theme.typography.labelLg = {
  fontSize: 18,
  fontWeight: 600,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
};

theme.typography.labelMd = {
  fontSize: 12,
  textTransform: 'uppercase',
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 9,
  },
};

theme.typography.labelSm = {
  fontSize: 10,
  fontWeight: 600,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 8,
  },
};

theme.typography.labelXs = {
  fontSize: 8,
  fontFamily: 'var(--Montserrat)',
};

theme.typography.subHeading = {
  fontSize: 16,
  fontFamily: 'var(--Inter)',
  lineHeight: "100%",
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: 14,
  },
};

theme.typography.productTitle = {
  fontSize: 42,
  fontFamily: 'var(--Inter)',
  fontWeight: 600,
  lineHeight: '100%',
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
};

theme.typography.productTitleSmall = {
  fontSize: 24,
  [theme.breakpoints.down('md')]: {
    fontSize: 18,
  }
}

theme.typography.userBar = {
  fontSize: 50,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 30,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 25,
  },
};

theme.typography.wordmarkMarketplace = {
  fontSize: 50,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 35,
  },
};

theme.typography.wordmarkFooter = {
  fontSize: 22,
  fontWeight: 600,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
};

theme.typography.wordmarkHeader = {
  fontSize: 20,
  fontWeight: 600,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
};

theme.typography.wordmarkSignup = {
  fontSize: 52,
  fontFamily: 'var(--Montserrat)',
  [theme.breakpoints.down('md')]: {
    fontSize: 48,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
  },
};

theme.typography.footer = {
  fontSize: 14,
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
};

export default theme;
