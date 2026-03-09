import { useState } from 'react';
import { Box, Button, IconButton, Snackbar, Typography } from '@mui/material';
import ContentCopy from '@mui/icons-material/ContentCopy';
import type { SelectedLocation } from '../../types/event';

interface Props {
  /** The confirmed location to display */
  location: SelectedLocation;
  /** Called when the user wants to pick a different location */
  onChangeLocation: () => void;
  /** Label for the change button. Defaults to "Change Location" */
  changeLocationLabel?: string;
  /** When provided, renders a two-button row with Delete alongside the change button */
  onDelete?: () => void;
}

export default function LocationSelectedDisplay({ location, onChangeLocation, changeLocationLabel = 'Change Location', onDelete }: Props) {
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
      {onDelete ? (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" sx={{ flex: 1 }} onClick={onChangeLocation}>
            {changeLocationLabel}
          </Button>
          <Button variant="outlined" color="error" sx={{ flex: 1 }} onClick={onDelete}>
            Delete
          </Button>
        </Box>
      ) : (
        <Button variant="outlined" fullWidth onClick={onChangeLocation}>
          {changeLocationLabel}
        </Button>
      )}
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
