import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Screen } from '../types/navigation';

interface NavigationContextValue {
  push: (screen: Screen) => void;
  pop: () => void;
  canGoBack: boolean;
  currentScreen: Screen;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<Screen[]>(['main']);

  const push = (screen: Screen) => setStack((s) => [...s, screen]);
  const pop = () => setStack((s) => s.slice(0, -1));
  const canGoBack = stack.length > 1;
  const currentScreen = stack[stack.length - 1];

  return (
    <NavigationContext.Provider value={{ push, pop, canGoBack, currentScreen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
