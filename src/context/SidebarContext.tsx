'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isSidebarOpen: boolean;
  setisSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktopSidebarOpen: boolean;
  setisDesktopSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(true);
  const [isDesktopSidebarOpen, setisDesktopSidebarOpen] = useState<boolean>(true);
  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        setisSidebarOpen,
        isDesktopSidebarOpen,
        setisDesktopSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useSidebar must be used within SidebarProvider');
  return context;
};
