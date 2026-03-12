import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { usePublicPalette } from '../context/PublicPaletteContext';

export default function NotFoundScreen() {
  const location = useLocation();
  const { activePalette } = usePublicPalette();

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 520,
          px: { xs: 3, sm: 5 },
          py: { xs: 4, sm: 5 },
          textAlign: 'center',
          borderRadius: '32px',
          background: `linear-gradient(180deg, ${activePalette.cardGradientStart} 0%, ${activePalette.cardGradientEnd} 100%)`,
          border: `1px solid ${activePalette.cardBorderColor}`,
          boxShadow: `0 24px 60px ${activePalette.cardShadowColor}`,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: activePalette.accentColor,
            fontWeight: 700,
            letterSpacing: '0.18em',
          }}
        >
          404
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Page not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          {location.pathname} does not exist yet.
        </Typography>
        <Button
          component={RouterLink}
          to="/"
          variant="contained"
          sx={{
            mt: 3,
            px: '24px',
            py: '12px',
            boxShadow: 'none',
          }}
        >
          Go home
        </Button>
      </Box>
    </Box>
  );
}
