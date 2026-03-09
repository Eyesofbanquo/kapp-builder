import { useState } from 'react';
import { Box, Button, IconButton, Snackbar, Typography } from '@mui/material';
import ContentCopy from '@mui/icons-material/ContentCopy';
import type { SelectedLocation } from '../../types/event';

interface Props {
  /** The confirmed location to display */
  location: SelectedLocation;
  /** Called when the user wants to pick a different location */
  onChangeLocation: () => void;
}

export default function LocationSelectedDisplay({ location, onChangeLocation }: Props) {
  const [toastOpen, setToastOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(location.address);
    setToastOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box sx={{ backgroundColor: '#e8f5e9', borderRadius: 1, px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" fontWeight="bold">{location.name}</Typography>
          <Typography variant="body2" color="text.secondary">{location.address}</Typography>
        </Box>
        <IconButton size="small" onClick={handleCopy}>
          <ContentCopy fontSize="small" />
        </IconButton>
      </Box>
      <Button variant="outlined" fullWidth onClick={onChangeLocation}>
        Change Location
      </Button>
      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        message="Copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
