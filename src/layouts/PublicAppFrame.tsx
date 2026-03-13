import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet, useLocation } from 'react-router-dom';
import PublicNavigationBar from '../components/PublicNavigationBar/PublicNavigationBar';
import PublicPaletteChecker from '../components/PublicPaletteChecker/PublicPaletteChecker';
import { usePublicPalette } from '../context/PublicPaletteContext';
import { getPublicAppTheme } from '../theme/publicAppTheme';

const ROUTE_TITLES: Record<string, string> = {
  '/contact': 'Contact',
};

export default function PublicAppFrame() {
  const { activePalette, activePaletteMode, activePaletteName } = usePublicPalette();
  const location = useLocation();
  const navigationTitle = ROUTE_TITLES[location.pathname];

  return (
    <ThemeProvider theme={getPublicAppTheme(activePaletteName, activePaletteMode)}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100dvh',
          backgroundColor: activePalette.background,
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: activePalette.surfaceTint,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 'calc(env(safe-area-inset-top) + 20px)',
            paddingRight: { xs: '12px', sm: '24px', md: '32px' },
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',
            paddingLeft: { xs: '12px', sm: '24px', md: '32px' },
          }}
        >
          {navigationTitle && <PublicNavigationBar title={navigationTitle} />}
          <Outlet />
        </Box>
        <PublicPaletteChecker />
      </Box>
    </ThemeProvider>
  );
}
