import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import EventForm from '../EventForm/EventForm';
import type { Event } from '../../types/event';
import type { EventFormState } from '../../types/event';
import { useEventRepository } from '../../context/EventRepositoryContext';

interface Props {
  /** The event being edited, or null when the dialog is closed */
  event: Event | null;
  /** Called when the dialog should close */
  onClose: () => void;
}

export default function EditEventDialog({ event, onClose }: Props) {
  const { updateEvent, deleteEvent } = useEventRepository();

  const handleUpdate = (formState: EventFormState) => {
    if (!event) return;
    updateEvent(event.id, formState);
    onClose();
  };

  const handleDelete = () => {
    if (!event) return;
    deleteEvent(event.id);
    onClose();
  };

  return (
    <Dialog open={!!event} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{event?.title}</DialogTitle>
      <DialogContent>
        {event && (
          <EventForm
            initialValues={event}
            submitLabel="Edit Event"
            onSubmit={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
