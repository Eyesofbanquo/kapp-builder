import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Typography } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  /** The current value of the email field */
  email: string;
  /** The current value of the phone number field */
  phoneNumber: string;
}

export default function ContactMethodStatus({ email, phoneNumber }: Props) {
  const { activePalette } = usePublicPalette();

  const hasValidEmail = email.trim() !== '' && EMAIL_PATTERN.test(email.trim());
  const filledCount = (hasValidEmail ? 1 : 0) + (phoneNumber.trim() ? 1 : 0);
  const isReady = filledCount >= 1;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {isReady ? (
        <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} />
      ) : (
        <CancelIcon sx={{ color: 'error.main', fontSize: 20 }} />
      )}
      <Typography
        variant="body2"
        sx={{ color: activePalette.secondaryTextColor }}
      >
        {isReady ? 'Ready' : 'Enter email or phone'}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: activePalette.secondaryTextColor, marginLeft: 'auto' }}
      >
        ({filledCount}/2)
      </Typography>
    </Box>
  );
}
