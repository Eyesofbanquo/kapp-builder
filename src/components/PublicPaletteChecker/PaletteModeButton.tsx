import { ButtonBase, Typography } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import type { PublicPaletteMode } from '../../types/publicPalette';

interface Props {
  /** Whether this mode is currently selected. */
  isActive: boolean;
  /** The palette mode represented by the button. */
  mode: PublicPaletteMode;
  /** Callback used when the mode is selected. */
  onSelect: (paletteMode: PublicPaletteMode) => void;
}

export default function PaletteModeButton({ isActive, mode, onSelect }: Props) {
  const { activePalette } = usePublicPalette();
  const label = mode === 'dark' ? 'Dark mode' : 'Light mode';

  return (
    <ButtonBase
      onClick={() => onSelect(mode)}
      sx={{
        justifyContent: 'center',
        borderRadius: '16px',
        border: `1px solid ${isActive ? activePalette.outline : activePalette.outlineVariant}`,
        backgroundColor: isActive
          ? activePalette.surfaceContainerHigh
          : activePalette.surfaceContainerLow,
        padding: '12px',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: activePalette.onSurface,
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>
    </ButtonBase>
  );
}
