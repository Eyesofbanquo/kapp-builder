import { Box, Container } from '@mui/material';
import ToolCard from '../components/MainScreen/ToolCard';
import ToolSection from '../components/MainScreen/ToolSection';
import { useNavigation } from '../context/NavigationContext';

export default function MainScreen() {
  const { push } = useNavigation();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', pt: 2, pb: 6 }}>
      <Container maxWidth="sm">
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
              title="Create a class"
              description="Record a Pilates class with notes and a rating."
              onClick={() => push('createClass', {})}
            />
            <ToolCard
              grouped
              title="All Classes"
              description="Browse and manage all your logged classes."
              onClick={() => push('allClasses')}
            />
          </ToolSection>
        </Box>
      </Container>
    </Box>
  );
}
