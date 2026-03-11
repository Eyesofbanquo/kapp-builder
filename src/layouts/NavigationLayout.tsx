import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import { useNavigation } from '../context/NavigationContext';
import MainScreen from '../screens/MainScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import CreateClassScreen from '../screens/CreateClassScreen';
import AllClassesScreen from '../screens/AllClassesScreen';
import type { Screen } from '../types/navigation';

const SCREEN_TITLES: Record<Screen, string> = {
  main: 'Home',
  createEvent: 'Create Event',
  allEvents: 'Events',
  locations: 'Saved Locations',
  createClass: 'Create a Class',
  allClasses: 'Classes',
};

export default function NavigationLayout() {
  const { canGoBack, pop, currentScreen } = useNavigation();

  const renderScreen = () => {
    if (currentScreen === 'createEvent') return <CreateEventScreen />;
    if (currentScreen === 'allEvents') return <AllEventsScreen />;
    if (currentScreen === 'locations') return <LocationsScreen />;
    if (currentScreen === 'createClass') return <CreateClassScreen />;
    if (currentScreen === 'allClasses') return <AllClassesScreen />;
    return <MainScreen />;
  };

  return (
    <Box>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{ backgroundColor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}
      >
        <Toolbar disableGutters>
          <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center' }}>
            {canGoBack && (
              <IconButton onClick={pop} aria-label="Go back" edge="start" sx={{ mr: 1 }}>
                <ArrowBackIosNew />
              </IconButton>
            )}
            <Typography variant="h5" fontWeight={700}>
              {SCREEN_TITLES[currentScreen]}
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      {renderScreen()}
    </Box>
  );
}
