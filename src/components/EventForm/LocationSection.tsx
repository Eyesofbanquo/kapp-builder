import { useState } from 'react';
import type { SelectedLocation } from '../../types/event';
import LocationButtonStack from './LocationButtonStack';
import SavedLocationsPicker from './SavedLocationsPicker';
import AddNewLocationStack from './AddNewLocationStack';
import LocationSelectedDisplay from './LocationSelectedDisplay';
import { useSavedLocations } from '../../context/SavedLocationsContext';

type LocationMode = 'buttons' | 'savedPicker' | 'addNew' | 'selected';

interface Props {
  /** ID of the currently selected saved location */
  value: string | null;
  /** Called with a locationId when confirmed, or null when cleared */
  onChange: (locationId: string | null) => void;
}

export default function LocationSection({ value, onChange }: Props) {
  const { savedLocations } = useSavedLocations();

  const initialLocation = value
    ? (savedLocations.find((location) => location.id === value) ?? null)
    : null;

  const [mode, setMode] = useState<LocationMode>(initialLocation ? 'selected' : 'buttons');
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(initialLocation);

  if (mode === 'savedPicker') {
    return (
      <SavedLocationsPicker
        onSelect={(location) => {
          onChange(location.id);
          setSelectedLocation(location);
          setMode('selected');
        }}
        onCancel={() => setMode('buttons')}
      />
    );
  }

  if (mode === 'addNew') {
    return (
      <AddNewLocationStack
        onChange={(location) => {
          onChange(location.id);
          setSelectedLocation(location);
        }}
        onDone={() => setMode('selected')}
        onCancel={() => setMode('buttons')}
      />
    );
  }

  if (mode === 'selected' && selectedLocation) {
    return (
      <LocationSelectedDisplay
        location={selectedLocation}
        onChangeLocation={() => {
          onChange(null);
          setSelectedLocation(null);
          setMode('buttons');
        }}
      />
    );
  }

  return (
    <LocationButtonStack
      onShowSavedPicker={() => setMode('savedPicker')}
      onShowAddNew={() => setMode('addNew')}
    />
  );
}
