import { PublicPaletteProvider } from '../context/PublicPaletteContext';
import PublicAppFrame from './PublicAppFrame';

export default function PublicAppLayout() {
  return (
    <PublicPaletteProvider>
      <PublicAppFrame />
    </PublicPaletteProvider>
  );
}
