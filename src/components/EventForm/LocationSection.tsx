import { useState } from 'react';
import type { SelectedLocation } from '../../types/event';
import LocationButtonStack from './LocationButtonStack';
import SavedLocationsPicker from './SavedLocationsPicker';
import AddNewLocationStack from './AddNewLocationStack';
import LocationSelectedDisplay from './LocationSelectedDisplay';

type LocationMode = 'buttons' | 'savedPicker' | 'addNew' | 'selected';

interface Props {
  /** Currently selected location on the form */
  value: SelectedLocation | null;
  /** Called when the user confirms a location selection or clears it */
  onChange: (location: SelectedLocation | null) => void;
}

export default function LocationSection({ onChange }: Props) {
  const [mode, setMode] = useState<LocationMode>('buttons');
  const [selectedLocation, setSelectedLocation] = useState<SelectedLocation | null>(null);

  if (mode === 'savedPicker') {
    return (
      <SavedLocationsPicker
        onSelect={(location) => {
          onChange(location);
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
          onChange(location);
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
