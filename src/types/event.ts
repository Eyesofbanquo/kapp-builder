import type { Dayjs } from 'dayjs';

export interface SelectedLocation {
  /** Place display name, e.g. "Central Park" */
  name: string;
  /** Formatted address string */
  address: string;
  lat: number;
  lng: number;
}

export interface EventFormState {
  title: string;
  description: string;
  date: Dayjs | null;
  time: Dayjs | null;
  location: SelectedLocation | null;
}

export interface Event extends EventFormState {
  /** Unique identifier for the stored event */
  id: string;
}
