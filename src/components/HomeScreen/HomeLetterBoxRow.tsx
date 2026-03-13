import { Box } from '@mui/material';
import HomeLetterBox from './HomeLetterBox';

export default function HomeLetterBoxRow() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 1.5, sm: 2 },
        width: '100%',
        maxWidth: { xs: '400px', sm: '420px' },
      }}
    >
      <HomeLetterBox letter="A" />
      <HomeLetterBox letter="N" />
      <HomeLetterBox letter="C" />
    </Box>
  );
}
