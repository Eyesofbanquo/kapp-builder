import { useState } from 'react';
import { Box, Container, Paper } from '@mui/material';
import EventForm from '../components/EventForm/EventForm';
import AddClassDialog from '../components/CreateEventScreen/AddClassDialog';
import { useEventRepository } from '../context/EventRepositoryContext';
import type { EventFormState } from '../types/event';

export default function CreateEventScreen() {
  const { addEvent } = useEventRepository();
  const [newEventId, setNewEventId] = useState<string | null>(null);

  const handleSubmit = (formState: EventFormState) => {
    const eventId = addEvent(formState);
    setNewEventId(eventId);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', pt: 2, pb: 6 }}>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
          <EventForm submitLabel="Create Event" onSubmit={handleSubmit} />
        </Paper>
      </Container>

      <AddClassDialog
        eventId={newEventId ?? ''}
        open={newEventId !== null}
        onDismiss={() => setNewEventId(null)}
      />
    </Box>
  );
}
