import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import type { ContactFormState } from '../../types/contactForm';
import ContactMethodStatus from './ContactMethodStatus';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  /** Called when the user submits the contact form */
  onSubmit: (formState: ContactFormState) => void;
}

const EMPTY_FORM: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export default function ContactForm({ onSubmit }: Props) {
  const { activePalette } = usePublicPalette();
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM);

  const isEmailValid = form.email.trim() === '' || EMAIL_PATTERN.test(form.email.trim());
  const hasValidEmail = form.email.trim() !== '' && isEmailValid;
  const hasPhoneNumber = form.phoneNumber.trim() !== '';
  const hasContactMethod = hasValidEmail || hasPhoneNumber;
  const isValid =
    form.firstName.trim() !== '' &&
    form.lastName.trim() !== '' &&
    form.message.trim() !== '' &&
    hasContactMethod;

  const handleSubmit = () => {
    onSubmit(form);
  };

  const fieldStyle = {
    '& .MuiOutlinedInput-root': {
      color: activePalette.onSurface,
      '& fieldset': { borderColor: activePalette.outlineVariant },
      '&:hover fieldset': { borderColor: activePalette.primary },
      '&.Mui-focused fieldset': { borderColor: activePalette.primary },
    },
    '& .MuiInputLabel-root': { color: activePalette.onSurfaceVariant },
    '& .MuiInputLabel-root.Mui-focused': { color: activePalette.primary },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="First Name"
          fullWidth
          value={form.firstName}
          onChange={(event) =>
            setForm((previous) => ({ ...previous, firstName: event.target.value }))
          }
          sx={fieldStyle}
        />
        <TextField
          label="Last Name"
          fullWidth
          value={form.lastName}
          onChange={(event) =>
            setForm((previous) => ({ ...previous, lastName: event.target.value }))
          }
          sx={fieldStyle}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={form.email}
          onChange={(event) =>
            setForm((previous) => ({ ...previous, email: event.target.value }))
          }
          error={form.email.trim() !== '' && !isEmailValid}
          helperText={form.email.trim() !== '' && !isEmailValid ? 'Enter a valid email' : ''}
          sx={fieldStyle}
        />
        <TextField
          label="Phone Number"
          type="tel"
          fullWidth
          value={form.phoneNumber}
          onChange={(event) =>
            setForm((previous) => ({ ...previous, phoneNumber: event.target.value }))
          }
          sx={fieldStyle}
        />
      </Box>

      <ContactMethodStatus email={form.email} phoneNumber={form.phoneNumber} />

      <TextField
        label="Message"
        fullWidth
        multiline
        minRows={6}
        value={form.message}
        onChange={(event) =>
          setForm((previous) => ({ ...previous, message: event.target.value }))
        }
        sx={fieldStyle}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          size="large"
          disabled={!isValid}
          onClick={handleSubmit}
          sx={{
            borderRadius: 2,
            paddingY: 1.5,
            paddingX: 4,
            backgroundColor: activePalette.primary,
            color: activePalette.onPrimary,
            '&:hover': { backgroundColor: activePalette.secondary },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
