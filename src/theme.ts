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
      gray: string;
    },
    bg: {
      green: string;
      gray: string;
      blue: string;
      silver: string;
      white: string;
    },
    status: {
      text: {
        completed: string;
        confirmed: string;
        pending: string;
        cancelled: string;
        processing: string;
      },
      bg: {
        completed: string;
        confirmed: string;
        pending: string;
        cancelled: string;
        processing: string;
      }
    },
    acton: {
      text: {
        edit: string;
        delete: string;
      },
      bg: {
        edit: string;
        delete: string;
      }
    }
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
      gray: string;
    },
    bg?: {
      green: string;
      gray: string;
      blue: string;
      silver: string;
      white: string;
    },
    status?: {
      text: {
        completed: string;
        confirmed: string;
        pending: string;
        cancelled: string;
        processing: string;
        shipped: string;
        delivered: string;
      },
      bg: {
        completed: string;
        confirmed: string;
        pending: string;
        cancelled: string;
        processing: string;
        shipped: string;
        delivered: string;
      }
    },
    acton?: {
      text: {
        edit: string;
        delete: string;
      },
      bg: {
        edit: string;
        delete: string;
      }
    }
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
      gray: '#1D1E211A' //10%
    },
    text: {
      primary: '#1D1E21', //100%
      secondary: '#1D1E2166' //40%
    },
    bg: {
      green: '#E7F1ED',
      gray: '#DCDDDF',
      blue: '#F7F8FA',
      silver: '#F9F9F9',
      white: '#FFFFFF'
    },
    status: {
      text: {
        completed: '#59B17A',
        confirmed: '#8059E4',
        pending: '#F79042',
        cancelled: '#E85050',
        processing: '#70A6E8',
        shipped: '#00c9a7',
        delivered: '#c493ff'
      },
      bg: {
        completed: '#59B17A1A',
        confirmed: '#8059E41A',
        pending: '#F790421A',
        cancelled: '#E850501A',
        processing: '#70A6E81A',
        shipped: '#00c9a71A',
        delivered: '#c493ff1A'
      }
    },
    acton: {
      text: {
        edit: '#59B17A', //100%
        delete: '#E85050' //100%
      },
      bg: {
        edit: '#59b17a80', //50%
        delete: '#e8505080' //50%
      }
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
