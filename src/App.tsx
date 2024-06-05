import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import HeroPage from "./pages/HeroPage";
import Footer from "./components/Footer";
import lightTheme from "./common/themes/LightTheme";
import darkTheme from "./common/themes/DarkTheme";
import SearchResults from "./pages/SearchResults";
import { FlightDataProvider } from "./components/FlightDataContext";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <FlightDataProvider>
        <Router>
          <LeftMenu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<HeroPage darkMode={darkMode} />} />
            <Route
              path="/searchResults"
              element={<SearchResults darkMode={darkMode} />}
            />
          </Routes>
          <Footer />
        </Router>
      </FlightDataProvider>
    </ThemeProvider>
  );
}

export default App;
