import { Box, IconButton } from '@mui/material';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import { useNavigation } from '../context/NavigationContext';
import MainScreen from '../screens/MainScreen';
import CreateEventScreen from '../screens/CreateEventScreen';

export default function NavigationLayout() {
  const { canGoBack, pop, currentScreen } = useNavigation();

  return (
    <Box>
      <Box sx={{ height: 56, display: 'flex', alignItems: 'center', px: 1 }}>
        {canGoBack && (
          <IconButton onClick={pop} aria-label="Go back">
            <ArrowBackIosNew />
          </IconButton>
        )}
      </Box>
      {currentScreen === 'createEvent' ? <CreateEventScreen /> : <MainScreen />}
    </Box>
  );
}
