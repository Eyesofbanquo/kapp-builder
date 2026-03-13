import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, IconButton } from '@mui/material';
import { usePublicPalette } from '../../context/PublicPaletteContext';

export default function HomeSocialBar() {
  const { activePalette } = usePublicPalette();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: { xs: 1, sm: 1.5 },
      }}
    >
      <IconButton aria-label="Instagram" sx={{ color: activePalette.secondaryTextColor }}>
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="Email" sx={{ color: activePalette.secondaryTextColor }}>
        <EmailIcon />
      </IconButton>
      <IconButton aria-label="Phone" sx={{ color: activePalette.secondaryTextColor }}>
        <PhoneIcon />
      </IconButton>
    </Box>
  );
}
