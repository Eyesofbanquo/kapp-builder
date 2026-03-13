import { createTheme } from '@mui/material/styles';
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
      background: '#FFF7FC',
      surfaceTint: '#FDF0FA',
      surface: '#FFFFFF',
      surfaceContainerLow: '#FBF3F9',
      surfaceContainerHigh: '#F5EBF3',
      outline: '#C4B0C1',
      outlineVariant: '#E3D5E0',
      onSurface: '#231B1B',
      onSurfaceVariant: '#6B5568',
      primary: '#B96AC9',
      onPrimary: '#FFFFFF',
      primaryContainer: '#F5D9FB',
      onPrimaryContainer: '#5C2569',
      secondary: '#E980FC',
      onSecondary: '#FFFFFF',
      swatchColors: ['#DDFFF7', '#E980FC', '#B96AC9'],
    },
    dark: {
      background: '#1A1318',
      surfaceTint: '#211A20',
      surface: '#2A2129',
      surfaceContainerLow: '#241C23',
      surfaceContainerHigh: '#322831',
      outline: '#8E7B8B',
      outlineVariant: '#4A3D49',
      onSurface: '#F5EBF3',
      onSurfaceVariant: '#C9BAC6',
      primary: '#DDFFF7',
      onPrimary: '#231B1B',
      primaryContainer: '#4A2850',
      onPrimaryContainer: '#F5D9FB',
      secondary: '#E980FC',
      onSecondary: '#3A1A2E',
      swatchColors: ['#231B1B', '#FFD2FC', '#DDFFF7'],
    },
  },
  sunwash: {
    name: 'sunwash',
    label: 'Sunwash',
    light: {
      background: '#FDFDF5',
      surfaceTint: '#F9F9ED',
      surface: '#FFFFFF',
      surfaceContainerLow: '#F8F8EE',
      surfaceContainerHigh: '#F2F2E6',
      outline: '#B8B6A0',
      outlineVariant: '#DDDBC8',
      onSurface: '#2D2A32',
      onSurfaceVariant: '#60604E',
      primary: '#2D2A32',
      onPrimary: '#FAFDF6',
      primaryContainer: '#EEEFA8',
      onPrimaryContainer: '#2D2A32',
      secondary: '#DDD92A',
      onSecondary: '#2D2A32',
      swatchColors: ['#FAFDF6', '#DDD92A', '#2D2A32'],
    },
    dark: {
      background: '#14131A',
      surfaceTint: '#1C1B22',
      surface: '#242228',
      surfaceContainerLow: '#1E1C24',
      surfaceContainerHigh: '#2E2C34',
      outline: '#8A8880',
      outlineVariant: '#464444',
      onSurface: '#F2F2E6',
      onSurfaceVariant: '#C4C2B6',
      primary: '#EEEFA8',
      onPrimary: '#17161A',
      primaryContainer: '#3A3828',
      onPrimaryContainer: '#EEEFA8',
      secondary: '#DDD92A',
      onSecondary: '#2D2A32',
      swatchColors: ['#2D2A32', '#DDD92A', '#FAFDF6'],
    },
  },
  tidefire: {
    name: 'tidefire',
    label: 'Tidefire',
    light: {
      background: '#F8FBFB',
      surfaceTint: '#F0F5F4',
      surface: '#FFFFFF',
      surfaceContainerLow: '#F2F7F6',
      surfaceContainerHigh: '#E8EFEE',
      outline: '#A0B2B0',
      outlineVariant: '#CDD7D6',
      onSurface: '#102542',
      onSurfaceVariant: '#4A5E6E',
      primary: '#102542',
      onPrimary: '#FFFFFF',
      primaryContainer: '#D2E0F0',
      onPrimaryContainer: '#102542',
      secondary: '#F87060',
      onSecondary: '#FFFFFF',
      swatchColors: ['#102542', '#F87060', '#CDD7D6'],
    },
    dark: {
      background: '#071221',
      surfaceTint: '#0D1A2E',
      surface: '#142236',
      surfaceContainerLow: '#101D30',
      surfaceContainerHigh: '#1E3048',
      outline: '#6A8098',
      outlineVariant: '#2E4460',
      onSurface: '#E8EFEE',
      onSurfaceVariant: '#A8BCC8',
      primary: '#F87060',
      onPrimary: '#102542',
      primaryContainer: '#2E1A18',
      onPrimaryContainer: '#F8B0A8',
      secondary: '#CDD7D6',
      onSecondary: '#102542',
      swatchColors: ['#102542', '#F87060', '#FFFFFF'],
    },
  },
  rosemist: {
    name: 'rosemist',
    label: 'Rose Mist',
    light: {
      background: '#FDF6F9',
      surfaceTint: '#F9EEF3',
      surface: '#FFFFFF',
      surfaceContainerLow: '#F9F0F5',
      surfaceContainerHigh: '#F2E6ED',
      outline: '#C4A8B6',
      outlineVariant: '#E0CDD8',
      onSurface: '#3A1A2E',
      onSurfaceVariant: '#6B4D5E',
      primary: '#FE5D9F',
      onPrimary: '#FFFFFF',
      primaryContainer: '#FFD9E8',
      onPrimaryContainer: '#6E1A42',
      secondary: '#F686BD',
      onSecondary: '#FFFFFF',
      swatchColors: ['#F1E4F3', '#F686BD', '#FE5D9F'],
    },
    dark: {
      background: '#1A0F16',
      surfaceTint: '#22161E',
      surface: '#2C1E28',
      surfaceContainerLow: '#261820',
      surfaceContainerHigh: '#38282F',
      outline: '#8E6E7E',
      outlineVariant: '#4A3442',
      onSurface: '#F2E6ED',
      onSurfaceVariant: '#C9B0BE',
      primary: '#FE5D9F',
      onPrimary: '#1E0F18',
      primaryContainer: '#5A1838',
      onPrimaryContainer: '#FFD9E8',
      secondary: '#F686BD',
      onSecondary: '#3A1A2E',
      swatchColors: ['#3A1A2E', '#FE5D9F', '#F4BBD3'],
    },
  },
  jadecove: {
    name: 'jadecove',
    label: 'Jade Cove',
    light: {
      background: '#F4FAF7',
      surfaceTint: '#EAF5EF',
      surface: '#FFFFFF',
      surfaceContainerLow: '#EEF7F2',
      surfaceContainerHigh: '#E2F0EA',
      outline: '#8EB8A4',
      outlineVariant: '#C2D9CE',
      onSurface: '#1A3A2A',
      onSurfaceVariant: '#476556',
      primary: '#388659',
      onPrimary: '#FFFFFF',
      primaryContainer: '#C4E8D4',
      onPrimaryContainer: '#1A4030',
      secondary: '#2BD9FE',
      onSecondary: '#0D1F17',
      swatchColors: ['#388659', '#52AA8A', '#2BD9FE'],
    },
    dark: {
      background: '#0D1A14',
      surfaceTint: '#14221C',
      surface: '#1C2E26',
      surfaceContainerLow: '#18281F',
      surfaceContainerHigh: '#243830',
      outline: '#5E8A76',
      outlineVariant: '#2E4E40',
      onSurface: '#E2F0EA',
      onSurfaceVariant: '#A4C8B8',
      primary: '#2BD9FE',
      onPrimary: '#0D1F17',
      primaryContainer: '#1A4430',
      onPrimaryContainer: '#C4E8D4',
      secondary: '#52AA8A',
      onSecondary: '#0D1F17',
      swatchColors: ['#1A3A2A', '#52AA8A', '#2BD9FE'],
    },
  },
  dawnbloom: {
    name: 'dawnbloom',
    label: 'Dawn Bloom',
    light: {
      background: '#FBF7F3',
      surfaceTint: '#F5EFEA',
      surface: '#FFFFFF',
      surfaceContainerLow: '#F7F1EC',
      surfaceContainerHigh: '#F0E8E2',
      outline: '#BCA898',
      outlineVariant: '#DDD0C6',
      onSurface: '#3C2D23',
      onSurfaceVariant: '#6B5848',
      primary: '#C27C6B',
      onPrimary: '#FFFFFF',
      primaryContainer: '#F0D8CE',
      onPrimaryContainer: '#5C2E20',
      secondary: '#D4A07C',
      onSecondary: '#FFFFFF',
      swatchColors: ['#A8B5A2', '#C27C6B', '#C9A0B8'],
    },
    dark: {
      background: '#1A1412',
      surfaceTint: '#221C18',
      surface: '#2C2420',
      surfaceContainerLow: '#26201C',
      surfaceContainerHigh: '#382E28',
      outline: '#8E7868',
      outlineVariant: '#4A3E36',
      onSurface: '#F0E8E2',
      onSurfaceVariant: '#C9B8AA',
      primary: '#D4A07C',
      onPrimary: '#1E1714',
      primaryContainer: '#4A2E20',
      onPrimaryContainer: '#F0D8CE',
      secondary: '#C9A0B8',
      onSecondary: '#1E1714',
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
        main: paletteVariant.primary,
        contrastText: paletteVariant.onPrimary,
      },
      secondary: {
        main: paletteVariant.secondary,
        contrastText: paletteVariant.onSecondary,
      },
      background: {
        default: paletteVariant.background,
        paper: paletteVariant.surface,
      },
      text: {
        primary: paletteVariant.onSurface,
        secondary: paletteVariant.onSurfaceVariant,
      },
      divider: paletteVariant.outlineVariant,
    },
    shape: {
      borderRadius: 16,
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
