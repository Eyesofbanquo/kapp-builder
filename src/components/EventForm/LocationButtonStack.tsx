import { Box, Button } from '@mui/material';
import { useSavedLocations } from '../../context/SavedLocationsContext';

interface Props {
  /** Called when the user clicks "Saved Locations" */
  onShowSavedPicker: () => void;
  /** Called when the user clicks "Add New Location" */
  onShowAddNew: () => void;
}

export default function LocationButtonStack({ onShowSavedPicker, onShowAddNew }: Props) {
  const { savedLocations } = useSavedLocations();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Button
        fullWidth
        variant="outlined"
        disabled={savedLocations.length === 0}
        onClick={onShowSavedPicker}
      >
        Saved Locations
      </Button>
      <Button
        fullWidth
        variant="outlined"
        onClick={onShowAddNew}
      >
        Add New Location
      </Button>
    </Box>
  );
}
