import { Box } from '@mui/material';
import ComingSoonHero from '../components/ComingSoonScreen/ComingSoonHero';

export default function ComingSoonScreen() {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        py: { xs: 2, sm: 3 },
      }}
    >
      <ComingSoonHero />
    </Box>
  );
}
