
import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Card from "./Component/Card";
import Togglebtn from "./Component/Togglebtn";


function App() {

  const[DefaultTheme, setDefaultTheme] = useState("light")

  const LightThemeMode = () => {
    setDefaultTheme("light")
  }
  const DarkThemeMode = () => {
    setDefaultTheme("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')

    document.querySelector('html').classList.add(DefaultTheme)

  }, [DefaultTheme])
  

  return (
    <ThemeProvider value={{DefaultTheme, LightThemeMode, DarkThemeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Togglebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
