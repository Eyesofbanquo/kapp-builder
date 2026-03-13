import { Box, Container, Typography } from '@mui/material';
import ContactForm from '../components/ContactScreen/ContactForm';
import { usePublicPalette } from '../context/PublicPaletteContext';
import type { ContactFormState } from '../types/contactForm';

interface Props {
  /** Optional heading override (defaults to "Contact") */
  heading?: string;
}

export default function ContactScreen({ heading = 'Contact' }: Props) {
  const { activePalette } = usePublicPalette();

  const handleSubmit = (formState: ContactFormState) => {
    const subject = encodeURIComponent(
      `Message from ${formState.firstName} ${formState.lastName}`
    );
    const body = encodeURIComponent(formState.message);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <Container maxWidth="sm" sx={{ paddingY: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ color: activePalette.onSurface }}
        >
          {heading}
        </Typography>
        <ContactForm onSubmit={handleSubmit} />
      </Box>
    </Container>
  );
}
