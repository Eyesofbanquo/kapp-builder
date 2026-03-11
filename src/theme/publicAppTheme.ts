import { alpha, createTheme } from '@mui/material/styles';

export const publicAppPalette = {
  mint: '#DDFFF7',
  blush: '#FFD2FC',
  orchid: '#E980FC',
  plum: '#B96AC9',
  espresso: '#231B1B',
} as const;

export const publicAppTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: publicAppPalette.plum,
      contrastText: publicAppPalette.espresso,
    },
    secondary: {
      main: publicAppPalette.orchid,
      contrastText: publicAppPalette.espresso,
    },
    background: {
      default: publicAppPalette.mint,
      paper: alpha('#FFFFFF', 0.78),
    },
    text: {
      primary: publicAppPalette.espresso,
      secondary: alpha(publicAppPalette.espresso, 0.72),
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: '"Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
});
