import { Box } from '@mui/material';
import HomeLetterBoxRow from '../components/HomeScreen/HomeLetterBoxRow';
import HomeLogoCard from '../components/HomeScreen/HomeLogoCard';
import HomePlaylistsCard from '../components/HomeScreen/HomePlaylistsCard';
import HomeSocialBar from '../components/HomeScreen/HomeSocialBar';

export default function HomeScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2.5, sm: 3 },
        width: '100%',
        flex: 1,
        py: { xs: 2, sm: 3 },
      }}
    >
      <HomeLogoCard />
      <HomePlaylistsCard />
      <HomeLetterBoxRow />
      <HomeSocialBar />
    </Box>
  );
}
