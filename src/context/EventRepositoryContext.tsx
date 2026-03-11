/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import dayjs from 'dayjs';
import type { Event } from '../types/event';
import type { EventFormState } from '../types/event';

interface EventRepositoryContextValue {
  events: Event[];
  addEvent: (formState: EventFormState) => string;
  updateEvent: (id: string, formState: EventFormState) => void;
  deleteEvent: (id: string) => void;
  lastCreatedEventId: string | null;
  clearLastCreatedEventId: () => void;
}

const EventRepositoryContext = createContext<EventRepositoryContextValue | null>(null);

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Spring Workshop',
    description: 'An intro workshop on seasonal gardening techniques.',
    date: dayjs('2025-03-15'),
    time: dayjs().hour(15).minute(0),
    locationId: null,
  },
  {
    id: '2',
    title: 'Community Run',
    description: 'Monthly 5K run through Riverside Park.',
    date: dayjs('2025-03-22'),
    time: dayjs().hour(8).minute(30),
    locationId: null,
  },
  {
    id: '3',
    title: 'Art Exhibition Opening',
    description: 'Opening night for the spring collection at the downtown gallery.',
    date: dayjs('2025-04-05'),
    time: dayjs().hour(18).minute(0),
    locationId: null,
  },
];

const IS_DEV = import.meta.env.VITE_APP_ENV === 'development';

function DevEventRepositoryProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);
  const [lastCreatedEventId, setLastCreatedEventId] = useState<string | null>(null);

  const addEvent = (formState: EventFormState): string => {
    const id = crypto.randomUUID();
    const newEvent: Event = { ...formState, id };
    setEvents((previous) => [...previous, newEvent]);
    setLastCreatedEventId(id);
    return id;
  };

  const clearLastCreatedEventId = () => setLastCreatedEventId(null);

  const updateEvent = (id: string, formState: EventFormState) => {
    setEvents((previous) =>
      previous.map((event) => (event.id === id ? { ...formState, id } : event))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((previous) => previous.filter((event) => event.id !== id));
  };

  return (
    <EventRepositoryContext.Provider value={{ events, addEvent, updateEvent, deleteEvent, lastCreatedEventId, clearLastCreatedEventId }}>
      {children}
    </EventRepositoryContext.Provider>
  );
}

function FirestoreEventRepositoryProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [lastCreatedEventId, setLastCreatedEventId] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    async function subscribe() {
      const { db } = await import('../firebase/config');
      const { EVENTS_COLLECTION } = await import('../firebase/collectionNames');
      const { collection, onSnapshot } = await import('firebase/firestore');

      unsubscribe = onSnapshot(collection(db, EVENTS_COLLECTION), (snapshot) => {
        const loaded: Event[] = snapshot.docs.map((document) => {
          const data = document.data();
          return {
            id: document.id,
            title: data.title as string,
            description: data.description as string,
            date: data.date ? dayjs(data.date as string) : null,
            time: data.time ? dayjs(data.time as string) : null,
            locationId: (data.locationId as string) ?? null,
          };
        });
        setEvents(loaded);
      });
    }

    subscribe();
    return () => unsubscribe?.();
  }, []);

  const addEvent = (formState: EventFormState): string => {
    const newId = crypto.randomUUID();

    async function persist() {
      const { db } = await import('../firebase/config');
      const { EVENTS_COLLECTION } = await import('../firebase/collectionNames');
      const { doc, setDoc } = await import('firebase/firestore');

      await setDoc(doc(db, EVENTS_COLLECTION, newId), {
        title: formState.title,
        description: formState.description,
        date: formState.date?.toISOString() ?? null,
        time: formState.time?.toISOString() ?? null,
        locationId: formState.locationId ?? null,
      });
    }

    persist();
    setLastCreatedEventId(newId);
    return newId;
  };

  const updateEvent = (id: string, formState: EventFormState) => {
    async function persist() {
      const { db } = await import('../firebase/config');
      const { EVENTS_COLLECTION } = await import('../firebase/collectionNames');
      const { doc, updateDoc } = await import('firebase/firestore');

      await updateDoc(doc(db, EVENTS_COLLECTION, id), {
        title: formState.title,
        description: formState.description,
        date: formState.date?.toISOString() ?? null,
        time: formState.time?.toISOString() ?? null,
        locationId: formState.locationId ?? null,
      });
    }

    persist();
  };

  const deleteEvent = (id: string) => {
    async function persist() {
      const { db } = await import('../firebase/config');
      const { EVENTS_COLLECTION } = await import('../firebase/collectionNames');
      const { doc, deleteDoc } = await import('firebase/firestore');

      await deleteDoc(doc(db, EVENTS_COLLECTION, id));
    }

    persist();
  };

  const clearLastCreatedEventId = () => setLastCreatedEventId(null);

  return (
    <EventRepositoryContext.Provider value={{ events, addEvent, updateEvent, deleteEvent, lastCreatedEventId, clearLastCreatedEventId }}>
      {children}
    </EventRepositoryContext.Provider>
  );
}

export function EventRepositoryProvider({ children }: { children: ReactNode }) {
  if (IS_DEV) {
    return <DevEventRepositoryProvider>{children}</DevEventRepositoryProvider>;
  }
  return <FirestoreEventRepositoryProvider>{children}</FirestoreEventRepositoryProvider>;
}

export function useEventRepository(): EventRepositoryContextValue {
  const context = useContext(EventRepositoryContext);
  if (!context) throw new Error('useEventRepository must be used within EventRepositoryProvider');
  return context;
}
