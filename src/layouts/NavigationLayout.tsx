import { Box, IconButton } from '@mui/material';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import { useNavigation } from '../context/NavigationContext';
import MainScreen from '../screens/MainScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import AllEventsScreen from '../screens/AllEventsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import CreateClassScreen from '../screens/CreateClassScreen';
import AllClassesScreen from '../screens/AllClassesScreen';

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
      <Box sx={{ height: 56, display: 'flex', alignItems: 'center', px: 1 }}>
        {canGoBack && (
          <IconButton onClick={pop} aria-label="Go back">
            <ArrowBackIosNew />
          </IconButton>
        )}
      </Box>
      {renderScreen()}
    </Box>
  );
}
