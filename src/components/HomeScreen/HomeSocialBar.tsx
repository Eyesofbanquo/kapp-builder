import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { usePublicPalette } from '../../context/PublicPaletteContext';

export default function HomeSocialBar() {
  const { activePalette } = usePublicPalette();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: { xs: 1, sm: 1.5 },
      }}
    >
      <IconButton aria-label="Instagram" sx={{ color: activePalette.onSurfaceVariant }}>
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="Email"
        onClick={() => navigate('/contact')}
        sx={{ color: activePalette.onSurfaceVariant }}
      >
        <EmailIcon />
      </IconButton>
      <IconButton aria-label="Phone" sx={{ color: activePalette.onSurfaceVariant }}>
        <PhoneIcon />
      </IconButton>
    </Box>
  );
}
