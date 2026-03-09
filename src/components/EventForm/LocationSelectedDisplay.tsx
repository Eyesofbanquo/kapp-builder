import { Box, Button, Typography } from '@mui/material';
import type { SelectedLocation } from '../../types/event';

interface Props {
  /** The confirmed location to display */
  location: SelectedLocation;
  /** Called when the user wants to pick a different location */
  onChangeLocation: () => void;
}

export default function LocationSelectedDisplay({ location, onChangeLocation }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ backgroundColor: '#e8f5e9', borderRadius: 1, px: 2, py: 1.5 }}>
        <Typography>{location.address}</Typography>
      </Box>
      <Button variant="outlined" fullWidth onClick={onChangeLocation}>
        Change Location
      </Button>
    </Box>
  );
}
