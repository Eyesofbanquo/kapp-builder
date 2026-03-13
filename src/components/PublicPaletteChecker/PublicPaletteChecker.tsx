import { useState } from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import PaletteModeButton from './PaletteModeButton';

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function PublicPaletteChecker() {
  const {
    activePalette,
    activePaletteMode,
    activePaletteName,
    paletteOptions,
    setActivePaletteMode,
    setActivePaletteName,
  } = usePublicPalette();
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <ButtonBase
        onClick={() => setIsMinimized(false)}
        sx={{
          position: 'fixed',
          zIndex: (theme) => theme.zIndex.tooltip,
          bottom: 'calc(env(safe-area-inset-bottom) + 16px)',
          left: { xs: '50%', sm: 'auto' },
          right: { xs: 'auto', sm: '24px' },
          transform: { xs: 'translateX(-50%)', sm: 'none' },
          minWidth: '172px',
          justifyContent: 'space-between',
          gap: 1.5,
          padding: '12px 14px',
          borderRadius: '999px',
          border: `1px solid ${activePalette.outline}`,
          backgroundColor: activePalette.surfaceContainerHigh,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: activePalette.onSurface,
            fontWeight: 700,
          }}
        >
          Palette checker
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.75 }}>
          {activePalette.swatchColors.map((swatchColor) => (
            <Box
              key={`${activePaletteMode}-${swatchColor}`}
              sx={{
                width: '12px',
                height: '12px',
                borderRadius: '999px',
                backgroundColor: swatchColor,
                border: `1px solid ${activePalette.outlineVariant}`,
              }}
            />
          ))}
        </Box>
      </ButtonBase>
    );
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: (theme) => theme.zIndex.tooltip,
        bottom: 'calc(env(safe-area-inset-bottom) + 16px)',
        left: { xs: '50%', sm: 'auto' },
        right: { xs: 'auto', sm: '24px' },
        transform: { xs: 'translateX(-50%)', sm: 'none' },
        width: { xs: 'calc(100% - 32px)', sm: '360px' },
        maxWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        padding: '14px',
        borderRadius: '22px',
        border: `1px solid ${activePalette.outline}`,
        backgroundColor: activePalette.surfaceContainerHigh,
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: activePalette.onSurfaceVariant,
            fontWeight: 700,
            letterSpacing: '0.16em',
          }}
        >
          Palette checker
        </Typography>
        <ButtonBase
          onClick={() => setIsMinimized(true)}
          sx={{
            borderRadius: '999px',
            padding: '6px 10px',
            color: activePalette.onSurfaceVariant,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            Minimize
          </Typography>
        </ButtonBase>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 1 }}>
        {(['light', 'dark'] as const).map((paletteMode) => (
          <PaletteModeButton
            key={paletteMode}
            isActive={paletteMode === activePaletteMode}
            mode={paletteMode}
            onSelect={setActivePaletteMode}
          />
        ))}
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 1 }}>
        {paletteOptions.map((paletteOption) => {
          const previewPalette = paletteOption[activePaletteMode];
          const isActive = paletteOption.name === activePaletteName;

          return (
            <ButtonBase
              key={paletteOption.name}
              onClick={() => setActivePaletteName(paletteOption.name)}
              sx={{
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                textAlign: 'left',
                borderRadius: '18px',
                border: `1px solid ${
                  isActive ? previewPalette.outline : activePalette.outlineVariant
                }`,
                backgroundColor: previewPalette.surfaceContainerLow,
                transition: 'transform 180ms ease, background-color 180ms ease',
                '&:hover': {
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.25,
                  padding: '12px',
                }}
              >
                <Box sx={{ display: 'flex', gap: 0.75 }}>
                  {previewPalette.swatchColors.map((swatchColor) => (
                    <Box
                      key={`${paletteOption.name}-${activePaletteMode}-${swatchColor}`}
                      sx={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '999px',
                        backgroundColor: swatchColor,
                        border: `1px solid ${previewPalette.outlineVariant}`,
                      }}
                    />
                  ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: previewPalette.onSurface,
                      fontWeight: 700,
                    }}
                  >
                    {paletteOption.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: previewPalette.onSurfaceVariant,
                      fontWeight: 500,
                    }}
                  >
                    {isActive ? `${capitalize(activePaletteMode)} active` : 'Tap to preview'}
                  </Typography>
                </Box>
              </Box>
            </ButtonBase>
          );
        })}
      </Box>
    </Box>
  );
}
