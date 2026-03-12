export type PublicPaletteName = 'pinkify' | 'sunwash';

export type PublicPaletteMode = 'light' | 'dark';

export interface PublicPaletteVariant {
  backgroundGradientStart: string;
  backgroundGradientMiddle: string;
  backgroundGradientEnd: string;
  blobPrimary: string;
  blobSecondary: string;
  cardGradientStart: string;
  cardGradientEnd: string;
  cardBorderColor: string;
  cardShadowColor: string;
  headingColor: string;
  logoColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  surfaceColor: string;
  buttonColor: string;
  buttonTextColor: string;
  accentColor: string;
  swatchColors: readonly [string, string, string];
}

export interface PublicPaletteDefinition {
  name: PublicPaletteName;
  label: string;
  light: PublicPaletteVariant;
  dark: PublicPaletteVariant;
}
