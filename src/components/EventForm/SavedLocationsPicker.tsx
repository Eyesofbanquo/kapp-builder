import { Box, Button, Divider, Typography } from '@mui/material';
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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {savedLocations.map((location, index) => (
        <Box key={index}>
          {index > 0 && <Divider />}
          <Button
            fullWidth
            variant="text"
            onClick={() => onSelect(location)}
            sx={{ justifyContent: 'flex-start', textAlign: 'left', py: 1.5 }}
          >
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="body1">{location.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {location.name !== location.address ? location.address : ''}
              </Typography>
            </Box>
          </Button>
        </Box>
      ))}
      <Divider sx={{ mb: 1 }} />
      <Button fullWidth variant="outlined" color="error" onClick={onCancel}>
        Cancel
      </Button>
    </Box>
  );
}
