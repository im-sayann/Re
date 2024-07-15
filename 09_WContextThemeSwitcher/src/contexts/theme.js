import { createContext, useContext } from "react";

// Create a context with default values for theme management
export const ThemeContext = createContext({
    themeMode: 'light',           // Default theme mode is 'light'
    darkTheme: () => {},         // Placeholder function for dark theme toggle
    lightTheme: () => {},       // Placeholder function for light theme toggle
})

// Export the Provider component for ThemeContext
export const ThemeProvider = ThemeContext.Provider

// Custom hook to consume the ThemeContext
export default function useTheme () {
    return useContext(ThemeContext)
}
