import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComingSoonScreen from '../screens/ComingSoonScreen';
import HomeScreen from '../screens/HomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import BackendAppLayout from './BackendAppLayout';
import PublicAppLayout from './PublicAppLayout';

export default function AppRouterLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/backend/ui" element={<BackendAppLayout />} />
        <Route path="/backend/ui/" element={<BackendAppLayout />} />
        <Route path="/" element={<PublicAppLayout />}>
          <Route index element={<ComingSoonScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
