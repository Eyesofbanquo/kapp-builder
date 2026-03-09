import { useState } from 'react';
import type { SelectedLocation } from '../../types/event';
import LocationButtonStack from './LocationButtonStack';
import SavedLocationsPicker from './SavedLocationsPicker';
import AddNewLocationStack from './AddNewLocationStack';

type LocationMode = 'buttons' | 'savedPicker' | 'addNew';

interface Props {
  /** Currently selected location on the form */
  value: SelectedLocation | null;
  /** Called when the user confirms a location selection */
  onChange: (location: SelectedLocation) => void;
}

export default function LocationSection({ onChange }: Props) {
  const [mode, setMode] = useState<LocationMode>('buttons');

  if (mode === 'savedPicker') {
    return (
      <SavedLocationsPicker
        onSelect={(location) => {
          onChange(location);
          setMode('buttons');
        }}
        onCancel={() => setMode('buttons')}
      />
    );
  }

  if (mode === 'addNew') {
    return (
      <AddNewLocationStack
        onChange={onChange}
        onDone={() => setMode('buttons')}
        onCancel={() => setMode('buttons')}
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
