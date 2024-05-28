import { CssBaseline, ThemeProvider } from "@mui/material";
import LeftMenu from "./components/LeftMenu";
import HeroPage from "./pages/HeroPage";
import Footer from "./components/Footer";
import lightTheme from "./common/themes/LightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <LeftMenu />
      <HeroPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
