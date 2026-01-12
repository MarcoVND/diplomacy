import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme as useNativewindColorScheme } from 'nativewind';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import { themes } from './theme';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    activeTheme: any;
    resetToSystem?: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system' 
}: { 
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
}) {
    const systemColorScheme = (useNativeColorScheme() as ThemeType) || 'light';

    // Theme that is actually applied
    const [theme, setTheme] = useState<ThemeType>(
      defaultTheme === 'system' ? systemColorScheme : (defaultTheme as ThemeType)
    );

    // If null -> no explicit user preference stored (follow system when defaultTheme === 'system')
    const [userPreference, setUserPreference] = useState<ThemeType | null>(null);

    const { setColorScheme } = useNativewindColorScheme();
    const STORAGE_KEY = '@diplomacy:theme';

    // Load stored preference on mount
    useEffect(() => {
      (async () => {
        try {
          const stored = await AsyncStorage.getItem(STORAGE_KEY);
          if (stored === 'light' || stored === 'dark') {
            setUserPreference(stored);
            setTheme(stored);
          } else {
            if (defaultTheme === 'system') {
              setTheme(systemColorScheme);
            } else {
              setTheme(defaultTheme as ThemeType);
            }
          }
        } catch {
          // ignore errors, keep current theme
        }
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // If default is system and user has no stored preference, follow system changes
    useEffect(() => {
      if (defaultTheme === 'system' && userPreference == null) {
        setTheme(systemColorScheme);
      }
    }, [systemColorScheme, defaultTheme, userPreference]);

    // Inform nativewind about the active scheme
    useEffect(() => {
        setColorScheme(theme);
    }, [theme, setColorScheme]);

    // Setter that persists user's explicit choice
    const handleSetTheme = async (newTheme: ThemeType) => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, newTheme);
        setUserPreference(newTheme);
      } catch {
        // ignore persistence errors
      }
      setTheme(newTheme);
    };

    const resetToSystem = async () => {
      try {
        await AsyncStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
      setUserPreference(null);
      if (defaultTheme === 'system') {
        setTheme(systemColorScheme);
      } else {
        setTheme(defaultTheme as ThemeType);
      }
    };

    const activeTheme = themes[theme];

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, activeTheme, resetToSystem }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}