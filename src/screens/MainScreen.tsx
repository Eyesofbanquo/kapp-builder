import { Box, Container, Typography } from '@mui/material';
import ToolCard from '../components/MainScreen/ToolCard';
import ToolSection from '../components/MainScreen/ToolSection';
import { useNavigation } from '../context/NavigationContext';

export default function MainScreen() {
  const { push } = useNavigation();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight={700} mb={4}>
          Home
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <ToolSection title="Events">
            <ToolCard
              grouped
              title="Create an event"
              description="Name, describe, and schedule an event with a time and location."
              onClick={() => push('createEvent')}
            />
            <ToolCard
              grouped
              title="Show all events"
              description="Browse and manage all your events."
              onClick={() => push('allEvents')}
            />
            <ToolCard
              grouped
              title="Locations"
              description="View and manage your saved locations."
              onClick={() => push('locations')}
            />
          </ToolSection>

          <ToolSection title="Classes">
            <ToolCard
              grouped
              comingSoon
              title="Playlists"
              description="Coming soon."
            />
          </ToolSection>
        </Box>
      </Container>
    </Box>
  );
}
