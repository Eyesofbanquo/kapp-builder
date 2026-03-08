import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import dayjs from 'dayjs';
import type { Event } from '../types/event';
import type { EventFormState } from '../types/event';

interface EventRepositoryContextValue {
  events: Event[];
  addEvent: (formState: EventFormState) => void;
  updateEvent: (id: string, formState: EventFormState) => void;
  deleteEvent: (id: string) => void;
}

const EventRepositoryContext = createContext<EventRepositoryContextValue | null>(null);

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Spring Workshop',
    description: 'An intro workshop on seasonal gardening techniques.',
    date: dayjs('2025-03-15'),
    time: dayjs().hour(15).minute(0),
    location: null,
  },
  {
    id: '2',
    title: 'Community Run',
    description: 'Monthly 5K run through Riverside Park.',
    date: dayjs('2025-03-22'),
    time: dayjs().hour(8).minute(30),
    location: null,
  },
  {
    id: '3',
    title: 'Art Exhibition Opening',
    description: 'Opening night for the spring collection at the downtown gallery.',
    date: dayjs('2025-04-05'),
    time: dayjs().hour(18).minute(0),
    location: null,
  },
];

export function EventRepositoryProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);

  const addEvent = (formState: EventFormState) => {
    const newEvent: Event = { ...formState, id: crypto.randomUUID() };
    setEvents((previous) => [...previous, newEvent]);
  };

  const updateEvent = (id: string, formState: EventFormState) => {
    setEvents((previous) =>
      previous.map((event) => (event.id === id ? { ...formState, id } : event))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((previous) => previous.filter((event) => event.id !== id));
  };

  return (
    <EventRepositoryContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventRepositoryContext.Provider>
  );
}

export function useEventRepository(): EventRepositoryContextValue {
  const context = useContext(EventRepositoryContext);
  if (!context) throw new Error('useEventRepository must be used within EventRepositoryProvider');
  return context;
}
