import { Box, Button, Typography } from '@mui/material';
import type { SelectedLocation } from '../../types/event';
import { useSavedLocations } from '../../context/SavedLocationsContext';

interface Props {
  /** Called when the user selects a saved location */
  onSelect: (location: SelectedLocation) => void;
  /** Called when the user cancels and returns to the button stack */
  onCancel: () => void;
}

export default function SavedLocationsPicker({ onSelect, onCancel }: Props) {
  const { savedLocations } = useSavedLocations();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {savedLocations.map((location, index) => (
        <Button
          key={index}
          fullWidth
          variant="text"
          onClick={() => onSelect(location)}
          sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
        >
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="body1">{location.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {location.name !== location.address ? location.address : ''}
            </Typography>
          </Box>
        </Button>
      ))}
      <Button fullWidth variant="outlined" color="error" onClick={onCancel}>
        Cancel
      </Button>
    </Box>
  );
}
