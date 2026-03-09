import { useState } from 'react';
import { Box, Button } from '@mui/material';
import LocationPicker from '../LocationPicker';
import { useSavedLocations } from '../../context/SavedLocationsContext';
import type { SelectedLocation } from '../../types/event';

interface Props {
  /** Called when a location is confirmed, to set it on the parent form */
  onChange: (location: SelectedLocation) => void;
  /** Called after saving to return to the button stack */
  onDone: () => void;
  /** Called when the user cancels to return to the button stack */
  onCancel: () => void;
}

export default function AddNewLocationStack({ onChange, onDone, onCancel }: Props) {
  const [pickedLocation, setPickedLocation] = useState<SelectedLocation | null>(null);
  const { addSavedLocation } = useSavedLocations();

  const handleSave = () => {
    if (!pickedLocation) return;
    addSavedLocation(pickedLocation);
    onChange(pickedLocation);
    onDone();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <LocationPicker value={pickedLocation} onChange={setPickedLocation} />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          variant="contained"
          disabled={!pickedLocation}
          onClick={handleSave}
          sx={{ flex: 1 }}
        >
          Save New Location
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={onCancel}
          sx={{ flex: 1 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
