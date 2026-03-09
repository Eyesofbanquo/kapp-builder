import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useSavedLocations } from '../context/SavedLocationsContext';

export default function LocationsScreen() {
  const { savedLocations } = useSavedLocations();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={700} mb={4}>
          Saved Locations
        </Typography>

        {savedLocations.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No saved locations yet. Add one when creating or editing an event.
          </Typography>
        ) : (
          <List disablePadding>
            {savedLocations.map((location, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText primary={location.address} />
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </Box>
  );
}
