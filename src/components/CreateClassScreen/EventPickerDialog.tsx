import { Box, Dialog, DialogContent, DialogTitle, Paper, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import { useEventRepository } from '../../context/EventRepositoryContext';
import { useClassRepository } from '../../context/ClassRepositoryContext';
import { useSavedLocations } from '../../context/SavedLocationsContext';
import type { Event } from '../../types/event';

interface Props {
  /** Whether the dialog is open */
  open: boolean;
  /** Called when the dialog should close without a selection */
  onClose: () => void;
  /** Called with the selected event ID */
  onSelect: (eventId: string) => void;
  /** ID of the class being edited — its event will not be greyed out */
  currentClassId?: string;
}

export default function EventPickerDialog({ open, onClose, onSelect, currentClassId }: Props) {
  const { events } = useEventRepository();
  const { classes } = useClassRepository();
  const { savedLocations } = useSavedLocations();

  const handleSelect = (event: Event) => {
    onSelect(event.id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} scroll="paper" maxWidth="sm" fullWidth>
      <DialogTitle>Pick an event</DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {events.map((event) => {
            const takenByOther = classes.some(
              (pilatesClass) =>
                pilatesClass.eventId === event.id && pilatesClass.id !== currentClassId
            );
            const location = event.locationId
              ? savedLocations.find((saved) => saved.id === event.locationId)
              : null;
            const formattedDate = event.date ? event.date.format('MMM D, YYYY') : null;

            return (
              <Paper
                key={event.id}
                elevation={0}
                onClick={takenByOther ? undefined : () => handleSelect(event)}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  cursor: takenByOther ? 'default' : 'pointer',
                  opacity: takenByOther ? 0.4 : 1,
                  pointerEvents: takenByOther ? 'none' : 'auto',
                  '&:hover': takenByOther ? {} : { backgroundColor: 'action.hover' },
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
          })}

          {events.length === 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No events yet.
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
