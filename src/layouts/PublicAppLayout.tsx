import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { publicAppPalette, publicAppTheme } from '../theme/publicAppTheme';

export default function PublicAppLayout() {
  return (
    <ThemeProvider theme={publicAppTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100dvh',
          overflow: 'hidden',
          background: `linear-gradient(160deg, ${publicAppPalette.mint} 0%, ${publicAppPalette.blush} 48%, #ffffff 100%)`,
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
              backgroundColor: publicAppPalette.orchid,
              opacity: 0.34,
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
              backgroundColor: publicAppPalette.plum,
              opacity: 0.26,
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
      </Box>
    </ThemeProvider>
  );
}
