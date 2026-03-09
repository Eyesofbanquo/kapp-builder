import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { SelectedLocation } from '../types/event';

interface SavedLocationsContextValue {
  savedLocations: SelectedLocation[];
  addSavedLocation: (location: SelectedLocation) => void;
  updateSavedLocation: (id: string, updated: SelectedLocation) => void;
  deleteSavedLocation: (id: string) => void;
}

const SavedLocationsContext = createContext<SavedLocationsContextValue | null>(null);

const IS_DEV = import.meta.env.VITE_APP_ENV === 'development';

function DevSavedLocationsProvider({ children }: { children: ReactNode }) {
  const [savedLocations, setSavedLocations] = useState<SelectedLocation[]>([]);

  const addSavedLocation = (location: SelectedLocation) => {
    const withId: SelectedLocation = { ...location, id: location.id || crypto.randomUUID() };
    setSavedLocations((previous) => [...previous, withId]);
  };

  const updateSavedLocation = (id: string, updated: SelectedLocation) => {
    setSavedLocations((previous) =>
      previous.map((location) => (location.id === id ? { ...updated, id } : location))
    );
  };

  const deleteSavedLocation = (id: string) => {
    setSavedLocations((previous) => previous.filter((location) => location.id !== id));
  };

  return (
    <SavedLocationsContext.Provider value={{ savedLocations, addSavedLocation, updateSavedLocation, deleteSavedLocation }}>
      {children}
    </SavedLocationsContext.Provider>
  );
}

function FirestoreSavedLocationsProvider({ children }: { children: ReactNode }) {
  const [savedLocations, setSavedLocations] = useState<SelectedLocation[]>([]);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    async function subscribe() {
      const { db } = await import('../firebase/config');
      const { SAVED_LOCATIONS_COLLECTION } = await import('../firebase/collectionNames');
      const { collection, onSnapshot } = await import('firebase/firestore');

      unsubscribe = onSnapshot(collection(db, SAVED_LOCATIONS_COLLECTION), (snapshot) => {
        const loaded: SelectedLocation[] = snapshot.docs.map((document) => {
          const data = document.data();
          return {
            id: (data.id as string) ?? document.id,
            name: data.name as string,
            address: data.address as string,
            lat: data.lat as number,
            lng: data.lng as number,
          };
        });
        setSavedLocations(loaded);
      });
    }

    subscribe();
    return () => unsubscribe?.();
  }, []);

  const addSavedLocation = (location: SelectedLocation) => {
    const withId: SelectedLocation = { ...location, id: location.id || crypto.randomUUID() };

    async function persist() {
      const { db } = await import('../firebase/config');
      const { SAVED_LOCATIONS_COLLECTION } = await import('../firebase/collectionNames');
      const { collection, addDoc } = await import('firebase/firestore');

      await addDoc(collection(db, SAVED_LOCATIONS_COLLECTION), withId);
    }

    persist();
  };

  const updateSavedLocation = (id: string, updated: SelectedLocation) => {
    async function persist() {
      const { db } = await import('../firebase/config');
      const { SAVED_LOCATIONS_COLLECTION } = await import('../firebase/collectionNames');
      const { collection, query, where, getDocs, updateDoc } = await import('firebase/firestore');

      const snapshot = await getDocs(
        query(collection(db, SAVED_LOCATIONS_COLLECTION), where('id', '==', id))
      );
      for (const document of snapshot.docs) {
        await updateDoc(document.ref, { ...updated, id });
      }
    }

    persist();
  };

  const deleteSavedLocation = (id: string) => {
    async function persist() {
      const { db } = await import('../firebase/config');
      const { SAVED_LOCATIONS_COLLECTION } = await import('../firebase/collectionNames');
      const { collection, query, where, getDocs, deleteDoc } = await import('firebase/firestore');

      const snapshot = await getDocs(
        query(collection(db, SAVED_LOCATIONS_COLLECTION), where('id', '==', id))
      );
      for (const document of snapshot.docs) {
        await deleteDoc(document.ref);
      }
    }

    persist();
  };

  return (
    <SavedLocationsContext.Provider value={{ savedLocations, addSavedLocation, updateSavedLocation, deleteSavedLocation }}>
      {children}
    </SavedLocationsContext.Provider>
  );
}

export function SavedLocationsProvider({ children }: { children: ReactNode }) {
  if (IS_DEV) {
    return <DevSavedLocationsProvider>{children}</DevSavedLocationsProvider>;
  }
  return <FirestoreSavedLocationsProvider>{children}</FirestoreSavedLocationsProvider>;
}

export function useSavedLocations(): SavedLocationsContextValue {
  const context = useContext(SavedLocationsContext);
  if (!context) throw new Error('useSavedLocations must be used within SavedLocationsProvider');
  return context;
}
