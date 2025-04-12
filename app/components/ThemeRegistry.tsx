"use client";

import * as React from 'react';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from '../getLPTheme';

// Create a context for color mode
export const ColorModeContext = React.createContext({
  mode: 'light' as PaletteMode,
  toggleColorMode: () => {},
});

// Custom hook to use the color mode context
export const useColorMode = () => React.useContext(ColorModeContext);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  // Create a theme instance with the current mode
  const theme = React.useMemo(() => {
    return createTheme(getLPTheme(mode));
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}