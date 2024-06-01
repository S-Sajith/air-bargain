import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import LeftMenu from "./components/LeftMenu";
import HeroPage from "./pages/HeroPage";
import Footer from "./components/Footer";
import lightTheme from "./common/themes/LightTheme";
import darkTheme from "./common/themes/DarkTheme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <LeftMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
