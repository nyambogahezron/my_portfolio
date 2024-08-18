import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextProps {
  isAsideNavOpen: boolean;
  setOpenAsideNavOpen: (open: boolean) => void;
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isAsideNavOpen, setOpenAsideNavOpen] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <GlobalContext.Provider
      value={{
        isAsideNavOpen,
        setOpenAsideNavOpen,
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
