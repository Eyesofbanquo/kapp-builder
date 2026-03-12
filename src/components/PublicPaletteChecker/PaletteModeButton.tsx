import { ButtonBase, Typography } from '@mui/material';
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
  const label = mode === 'dark' ? 'Dark mode' : 'Light mode';

  return (
    <ButtonBase
      onClick={() => onSelect(mode)}
      sx={{
        justifyContent: 'center',
        borderRadius: '16px',
        border: `1px solid ${
          isActive ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.08)'
        }`,
        backgroundColor:
          mode === 'dark'
            ? isActive
              ? 'rgba(24, 22, 28, 0.92)'
              : 'rgba(24, 22, 28, 0.78)'
            : isActive
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(255, 255, 255, 0.62)',
        padding: '12px',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color:
            mode === 'dark'
              ? 'rgba(250, 253, 246, 0.96)'
              : 'rgba(35, 27, 27, 0.92)',
          fontWeight: 700,
        }}
      >
        {label}
      </Typography>
    </ButtonBase>
  );
}
