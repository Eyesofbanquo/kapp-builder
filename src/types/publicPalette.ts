export type PublicPaletteName = 'pinkify' | 'sunwash' | 'tidefire' | 'rosemist' | 'jadecove' | 'dawnbloom';

export type PublicPaletteMode = 'light' | 'dark';

export interface PublicPaletteVariant {
  /** Page background color */
  background: string;
  /** Subtle tonal shift layer overlaid on background */
  surfaceTint: string;
  /** Cards and sheets fill color */
  surface: string;
  /** Subtle card fill */
  surfaceContainerLow: string;
  /** Elevated card fill and hover state */
  surfaceContainerHigh: string;
  /** Card borders and dividers */
  outline: string;
  /** Subtler borders */
  outlineVariant: string;
  /** Primary text color */
  onSurface: string;
  /** Secondary text color */
  onSurfaceVariant: string;
  /** Buttons, logo, and active elements */
  primary: string;
  /** Text on primary colored elements */
  onPrimary: string;
  /** Tonal fills for chips and containers */
  primaryContainer: string;
  /** Text on primaryContainer elements */
  onPrimaryContainer: string;
  /** Accent color for secondary elements */
  secondary: string;
  /** Text on secondary colored elements */
  onSecondary: string;
  /** Three representative swatch colors for the palette */
  swatchColors: readonly [string, string, string];
}

export interface PublicPaletteDefinition {
  name: PublicPaletteName;
  label: string;
  light: PublicPaletteVariant;
  dark: PublicPaletteVariant;
}
