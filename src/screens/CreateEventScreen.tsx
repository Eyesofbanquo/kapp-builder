import { useState } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';
import EventForm from '../components/EventForm/EventForm';
import AddClassDialog from '../components/CreateEventScreen/AddClassDialog';
import { useEventRepository } from '../context/EventRepositoryContext';
import type { EventFormState } from '../types/event';

interface Props {
  // No external props needed; data and navigation come from context
}

export default function CreateEventScreen(_props: Props) {
  const { addEvent } = useEventRepository();
  const [newEventId, setNewEventId] = useState<string | null>(null);

  const handleSubmit = (formState: EventFormState) => {
    const eventId = addEvent(formState);
    setNewEventId(eventId);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="sm">
        <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h5" fontWeight={700} mb={4}>
            Create Event
          </Typography>
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
