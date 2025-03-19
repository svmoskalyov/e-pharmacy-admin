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
    },
    bg?: {
      green: string;
      blue: string;
      grey: string;
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
}

const theme = createTheme({
  cssVariables: true,
  palette: {
    accent: {
      main: '#59B17A',
      light: '#59B17A1A',
      dark: '#3F945F',
      contrastText: '#FFFFFF'
    },
    accent2: {
      main: '#E85050',
      light: '#E850501A',
      dark: '#DA4A4A'
    },
    text: {
      primary: '#1D1E21',
      secondary: '#DCDDDF'
    },
    bg: {
      green: '#E7F1ED',
      blue: '#F7F8FA',
      grey: '#F9F9F9',
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
    }
  }
})

export default theme
