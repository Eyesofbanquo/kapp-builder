import { Box } from '@mui/material';
import { ClassRepositoryProvider } from '../context/ClassRepositoryContext';
import { EventRepositoryProvider } from '../context/EventRepositoryContext';
import { NavigationProvider } from '../context/NavigationContext';
import { SavedLocationsProvider } from '../context/SavedLocationsContext';
import NavigationLayout from './NavigationLayout';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

export default function BackendAppLayout(props: Props) {
  void props;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <SavedLocationsProvider>
        <EventRepositoryProvider>
          <ClassRepositoryProvider>
            <NavigationProvider>
              <NavigationLayout />
            </NavigationProvider>
          </ClassRepositoryProvider>
        </EventRepositoryProvider>
      </SavedLocationsProvider>
    </Box>
  );
}
