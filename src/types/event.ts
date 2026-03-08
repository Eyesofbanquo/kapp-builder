import type { Dayjs } from 'dayjs';

export interface SelectedLocation {
  lat: number;
  lng: number;
  address: string;
}

export interface EventFormState {
  title: string;
  description: string;
  date: Dayjs | null;
  time: Dayjs | null;
  location: SelectedLocation | null;
}
