import React, { createContext, useContext, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

interface AppearanceContextType {
    appearance: Appearance;
    setAppearance: (appearance: Appearance) => void;
}

const AppearanceContext = createContext<AppearanceContextType | undefined>(undefined);

export function AppearanceProvider({ children }: { children: React.ReactNode }) {
    const [appearance, setAppearance] = useState<Appearance>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('appearance') as Appearance) || 'system';
        }
        return 'system';
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const root = window.document.documentElement;
        
        const applyTheme = (theme: 'light' | 'dark') => {
            root.classList.remove('light', 'dark');
            root.classList.add(theme);
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = () => {
            if (appearance === 'system') {
                applyTheme(mediaQuery.matches ? 'dark' : 'light');
            }
        };

        localStorage.setItem('appearance', appearance);

        if (appearance === 'system') {
            applyTheme(mediaQuery.matches ? 'dark' : 'light');
            mediaQuery.addEventListener('change', handleSystemThemeChange);
            return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else {
            applyTheme(appearance);
        }
    }, [appearance]);

    return (
        <AppearanceContext.Provider value={{ appearance, setAppearance }}>
            {children}
        </AppearanceContext.Provider>
    );
}

export function useAppearance() {
    const context = useContext(AppearanceContext);
    if (context === undefined) {
        throw new Error('useAppearance must be used within an AppearanceProvider');
    }
    return context;
}
