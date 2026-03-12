/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  defaultPublicPaletteMode,
  defaultPublicPaletteName,
  getPublicPaletteVariant,
  isPublicPaletteMode,
  isPublicPaletteName,
  publicPaletteOptions,
} from '../theme/publicAppTheme';
import type {
  PublicPaletteDefinition,
  PublicPaletteMode,
  PublicPaletteName,
  PublicPaletteVariant,
} from '../types/publicPalette';

const PUBLIC_PALETTE_STORAGE_KEY = 'public-app-palette-name';
const PUBLIC_PALETTE_MODE_STORAGE_KEY = 'public-app-palette-mode';

interface Props {
  /** Nested public-app content that should receive palette state. */
  children: ReactNode;
}

interface PublicPaletteContextValue {
  activePalette: PublicPaletteVariant;
  activePaletteMode: PublicPaletteMode;
  activePaletteName: PublicPaletteName;
  paletteOptions: readonly PublicPaletteDefinition[];
  setActivePaletteMode: (paletteMode: PublicPaletteMode) => void;
  setActivePaletteName: (paletteName: PublicPaletteName) => void;
}

const PublicPaletteContext = createContext<PublicPaletteContextValue | null>(null);

function readStoredPublicPaletteName(): PublicPaletteName {
  if (typeof window === 'undefined') {
    return defaultPublicPaletteName;
  }

  const storageValue = window.localStorage.getItem(PUBLIC_PALETTE_STORAGE_KEY);
  if (storageValue && isPublicPaletteName(storageValue)) {
    return storageValue;
  }

  return defaultPublicPaletteName;
}

function readStoredPublicPaletteMode(): PublicPaletteMode {
  if (typeof window === 'undefined') {
    return defaultPublicPaletteMode;
  }

  const storageValue = window.localStorage.getItem(PUBLIC_PALETTE_MODE_STORAGE_KEY);
  if (storageValue && isPublicPaletteMode(storageValue)) {
    return storageValue;
  }

  return defaultPublicPaletteMode;
}

export function PublicPaletteProvider({ children }: Props) {
  const [activePaletteName, setActivePaletteName] = useState<PublicPaletteName>(
    readStoredPublicPaletteName
  );
  const [activePaletteMode, setActivePaletteMode] = useState<PublicPaletteMode>(
    readStoredPublicPaletteMode
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(PUBLIC_PALETTE_STORAGE_KEY, activePaletteName);
    }
  }, [activePaletteName]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(PUBLIC_PALETTE_MODE_STORAGE_KEY, activePaletteMode);
    }
  }, [activePaletteMode]);

  const activePalette = getPublicPaletteVariant(activePaletteName, activePaletteMode);

  return (
    <PublicPaletteContext.Provider
      value={{
        activePalette,
        activePaletteMode,
        activePaletteName,
        paletteOptions: publicPaletteOptions,
        setActivePaletteMode,
        setActivePaletteName,
      }}
    >
      {children}
    </PublicPaletteContext.Provider>
  );
}

export function usePublicPalette(): PublicPaletteContextValue {
  const publicPaletteContext = useContext(PublicPaletteContext);
  if (!publicPaletteContext) {
    throw new Error('usePublicPalette must be used within PublicPaletteProvider');
  }

  return publicPaletteContext;
}
