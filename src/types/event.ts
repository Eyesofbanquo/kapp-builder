import type { Dayjs } from 'dayjs';

export interface SelectedLocation {
  /** Unique identifier for this saved location */
  id: string;
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
  /** ID of a saved location, or null if none selected */
  locationId: string | null;
}

export interface Event extends EventFormState {
  /** Unique identifier for the stored event */
  id: string;
}
