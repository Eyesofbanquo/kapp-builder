import { NavigationProvider } from './context/NavigationContext';
import { EventRepositoryProvider } from './context/EventRepositoryContext';
import NavigationLayout from './layouts/NavigationLayout';

export default function App() {
  return (
    <EventRepositoryProvider>
      <NavigationProvider>
        <NavigationLayout />
      </NavigationProvider>
    </EventRepositoryProvider>
  );
}
