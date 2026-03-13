import { Box, Button } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';

export default function HomePlaylistsCard() {
  const { activePalette } = usePublicPalette();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: { xs: '400px', sm: '420px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          px: { xs: 3, sm: 4.5 },
          py: { xs: 3, sm: 4 },
          borderRadius: { xs: '24px', sm: '32px' },
          background: `linear-gradient(180deg, ${activePalette.cardGradientStart} 0%, ${activePalette.accentColor}33 50%, ${activePalette.cardGradientEnd} 100%)`,
          border: `1px solid ${activePalette.cardBorderColor}`,
          backdropFilter: 'blur(14px)',
          boxShadow: `0 28px 80px ${activePalette.cardShadowColor}`,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: activePalette.buttonColor,
            color: activePalette.buttonTextColor,
            borderRadius: '16px',
            px: 4,
            py: 1.2,
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: activePalette.buttonColor,
              opacity: 0.9,
            },
          }}
        >
          Playlists
        </Button>
      </Box>
    </Box>
  );
}
