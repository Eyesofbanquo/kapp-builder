import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { EventFormState } from '../types/event';

interface Props {
  /** Optional callback fired when the user submits the form */
  onSubmit?: (event: EventFormState) => void;
}

export default function CreateEventScreen({ onSubmit }: Props) {
  const [form, setForm] = useState<EventFormState>({
    title: '',
    description: '',
    date: null,
    time: null,
    location: null,
  });

  const handleSubmit = () => {
    onSubmit?.(form);
  };

  const isValid = form.title.trim() && form.date && form.time;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 6 }}>
        <Container maxWidth="sm">
          <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h5" fontWeight={700} mb={4}>
              Create Event
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Title"
                placeholder="Event name"
                fullWidth
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />

              <TextField
                label="Description"
                placeholder="What's this event about?"
                fullWidth
                multiline
                minRows={3}
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />

              <DatePicker
                label="Date"
                value={form.date}
                onChange={(val) => setForm((f) => ({ ...f, date: val }))}
                slotProps={{ textField: { fullWidth: true } }}
              />

              <TimePicker
                label="Time"
                value={form.time}
                onChange={(val) => setForm((f) => ({ ...f, time: val }))}
                slotProps={{ textField: { fullWidth: true } }}
              />

              <Button
                variant="contained"
                size="large"
                disabled={!isValid}
                onClick={handleSubmit}
                sx={{ mt: 1, borderRadius: 2, py: 1.5 }}
              >
                Create Event
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  );
}
