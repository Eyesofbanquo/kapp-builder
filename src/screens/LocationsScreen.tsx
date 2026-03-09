import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useSavedLocations } from '../context/SavedLocationsContext';
import type { SelectedLocation } from '../types/event';
import LocationCard from '../components/LocationsScreen/LocationCard';
import EditLocationDialog from '../components/LocationsScreen/EditLocationDialog';

export default function LocationsScreen() {
  const { savedLocations } = useSavedLocations();
  const [editingLocation, setEditingLocation] = useState<SelectedLocation | null>(null);

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
          savedLocations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onClick={setEditingLocation}
            />
          ))
        )}

        <EditLocationDialog
          location={editingLocation}
          onClose={() => setEditingLocation(null)}
        />
      </Container>
    </Box>
  );
}
