import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { EventFormState } from '../../types/event';
import LocationSection from './LocationSection';

interface Props {
  /** Pre-populate fields (edit mode). Defaults to empty strings / null. */
  initialValues?: EventFormState;
  /** Label for the primary action button */
  submitLabel: string;
  /** Called when user submits the form */
  onSubmit: (formState: EventFormState) => void;
  /** If provided, renders a red "Delete Event" button below the submit button */
  onDelete?: () => void;
}

const EMPTY_FORM: EventFormState = {
  title: '',
  description: '',
  date: null,
  time: null,
  location: null,
};

export default function EventForm({ initialValues, submitLabel, onSubmit, onDelete }: Props) {
  const [form, setForm] = useState<EventFormState>(initialValues ?? EMPTY_FORM);

  const isValid = form.title.trim() && form.date && form.time && form.location;

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Title"
          placeholder="Event name"
          fullWidth
          value={form.title}
          onChange={(event) => setForm((previous) => ({ ...previous, title: event.target.value }))}
        />

        <TextField
          label="Description"
          placeholder="What's this event about?"
          fullWidth
          multiline
          minRows={3}
          value={form.description}
          onChange={(event) => setForm((previous) => ({ ...previous, description: event.target.value }))}
        />

        <DatePicker
          label="Date"
          value={form.date}
          onChange={(value) => setForm((previous) => ({ ...previous, date: value }))}
          slotProps={{ textField: { fullWidth: true } }}
        />

        <TimePicker
          label="Time"
          value={form.time}
          onChange={(value) => setForm((previous) => ({ ...previous, time: value }))}
          slotProps={{ textField: { fullWidth: true } }}
        />

        <LocationSection
          value={form.location}
          onChange={(location) => setForm((previous) => ({ ...previous, location: location ?? null }))}
        />

        <Button
          variant="contained"
          size="large"
          disabled={!isValid}
          onClick={handleSubmit}
          sx={{ mt: 1, borderRadius: 2, py: 1.5 }}
        >
          {submitLabel}
        </Button>

        {onDelete && (
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={onDelete}
            sx={{ borderRadius: 2, py: 1.5 }}
          >
            Delete Event
          </Button>
        )}
      </Box>
    </LocalizationProvider>
  );
}
