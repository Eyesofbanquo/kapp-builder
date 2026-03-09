const prefix = import.meta.env.VITE_APP_ENV === 'production' ? 'prod' : 'staging';

export const EVENTS_COLLECTION = `${prefix}_events`;
export const SAVED_LOCATIONS_COLLECTION = `${prefix}_savedLocations`;
