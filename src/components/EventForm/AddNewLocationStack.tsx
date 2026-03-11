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
  /** Label for the save button. Defaults to "Save New Location" */
  saveLabel?: string;
  /** Override save behavior. If provided, replaces the default addSavedLocation call */
  onSave?: (location: SelectedLocation) => void;
}

export default function AddNewLocationStack({ onChange, onDone, onCancel, saveLabel = 'Save New Location', onSave }: Props) {
  const [pickedLocation, setPickedLocation] = useState<SelectedLocation | null>(null);
  const { addSavedLocation, savedLocations } = useSavedLocations();

  const handleSave = () => {
    if (!pickedLocation) return;
    if (onSave) {
      onSave(pickedLocation);
    } else {
      const existing = savedLocations.find(
        (location) => location.lat === pickedLocation.lat && location.lng === pickedLocation.lng
      );
      if (existing) {
        onChange(existing);
        onDone();
      } else {
        addSavedLocation(pickedLocation);
        onChange(pickedLocation);
        onDone();
      }
    }
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
          {saveLabel}
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
