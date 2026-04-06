'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Read from localStorage after mount
    try {
      const stored = localStorage.getItem('theme') || 'dark';
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
      document.documentElement.setAttribute('data-theme', next);
    } catch (e) {}
  };

  // Always render children — no null, no mounted gate
  // This prevents React from unmounting/remounting child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
