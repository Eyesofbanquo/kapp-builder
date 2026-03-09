export interface PilatesClass {
  id: string;
  /** ID of the event this class is attached to */
  eventId: string;
  name: string;
  description: string;
  /** 1–5 or null if not yet rated */
  rating: number | null;
  /** Markdown text */
  notes: string;
}

export interface ClassFormState {
  name: string;
  description: string;
  rating: number | null;
  notes: string;
}
