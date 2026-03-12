import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import PublicPaletteChecker from '../components/PublicPaletteChecker/PublicPaletteChecker';
import { usePublicPalette } from '../context/PublicPaletteContext';
import { getPublicAppTheme } from '../theme/publicAppTheme';

export default function PublicAppFrame() {
  const { activePalette, activePaletteMode, activePaletteName } = usePublicPalette();

  return (
    <ThemeProvider theme={getPublicAppTheme(activePaletteName, activePaletteMode)}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100dvh',
          overflow: 'hidden',
          background: `linear-gradient(160deg, ${activePalette.backgroundGradientStart} 0%, ${activePalette.backgroundGradientMiddle} 48%, ${activePalette.backgroundGradientEnd} 100%)`,
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -160,
              right: -90,
              width: 360,
              height: 360,
              borderRadius: '50%',
              backgroundColor: activePalette.blobPrimary,
              opacity: activePaletteMode === 'dark' ? 0.3 : 0.34,
              filter: 'blur(48px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -180,
              left: -100,
              width: 420,
              height: 420,
              borderRadius: '50%',
              backgroundColor: activePalette.blobSecondary,
              opacity: activePaletteMode === 'dark' ? 0.2 : 0.26,
              filter: 'blur(52px)',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            minHeight: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 'calc(env(safe-area-inset-top) + 20px)',
            paddingRight: { xs: '16px', sm: '24px', md: '32px' },
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',
            paddingLeft: { xs: '16px', sm: '24px', md: '32px' },
          }}
        >
          <Outlet />
        </Box>
        <PublicPaletteChecker />
      </Box>
    </ThemeProvider>
  );
}
