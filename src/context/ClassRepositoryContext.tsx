import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { PilatesClass, ClassFormState } from '../types/class';

interface ClassRepositoryContextValue {
  classes: PilatesClass[];
  addClass: (eventId: string, formState: ClassFormState) => string;
  updateClass: (id: string, formState: ClassFormState & { eventId?: string }) => void;
  deleteClass: (id: string) => void;
}

const ClassRepositoryContext = createContext<ClassRepositoryContextValue | null>(null);

const IS_DEV = import.meta.env.VITE_APP_ENV === 'development';

function DevClassRepositoryProvider({ children }: { children: ReactNode }) {
  const [classes, setClasses] = useState<PilatesClass[]>([]);

  const addClass = (eventId: string, formState: ClassFormState): string => {
    const id = crypto.randomUUID();
    const newClass: PilatesClass = { ...formState, id, eventId };
    setClasses((previous) => [...previous, newClass]);
    return id;
  };

  const updateClass = (id: string, formState: ClassFormState & { eventId?: string }) => {
    setClasses((previous) =>
      previous.map((pilatesClass) =>
        pilatesClass.id === id
          ? { ...pilatesClass, ...formState, id }
          : pilatesClass
      )
    );
  };

  const deleteClass = (id: string) => {
    setClasses((previous) => previous.filter((pilatesClass) => pilatesClass.id !== id));
  };

  return (
    <ClassRepositoryContext.Provider value={{ classes, addClass, updateClass, deleteClass }}>
      {children}
    </ClassRepositoryContext.Provider>
  );
}

function FirestoreClassRepositoryProvider({ children }: { children: ReactNode }) {
  const [classes, setClasses] = useState<PilatesClass[]>([]);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    async function subscribe() {
      const { db } = await import('../firebase/config');
      const { CLASSES_COLLECTION } = await import('../firebase/collectionNames');
      const { collection, onSnapshot } = await import('firebase/firestore');

      unsubscribe = onSnapshot(collection(db, CLASSES_COLLECTION), (snapshot) => {
        const loaded: PilatesClass[] = snapshot.docs.map((document) => {
          const data = document.data();
          return {
            id: document.id,
            eventId: (data.eventId as string) ?? '',
            name: data.name as string,
            description: data.description as string,
            rating: data.rating != null ? (data.rating as number) : null,
            notes: (data.notes as string) ?? '',
          };
        });
        setClasses(loaded);
      });
    }

    subscribe();
    return () => unsubscribe?.();
  }, []);

  const addClass = (eventId: string, formState: ClassFormState): string => {
    const newId = crypto.randomUUID();

    async function persist() {
      const { db } = await import('../firebase/config');
      const { CLASSES_COLLECTION } = await import('../firebase/collectionNames');
      const { doc, setDoc } = await import('firebase/firestore');

      await setDoc(doc(db, CLASSES_COLLECTION, newId), {
        eventId,
        name: formState.name,
        description: formState.description,
        rating: formState.rating,
        notes: formState.notes,
      });
    }

    persist();
    return newId;
  };

  const updateClass = (id: string, formState: ClassFormState & { eventId?: string }) => {
    async function persist() {
      const { db } = await import('../firebase/config');
      const { CLASSES_COLLECTION } = await import('../firebase/collectionNames');
      const { doc, updateDoc } = await import('firebase/firestore');

      await updateDoc(doc(db, CLASSES_COLLECTION, id), {
        name: formState.name,
        description: formState.description,
        rating: formState.rating,
        notes: formState.notes,
        ...(formState.eventId !== undefined ? { eventId: formState.eventId } : {}),
      });
    }

    persist();
  };

  const deleteClass = (id: string) => {
    async function persist() {
      const { db } = await import('../firebase/config');
      const { CLASSES_COLLECTION } = await import('../firebase/collectionNames');
      const { doc, deleteDoc } = await import('firebase/firestore');

      await deleteDoc(doc(db, CLASSES_COLLECTION, id));
    }

    persist();
  };

  return (
    <ClassRepositoryContext.Provider value={{ classes, addClass, updateClass, deleteClass }}>
      {children}
    </ClassRepositoryContext.Provider>
  );
}

export function ClassRepositoryProvider({ children }: { children: ReactNode }) {
  if (IS_DEV) {
    return <DevClassRepositoryProvider>{children}</DevClassRepositoryProvider>;
  }
  return <FirestoreClassRepositoryProvider>{children}</FirestoreClassRepositoryProvider>;
}

export function useClassRepository(): ClassRepositoryContextValue {
  const context = useContext(ClassRepositoryContext);
  if (!context) throw new Error('useClassRepository must be used within ClassRepositoryProvider');
  return context;
}
