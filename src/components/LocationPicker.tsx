import { useState, useCallback, useRef, useEffect } from 'react';
import { Box, TextField, List, ListItemButton, ListItemText, Paper, Typography, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { APIProvider, Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import type { SelectedLocation } from '../types/event';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? '';
const FALLBACK_CENTER = { lat: 32.9537, lng: -96.7298 }; // 1803 Blake Drive, Richardson TX 75081

interface Props {
  /** Currently selected location; null if none */
  value: SelectedLocation | null;
  /** Called when the user picks a place from the suggestions */
  onChange: (location: SelectedLocation | null) => void;
}

function MapView({ location, initialCenter }: { location: SelectedLocation | null; initialCenter: { lat: number; lng: number } }) {
  const map = useMap();

  useEffect(() => {
    if (!location) map?.panTo(initialCenter);
  }, [map, initialCenter, location]);

  useEffect(() => {
    if (location) map?.panTo({ lat: location.lat, lng: location.lng });
  }, [map, location]);

  if (!location) return null;

  return (
    <AdvancedMarker position={{ lat: location.lat, lng: location.lng }} />
  );
}

export default function LocationPicker({ value, onChange }: Props) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<google.maps.places.AutocompleteSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialCenter, setInitialCenter] = useState(FALLBACK_CENTER);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setInitialCenter({ lat: coords.latitude, lng: coords.longitude }),
      () => {} // denied or unavailable — keep fallback
    );
  }, []);

  const fetchSuggestions = useCallback(async (input: string) => {
    if (!input.trim() || !GOOGLE_MAPS_API_KEY) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const { AutocompleteSuggestion } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;
      const { suggestions: results } = await AutocompleteSuggestion.fetchAutocompleteSuggestions({ input });
      setSuggestions(results ?? []);
    } catch {
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  const handleInputChange = (val: string) => {
    setQuery(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 300);
  };

  const handleSelect = useCallback(async (suggestion: google.maps.places.AutocompleteSuggestion) => {
    const pred = suggestion.placePrediction;
    if (!pred) return;
    setSuggestions([]);
    setQuery(pred.text.text);
    setLoading(true);
    try {
      const place = pred.toPlace();
      await place.fetchFields({ fields: ['location', 'formattedAddress', 'displayName'] });
      if (place.location) {
        onChange({
          id: crypto.randomUUID(),
          name: place.displayName ?? pred.mainText?.text ?? '',
          address: place.formattedAddress ?? pred.text.text,
          lat: place.location.lat(),
          lng: place.location.lng(),
        });
      }
    } catch {
      // fallback: no coordinates
    } finally {
      setLoading(false);
    }
  }, [onChange]);

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <Box sx={{ p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Set <code>VITE_GOOGLE_MAPS_API_KEY</code> to enable location picker.
        </Typography>
      </Box>
    );
  }

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ position: 'relative' }}>
          <TextField
            fullWidth
            label="Location"
            placeholder="Search for a place..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            slotProps={{
              input: {
                endAdornment: loading ? <CircularProgress size={18} /> : <LocationOnIcon color="action" />,
              },
            }}
          />
          {suggestions.length > 0 && (
            <Paper
              elevation={4}
              sx={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1300, maxHeight: 220, overflowY: 'auto' }}
            >
              <List dense disablePadding>
                {suggestions.map((s) => {
                  const pred = s.placePrediction;
                  if (!pred) return null;
                  return (
                    <ListItemButton key={pred.placeId} onClick={() => handleSelect(s)}>
                      <ListItemText
                        primary={pred.mainText?.text ?? pred.text.text}
                        secondary={pred.secondaryText?.text}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Paper>
          )}
        </Box>

        <Box sx={{ height: 220, borderRadius: 1, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
          <Map
            mapId={MAP_ID}
            defaultCenter={initialCenter}
            defaultZoom={14}
            gestureHandling="greedy"
            disableDefaultUI
          >
            <MapView location={value} initialCenter={initialCenter} />
          </Map>
        </Box>
      </Box>
    </APIProvider>
  );
}
