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
  },
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#fff' },
    yellow: { light: '#FFBF0D', main: '#FF9809' },
    orange: { light: '#FF7004', main: '#FF4900' },
    gray: { main: '#8C8CA5', dark: '#707070' },
    text: { primary: '#fff', secondary: '#000' },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    yellow: Palette['primary']
    gray: Palette['primary']
    orange: Palette['primary']
  }

  interface PaletteOptions {
    yellow?: PaletteOptions['primary']
    gray?: PaletteOptions['primary']
    orange?: PaletteOptions['primary']
  }

  interface TypographyVariants {
    custom1: React.CSSProperties
    custom2: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    custom1?: React.CSSProperties
    custom2?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    custom1: true
    custom2: true
  }
}

export default theme
