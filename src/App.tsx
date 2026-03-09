import { NavigationProvider } from './context/NavigationContext';
import { EventRepositoryProvider } from './context/EventRepositoryContext';
import { SavedLocationsProvider } from './context/SavedLocationsContext';
import { ClassRepositoryProvider } from './context/ClassRepositoryContext';
import NavigationLayout from './layouts/NavigationLayout';

export default function App() {
  return (
    <SavedLocationsProvider>
      <EventRepositoryProvider>
        <ClassRepositoryProvider>
          <NavigationProvider>
            <NavigationLayout />
          </NavigationProvider>
        </ClassRepositoryProvider>
      </EventRepositoryProvider>
    </SavedLocationsProvider>
  );
}
