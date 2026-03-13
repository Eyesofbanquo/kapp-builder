import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';
import type { ContactFormState } from '../../types/contactForm';
import ContactMethodStatus from './ContactMethodStatus';

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

  const hasContactMethod = form.email.trim() !== '' || form.phoneNumber.trim() !== '';
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
      color: activePalette.primaryTextColor,
      '& fieldset': { borderColor: activePalette.cardBorderColor },
      '&:hover fieldset': { borderColor: activePalette.accentColor },
      '&.Mui-focused fieldset': { borderColor: activePalette.accentColor },
    },
    '& .MuiInputLabel-root': { color: activePalette.secondaryTextColor },
    '& .MuiInputLabel-root.Mui-focused': { color: activePalette.accentColor },
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
            backgroundColor: activePalette.buttonColor,
            color: activePalette.buttonTextColor,
            '&:hover': { backgroundColor: activePalette.accentColor },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
