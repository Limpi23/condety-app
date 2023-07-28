import { createContext, useState, ReactNode } from 'react';
import { ThemeColors } from '../constants/colors'; 

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: keyof ThemeColors;
  setTheme: React.Dispatch<React.SetStateAction<keyof ThemeColors>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<keyof ThemeColors>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};