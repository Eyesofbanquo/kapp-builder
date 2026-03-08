import { NavigationProvider } from './context/NavigationContext';
import NavigationLayout from './layouts/NavigationLayout';

export default function App() {
  return (
    <NavigationProvider>
      <NavigationLayout />
    </NavigationProvider>
  );
}
