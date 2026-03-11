import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { publicAppPalette, publicAppTheme } from '../theme/publicAppTheme';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export default function PublicAppLayout(props: Props) {
  void props;

  return (
    <ThemeProvider theme={publicAppTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
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
          <Box
            sx={{
              position: 'absolute',
              inset: '12% 8%',
              border: '1px solid rgba(35, 27, 27, 0.08)',
              borderRadius: '32px',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 'calc(env(safe-area-inset-top) + 24px)',
            paddingRight: { xs: '16px', sm: '32px' },
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 24px)',
            paddingLeft: { xs: '16px', sm: '32px' },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
