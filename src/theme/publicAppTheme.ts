import { alpha, createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type {
  PublicPaletteDefinition,
  PublicPaletteMode,
  PublicPaletteName,
  PublicPaletteVariant,
} from '../types/publicPalette';

export const defaultPublicPaletteName: PublicPaletteName = 'pinkify';
export const defaultPublicPaletteMode: PublicPaletteMode = 'light';

export const publicPaletteCollection: Record<PublicPaletteName, PublicPaletteDefinition> = {
  pinkify: {
    name: 'pinkify',
    label: 'Pinkify',
    light: {
      backgroundGradientStart: '#DDFFF7',
      backgroundGradientMiddle: '#FFD2FC',
      backgroundGradientEnd: '#FFFFFF',
      blobPrimary: '#E980FC',
      blobSecondary: '#B96AC9',
      cardGradientStart: 'rgba(255, 255, 255, 0.88)',
      cardGradientEnd: 'rgba(255, 210, 252, 0.6)',
      cardBorderColor: 'rgba(35, 27, 27, 0.08)',
      cardShadowColor: 'rgba(35, 27, 27, 0.12)',
      headingColor: '#40283F',
      logoColor: '#B96AC9',
      primaryTextColor: '#231B1B',
      secondaryTextColor: 'rgba(35, 27, 27, 0.72)',
      surfaceColor: '#FFFFFF',
      buttonColor: '#B96AC9',
      buttonTextColor: '#231B1B',
      accentColor: '#E980FC',
      swatchColors: ['#DDFFF7', '#E980FC', '#B96AC9'],
    },
    dark: {
      backgroundGradientStart: '#231B1B',
      backgroundGradientMiddle: '#3A2436',
      backgroundGradientEnd: '#120D0D',
      blobPrimary: '#E980FC',
      blobSecondary: '#FFD2FC',
      cardGradientStart: 'rgba(50, 34, 49, 0.92)',
      cardGradientEnd: 'rgba(35, 27, 27, 0.94)',
      cardBorderColor: 'rgba(255, 210, 252, 0.12)',
      cardShadowColor: 'rgba(0, 0, 0, 0.34)',
      headingColor: '#FFD2FC',
      logoColor: '#DDFFF7',
      primaryTextColor: '#FFF7FC',
      secondaryTextColor: 'rgba(255, 247, 252, 0.74)',
      surfaceColor: '#322231',
      buttonColor: '#DDFFF7',
      buttonTextColor: '#231B1B',
      accentColor: '#E980FC',
      swatchColors: ['#231B1B', '#FFD2FC', '#DDFFF7'],
    },
  },
  sunwash: {
    name: 'sunwash',
    label: 'Sunwash',
    light: {
      backgroundGradientStart: '#FAFDF6',
      backgroundGradientMiddle: '#EEEFA8',
      backgroundGradientEnd: '#FFFFFF',
      blobPrimary: '#EAE151',
      blobSecondary: '#DDD92A',
      cardGradientStart: 'rgba(250, 253, 246, 0.94)',
      cardGradientEnd: 'rgba(238, 239, 168, 0.72)',
      cardBorderColor: 'rgba(45, 42, 50, 0.1)',
      cardShadowColor: 'rgba(45, 42, 50, 0.14)',
      headingColor: '#2D2A32',
      logoColor: '#2D2A32',
      primaryTextColor: '#2D2A32',
      secondaryTextColor: 'rgba(45, 42, 50, 0.72)',
      surfaceColor: '#FAFDF6',
      buttonColor: '#2D2A32',
      buttonTextColor: '#FAFDF6',
      accentColor: '#DDD92A',
      swatchColors: ['#FAFDF6', '#DDD92A', '#2D2A32'],
    },
    dark: {
      backgroundGradientStart: '#17161A',
      backgroundGradientMiddle: '#2D2A32',
      backgroundGradientEnd: '#0E0D10',
      blobPrimary: '#DDD92A',
      blobSecondary: '#EAE151',
      cardGradientStart: 'rgba(42, 39, 46, 0.95)',
      cardGradientEnd: 'rgba(23, 22, 26, 0.96)',
      cardBorderColor: 'rgba(234, 225, 81, 0.14)',
      cardShadowColor: 'rgba(0, 0, 0, 0.36)',
      headingColor: '#EEEFA8',
      logoColor: '#FAFDF6',
      primaryTextColor: '#FAFDF6',
      secondaryTextColor: 'rgba(250, 253, 246, 0.74)',
      surfaceColor: '#2D2A32',
      buttonColor: '#EEEFA8',
      buttonTextColor: '#17161A',
      accentColor: '#DDD92A',
      swatchColors: ['#2D2A32', '#DDD92A', '#FAFDF6'],
    },
  },
  tidefire: {
    name: 'tidefire',
    label: 'Tidefire',
    light: {
      backgroundGradientStart: '#FFFFFF',
      backgroundGradientMiddle: '#CDD7D6',
      backgroundGradientEnd: '#F8FBFB',
      blobPrimary: '#F87060',
      blobSecondary: '#102542',
      cardGradientStart: 'rgba(255, 255, 255, 0.95)',
      cardGradientEnd: 'rgba(205, 215, 214, 0.78)',
      cardBorderColor: 'rgba(16, 37, 66, 0.1)',
      cardShadowColor: 'rgba(16, 37, 66, 0.14)',
      headingColor: '#102542',
      logoColor: '#F87060',
      primaryTextColor: '#102542',
      secondaryTextColor: 'rgba(16, 37, 66, 0.72)',
      surfaceColor: '#FFFFFF',
      buttonColor: '#102542',
      buttonTextColor: '#FFFFFF',
      accentColor: '#F87060',
      swatchColors: ['#102542', '#F87060', '#CDD7D6'],
    },
    dark: {
      backgroundGradientStart: '#071221',
      backgroundGradientMiddle: '#102542',
      backgroundGradientEnd: '#03070D',
      blobPrimary: '#F87060',
      blobSecondary: '#CDD7D6',
      cardGradientStart: 'rgba(24, 44, 72, 0.96)',
      cardGradientEnd: 'rgba(7, 18, 33, 0.98)',
      cardBorderColor: 'rgba(205, 215, 214, 0.14)',
      cardShadowColor: 'rgba(0, 0, 0, 0.38)',
      headingColor: '#FFFFFF',
      logoColor: '#F87060',
      primaryTextColor: '#FFFFFF',
      secondaryTextColor: 'rgba(255, 255, 255, 0.74)',
      surfaceColor: '#102542',
      buttonColor: '#F87060',
      buttonTextColor: '#102542',
      accentColor: '#CDD7D6',
      swatchColors: ['#102542', '#F87060', '#FFFFFF'],
    },
  },
  rosemist: {
    name: 'rosemist',
    label: 'Rose Mist',
    light: {
      backgroundGradientStart: '#F1E4F3',
      backgroundGradientMiddle: '#F4BBD3',
      backgroundGradientEnd: '#FFFFFF',
      blobPrimary: '#FE5D9F',
      blobSecondary: '#F686BD',
      cardGradientStart: 'rgba(255, 255, 255, 0.92)',
      cardGradientEnd: 'rgba(244, 187, 211, 0.65)',
      cardBorderColor: 'rgba(80, 50, 65, 0.08)',
      cardShadowColor: 'rgba(80, 50, 65, 0.12)',
      headingColor: '#4A2038',
      logoColor: '#FE5D9F',
      primaryTextColor: '#3A1A2E',
      secondaryTextColor: 'rgba(58, 26, 46, 0.72)',
      surfaceColor: '#F1E4F3',
      buttonColor: '#FE5D9F',
      buttonTextColor: '#FFFFFF',
      accentColor: '#F686BD',
      swatchColors: ['#F1E4F3', '#F686BD', '#FE5D9F'],
    },
    dark: {
      backgroundGradientStart: '#1E0F18',
      backgroundGradientMiddle: '#3A1A2E',
      backgroundGradientEnd: '#0F070C',
      blobPrimary: '#FE5D9F',
      blobSecondary: '#F4BBD3',
      cardGradientStart: 'rgba(62, 30, 50, 0.95)',
      cardGradientEnd: 'rgba(30, 15, 24, 0.97)',
      cardBorderColor: 'rgba(244, 187, 211, 0.14)',
      cardShadowColor: 'rgba(0, 0, 0, 0.36)',
      headingColor: '#F4BBD3',
      logoColor: '#FE5D9F',
      primaryTextColor: '#F1E4F3',
      secondaryTextColor: 'rgba(241, 228, 243, 0.74)',
      surfaceColor: '#3A1A2E',
      buttonColor: '#FE5D9F',
      buttonTextColor: '#1E0F18',
      accentColor: '#F686BD',
      swatchColors: ['#3A1A2E', '#FE5D9F', '#F4BBD3'],
    },
  },
  jadecove: {
    name: 'jadecove',
    label: 'Jade Cove',
    light: {
      backgroundGradientStart: '#E8F5F0',
      backgroundGradientMiddle: '#B8E6D0',
      backgroundGradientEnd: '#FFFFFF',
      blobPrimary: '#2BD9FE',
      blobSecondary: '#52AA5E',
      cardGradientStart: 'rgba(255, 255, 255, 0.92)',
      cardGradientEnd: 'rgba(82, 170, 138, 0.55)',
      cardBorderColor: 'rgba(26, 58, 42, 0.08)',
      cardShadowColor: 'rgba(26, 58, 42, 0.12)',
      headingColor: '#1A3A2A',
      logoColor: '#3AAED8',
      primaryTextColor: '#1A3A2A',
      secondaryTextColor: 'rgba(26, 58, 42, 0.72)',
      surfaceColor: '#E8F5F0',
      buttonColor: '#388659',
      buttonTextColor: '#FFFFFF',
      accentColor: '#2BD9FE',
      swatchColors: ['#388659', '#52AA8A', '#2BD9FE'],
    },
    dark: {
      backgroundGradientStart: '#0D1F17',
      backgroundGradientMiddle: '#1A3A2A',
      backgroundGradientEnd: '#060F0B',
      blobPrimary: '#2BD9FE',
      blobSecondary: '#52AA8A',
      cardGradientStart: 'rgba(30, 62, 48, 0.95)',
      cardGradientEnd: 'rgba(13, 31, 23, 0.97)',
      cardBorderColor: 'rgba(43, 217, 254, 0.14)',
      cardShadowColor: 'rgba(0, 0, 0, 0.36)',
      headingColor: '#B8E6D0',
      logoColor: '#2BD9FE',
      primaryTextColor: '#E8F5F0',
      secondaryTextColor: 'rgba(232, 245, 240, 0.74)',
      surfaceColor: '#1A3A2A',
      buttonColor: '#2BD9FE',
      buttonTextColor: '#0D1F17',
      accentColor: '#52AA8A',
      swatchColors: ['#1A3A2A', '#52AA8A', '#2BD9FE'],
    },
  },
  dawnbloom: {
    name: 'dawnbloom',
    label: 'Dawn Bloom',
    light: {
      backgroundGradientStart: '#F0E6DA',
      backgroundGradientMiddle: '#E8D4C4',
      backgroundGradientEnd: '#FFFFFF',
      blobPrimary: '#C27C6B',
      blobSecondary: '#C9A0B8',
      cardGradientStart: 'rgba(255, 255, 255, 0.92)',
      cardGradientEnd: 'rgba(201, 160, 184, 0.5)',
      cardBorderColor: 'rgba(60, 45, 35, 0.08)',
      cardShadowColor: 'rgba(60, 45, 35, 0.12)',
      headingColor: '#3C2D23',
      logoColor: '#C27C6B',
      primaryTextColor: '#3C2D23',
      secondaryTextColor: 'rgba(60, 45, 35, 0.72)',
      surfaceColor: '#F0E6DA',
      buttonColor: '#C27C6B',
      buttonTextColor: '#FFFFFF',
      accentColor: '#D4A07C',
      swatchColors: ['#A8B5A2', '#C27C6B', '#C9A0B8'],
    },
    dark: {
      backgroundGradientStart: '#1E1714',
      backgroundGradientMiddle: '#3C2D23',
      backgroundGradientEnd: '#0F0B09',
      blobPrimary: '#C27C6B',
      blobSecondary: '#D4A07C',
      cardGradientStart: 'rgba(65, 48, 38, 0.95)',
      cardGradientEnd: 'rgba(30, 23, 20, 0.97)',
      cardBorderColor: 'rgba(212, 160, 124, 0.14)',
      cardShadowColor: 'rgba(0, 0, 0, 0.36)',
      headingColor: '#E8D4C4',
      logoColor: '#C27C6B',
      primaryTextColor: '#F0E6DA',
      secondaryTextColor: 'rgba(240, 230, 218, 0.74)',
      surfaceColor: '#3C2D23',
      buttonColor: '#D4A07C',
      buttonTextColor: '#1E1714',
      accentColor: '#C9A0B8',
      swatchColors: ['#3C2D23', '#C27C6B', '#D4A07C'],
    },
  },
};

export const publicPaletteOptions: readonly PublicPaletteDefinition[] = [
  publicPaletteCollection.pinkify,
  publicPaletteCollection.sunwash,
  publicPaletteCollection.tidefire,
  publicPaletteCollection.rosemist,
  publicPaletteCollection.jadecove,
  publicPaletteCollection.dawnbloom,
];

const publicThemeCache: Partial<Record<`${PublicPaletteName}:${PublicPaletteMode}`, Theme>> = {};

export function isPublicPaletteName(storageValue: string): storageValue is PublicPaletteName {
  return storageValue in publicPaletteCollection;
}

export function isPublicPaletteMode(storageValue: string): storageValue is PublicPaletteMode {
  return storageValue === 'light' || storageValue === 'dark';
}

export function getPublicPaletteDefinition(
  paletteName: PublicPaletteName
): PublicPaletteDefinition {
  return publicPaletteCollection[paletteName];
}

export function getPublicPaletteVariant(
  paletteName: PublicPaletteName,
  paletteMode: PublicPaletteMode
): PublicPaletteVariant {
  return getPublicPaletteDefinition(paletteName)[paletteMode];
}

export function getPublicAppTheme(
  paletteName: PublicPaletteName,
  paletteMode: PublicPaletteMode
): Theme {
  const themeCacheKey = `${paletteName}:${paletteMode}` as const;
  const existingTheme = publicThemeCache[themeCacheKey];

  if (existingTheme) {
    return existingTheme;
  }

  const paletteVariant = getPublicPaletteVariant(paletteName, paletteMode);
  const publicTheme = createTheme({
    palette: {
      mode: paletteMode,
      primary: {
        main: paletteVariant.buttonColor,
        contrastText: paletteVariant.buttonTextColor,
      },
      secondary: {
        main: paletteVariant.accentColor,
        contrastText: paletteVariant.primaryTextColor,
      },
      background: {
        default: paletteVariant.backgroundGradientStart,
        paper: alpha(paletteVariant.surfaceColor, paletteMode === 'dark' ? 0.94 : 0.88),
      },
      text: {
        primary: paletteVariant.primaryTextColor,
        secondary: paletteVariant.secondaryTextColor,
      },
      divider: alpha(paletteVariant.primaryTextColor, paletteMode === 'dark' ? 0.18 : 0.1),
    },
    shape: {
      borderRadius: 24,
    },
    typography: {
      fontFamily: '"Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif',
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.04em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.04em',
      },
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.03em',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.01em',
      },
    },
  });

  publicThemeCache[themeCacheKey] = publicTheme;
  return publicTheme;
}
