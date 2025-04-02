import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    accent2: {
      main: string;
      light: string;
      dark: string;
      grey: string;
    },
    bg: {
      green: string;
      grey: string;
      blue: string;
      silver: string;
      white: string;
    },
    status: {
      completed: string;
      confirmed: string;
      pending: string;
      cancelled: string;
      processing: string;
    };
  }

  interface PaletteOptions {
    accent?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    },
    accent2?: {
      main: string;
      light: string;
      dark: string;
      grey: string;
    },
    bg?: {
      green: string;
      grey: string;
      blue: string;
      silver: string;
      white: string;
    },
    status?: {
      completed: string;
      confirmed: string;
      pending: string;
      cancelled: string;
      processing: string;
    };
  }

  interface TypeText {
    text?: {
      primary: string;
      secondary: string;
    }
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: ['"Inter Variable"', 'sans-serif'].join(',')
  },
  palette: {
    accent: {
      main: '#59B17A', //100%
      light: '#59B17A1A', //10%
      dark: '#3F945F',
      contrastText: '#FFFFFF'
    },
    accent2: {
      main: '#E85050', //100%
      light: '#E850501A', //10%
      dark: '#DA4A4A',
      grey: '#1D1E211A' //10%
    },
    text: {
      primary: '#1D1E21', //100%
      secondary: '#1D1E2166' //40%
    },
    bg: {
      green: '#E7F1ED',
      grey: '#DCDDDF',
      blue: '#F7F8FA',
      silver: '#F9F9F9',
      white: '#FFFFFF'
    },
    status: {
      completed: '#59B17A',
      confirmed: '#8059E4',
      pending: '#F79042',
      cancelled: '#E85050',
      processing: '#70A6E8'
    },
    error: {
      main: '#E85050'
    },
    background: {
      default: '#F7F8FA'
    }
  },
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      desktop: 1440
    }
  }
})

export default theme
