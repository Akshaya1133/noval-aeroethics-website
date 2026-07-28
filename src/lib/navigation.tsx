'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { type PageId } from '@/lib/company-data';

interface NavigationContextType {
  currentPage: PageId;
  navigate: (page: PageId) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const navigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
