import { NavigationProvider } from './context/NavigationContext';
import { EventRepositoryProvider } from './context/EventRepositoryContext';
import { SavedLocationsProvider } from './context/SavedLocationsContext';
import NavigationLayout from './layouts/NavigationLayout';

export default function App() {
  return (
    <SavedLocationsProvider>
      <EventRepositoryProvider>
        <NavigationProvider>
          <NavigationLayout />
        </NavigationProvider>
      </EventRepositoryProvider>
    </SavedLocationsProvider>
  );
}
