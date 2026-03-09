import { Box, Paper, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import type { Event } from '../../types/event';
import { useSavedLocations } from '../../context/SavedLocationsContext';

interface Props {
  /** The event to display */
  event: Event;
}

export default function CompactEventCard({ event }: Props) {
  const { savedLocations } = useSavedLocations();
  const location = event.locationId
    ? savedLocations.find((saved) => saved.id === event.locationId)
    : null;

  const formattedDate = event.date ? event.date.format('MMM D, YYYY') : null;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'action.hover',
      }}
    >
      <Typography variant="subtitle2" fontWeight={600}>
        {event.title}
      </Typography>

      {formattedDate && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          <CalendarTodayIcon fontSize="small" sx={{ color: 'text.secondary', fontSize: 14 }} />
          <Typography variant="body2" color="text.secondary">
            {formattedDate}
          </Typography>
        </Box>
      )}

      {location && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          <PlaceIcon fontSize="small" sx={{ color: 'text.secondary', fontSize: 14 }} />
          <Typography variant="body2" color="text.secondary">
            {location.name}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
