import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          '& ::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
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
    h1: {
      fontSize: 100,
      lineHeight: '122px',
      fontWeight: 700,
    },
    h2: {
      fontSize: 70,
      lineHeight: '85px',
      fontWeight: 700,
    },
    h3: {
      fontSize: 60,
      lineHeight: '73px',
      fontWeight: 700,
    },
    h4: {
      fontSize: 32,
      lineHeight: '39px',
      fontWeight: 700,
    },
    h5: {
      fontSize: 30,
      lineHeight: '37px',
      fontWeight: 700,
    },
    h6: {
      fontSize: 28,
      lineHeight: '34px',
      fontWeight: 700,
    },
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
    caption: {
      fontSize: 18,
      lineHeight: '22px',
      fontWeight: 400,
    },
    custom1: {
      fontSize: 16,
      lineHeight: '20px',
      fontWeight: 500,
    },
    custom2: {
      fontSize: 14,
      lineHeight: '17px',
      fontWeight: 400,
    },
    custom3: {
      fontSize: 50,
      lineHeight: '60px',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#FFF2F4',
    },
    secondary: {
      main: '#FFF2F4',
    },
    text: { primary: '#030712', secondary: '#461427' },
    text1: { main: '#F88497' },
    black: { main: '#000' },
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
      main: 'inset 0px -4px 0px #67B54C',
      dark: 'inset 0px -4px 0px #D02C2C',
      light: 'inset 0px -4px 0px #D0712C',
      contrastText: '1px 1px 10px 1px rgba(248, 132, 151, 0.5)',
    },
    shadow1: {
      main: 'inset 0px -4px 0px 2px #F88497, inset 0px 8px 0px 2px #F88497',
      light: 'inset 0px -4px 0px 2px #FFC0CB, inset 0px 8px 0px 2px #FFC0CB',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    text1: Palette['primary']
    black: Palette['primary']
    white: Palette['primary']
    btnGradient: Palette['primary']
    bgGradient: Palette['primary']
    shadow: Palette['primary']
    shadow1: Palette['primary']
  }

  interface PaletteOptions {
    text1?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
    white?: PaletteOptions['primary']
    btnGradient?: PaletteOptions['primary']
    bgGradient?: PaletteOptions['primary']
    shadow?: PaletteOptions['primary']
    shadow1?: PaletteOptions['primary']
  }

  interface TypographyVariants {
    custom1: React.CSSProperties
    custom2: React.CSSProperties
    custom3: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    custom1?: React.CSSProperties
    custom2?: React.CSSProperties
    custom3?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    custom1: true
    custom2: true
    custom3: true
  }
}

export default theme
