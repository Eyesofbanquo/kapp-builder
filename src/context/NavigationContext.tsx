/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Screen } from '../types/navigation';

interface ScreenEntry {
  screen: Screen;
  params?: Record<string, string>;
}

interface NavigationContextValue {
  push: (screen: Screen, params?: Record<string, string>) => void;
  pop: () => void;
  replaceWith: (screen: Screen, params?: Record<string, string>) => void;
  canGoBack: boolean;
  currentScreen: Screen;
  currentParams: Record<string, string> | undefined;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<ScreenEntry[]>([{ screen: 'main' }]);

  const push = (screen: Screen, params?: Record<string, string>) =>
    setStack((s) => [...s, { screen, params }]);

  const pop = () => setStack((s) => s.slice(0, -1));

  const replaceWith = (screen: Screen, params?: Record<string, string>) =>
    setStack((s) => [...s.slice(0, -1), { screen, params }]);

  const canGoBack = stack.length > 1;
  const current = stack[stack.length - 1];
  const currentScreen = current.screen;
  const currentParams = current.params;

  return (
    <NavigationContext.Provider value={{ push, pop, replaceWith, canGoBack, currentScreen, currentParams }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
