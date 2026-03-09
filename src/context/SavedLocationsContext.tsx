import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { SelectedLocation } from '../types/event';

interface SavedLocationsContextValue {
  savedLocations: SelectedLocation[];
  addSavedLocation: (location: SelectedLocation) => void;
}

const SavedLocationsContext = createContext<SavedLocationsContextValue | null>(null);

export function SavedLocationsProvider({ children }: { children: ReactNode }) {
  const [savedLocations, setSavedLocations] = useState<SelectedLocation[]>([]);

  const addSavedLocation = (location: SelectedLocation) => {
    setSavedLocations((previous) => [...previous, location]);
  };

  return (
    <SavedLocationsContext.Provider value={{ savedLocations, addSavedLocation }}>
      {children}
    </SavedLocationsContext.Provider>
  );
}

export function useSavedLocations(): SavedLocationsContextValue {
  const context = useContext(SavedLocationsContext);
  if (!context) throw new Error('useSavedLocations must be used within SavedLocationsProvider');
  return context;
}
