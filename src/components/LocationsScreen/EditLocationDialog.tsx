import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import type { SelectedLocation } from '../../types/event';
import { useSavedLocations } from '../../context/SavedLocationsContext';
import LocationSelectedDisplay from '../EventForm/LocationSelectedDisplay';
import AddNewLocationStack from '../EventForm/AddNewLocationStack';

type EditMode = 'selected' | 'addNew';

interface Props {
  /** Location being edited; dialog is open when non-null */
  location: SelectedLocation | null;
  /** Called when dialog should close */
  onClose: () => void;
}

export default function EditLocationDialog({ location, onClose }: Props) {
  const [mode, setMode] = useState<EditMode>('selected');
  const { updateSavedLocation, deleteSavedLocation } = useSavedLocations();

  const handleDialogClose = () => {
    setMode('selected');
    onClose();
  };

  if (!location) return null;

  return (
    <Dialog open fullWidth maxWidth="sm" onClose={handleDialogClose}>
      <DialogTitle>{location.name}</DialogTitle>
      <DialogContent>
        {mode === 'selected' && (
          <LocationSelectedDisplay
            location={location}
            onChangeLocation={() => setMode('addNew')}
            changeLocationLabel="Update"
            onDelete={() => {
              deleteSavedLocation(location.id);
              handleDialogClose();
            }}
          />
        )}
        {mode === 'addNew' && (
          <AddNewLocationStack
            onChange={() => undefined}
            onDone={handleDialogClose}
            onCancel={handleDialogClose}
            saveLabel="Edit Location"
            onSave={(picked) => {
              updateSavedLocation(location.id, picked);
              handleDialogClose();
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
