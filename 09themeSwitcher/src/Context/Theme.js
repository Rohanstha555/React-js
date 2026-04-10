import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    DefaultTheme: "light",
    LightThemeMode: () => {},
    DarkThemeMode: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export  const useTheme  = () => {
    return useContext(ThemeContext  )
}