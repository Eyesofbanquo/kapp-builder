import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import ReactMarkdown from 'react-markdown';
import CompactEventCard from './CompactEventCard';
import EventPickerDialog from './EventPickerDialog';
import { useEventRepository } from '../../context/EventRepositoryContext';
import type { ClassFormState } from '../../types/class';

interface Props {
  /** Pre-populate fields (edit mode). */
  initialValues?: ClassFormState;
  /** Pre-select an event by ID */
  initialEventId?: string;
  /** Start in edit or preview mode for notes (defaults to 'edit') */
  initialViewMode?: 'edit' | 'preview';
  /** ID of the class being edited — used to avoid greying out its own event */
  currentClassId?: string;
  /** Label for the primary action button */
  submitLabel: string;
  /** Called when user submits the form */
  onSubmit: (formState: ClassFormState, eventId: string) => void;
}

type ViewMode = 'edit' | 'preview';

const EMPTY_FORM: ClassFormState = {
  name: '',
  description: '',
  rating: null,
  notes: '',
};

export default function ClassForm({
  initialValues,
  initialEventId,
  initialViewMode,
  currentClassId,
  submitLabel,
  onSubmit,
}: Props) {
  const [form, setForm] = useState<ClassFormState>(initialValues ?? EMPTY_FORM);
  const [eventId, setEventId] = useState<string>(initialEventId ?? '');
  const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode ?? 'edit');
  const [showEventPicker, setShowEventPicker] = useState(false);

  const { events } = useEventRepository();
  const selectedEvent = eventId ? events.find((e) => e.id === eventId) : undefined;

  const isValid = form.name.trim().length > 0;

  const handleSubmit = () => {
    onSubmit(form, eventId);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* Event section */}
      <Box>
        <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
          Event
        </Typography>
        <Divider sx={{ mb: 1.5 }} />

        {selectedEvent ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <CompactEventCard event={selectedEvent} />
            <Button
              size="small"
              color="error"
              onClick={() => setEventId('')}
              sx={{ alignSelf: 'flex-start' }}
            >
              Remove
            </Button>
          </Box>
        ) : (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowEventPicker(true)}
          >
            Add to event
          </Button>
        )}
      </Box>

      {/* Class Details section */}
      <Box>
        <Typography variant="subtitle2" color="text.secondary" mb={0.5}>
          Class Details
        </Typography>
        <Divider sx={{ mb: 1.5 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Class name"
            placeholder="e.g. Monday Reformer"
            fullWidth
            value={form.name}
            onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
          />

          <TextField
            label="Description"
            placeholder="What was this class about?"
            fullWidth
            multiline
            minRows={2}
            value={form.description}
            onChange={(event) =>
              setForm((previous) => ({ ...previous, description: event.target.value }))
            }
          />

          <Box>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Rating
            </Typography>
            <Rating
              value={form.rating}
              onChange={(_event, newValue) =>
                setForm((previous) => ({ ...previous, rating: newValue }))
              }
            />
          </Box>

          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Notes
              </Typography>
              <ToggleButtonGroup
                value={viewMode}
                exclusive
                size="small"
                onChange={(_event, newMode: ViewMode | null) => {
                  if (newMode) setViewMode(newMode);
                }}
              >
                <ToggleButton value="edit">Edit</ToggleButton>
                <ToggleButton value="preview">Preview</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {viewMode === 'edit' ? (
              <TextField
                fullWidth
                multiline
                minRows={4}
                placeholder="Markdown supported…"
                value={form.notes}
                onChange={(event) =>
                  setForm((previous) => ({ ...previous, notes: event.target.value }))
                }
              />
            ) : (
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  p: 2,
                  minHeight: 100,
                  '& p': { margin: 0 },
                }}
              >
                {form.notes.trim() ? (
                  <ReactMarkdown>{form.notes}</ReactMarkdown>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    Nothing to preview.
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Button
        variant="contained"
        size="large"
        disabled={!isValid}
        onClick={handleSubmit}
        sx={{ mt: 1, borderRadius: 2, py: 1.5 }}
      >
        {submitLabel}
      </Button>

      <EventPickerDialog
        open={showEventPicker}
        onClose={() => setShowEventPicker(false)}
        onSelect={(selectedEventId) => setEventId(selectedEventId)}
        currentClassId={currentClassId}
      />
    </Box>
  );
}
