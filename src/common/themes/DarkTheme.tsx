import { createTheme } from "@mui/material/styles";

const font_family =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#494c7d",
    },
    secondary: {
      main: "#2a9461",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  typography: {
    body1: {
      fontFamily: font_family,
      color: "#ffffff",
    },
    body2: {
      fontFamily: font_family,
      color: "#b0b0b0",
    },
    h1: {
      fontFamily: font_family,
      color: "#ffffff",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h2: {
      fontFamily: font_family,
      color: "#ffffff",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h3: {
      fontFamily: font_family,
      color: "#ffffff",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h4: {
      fontFamily: font_family,
      color: "#ffffff",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h5: {
      fontFamily: font_family,
      color: "#ffffff",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h6: {
      fontFamily: font_family,
      color: "#ffffff",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    subtitle2: {
      fontFamily: font_family,
      color: "#b0b0b0",
      "&:first-child": {
        marginTop: "0px",
      },
    },
    subtitle1: {
      fontFamily: font_family,
      color: "#b0b0b0",
      "&:first-child": {
        marginTop: "0px",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212",
          color: "#ffffff",
          maxHeight: "100vh",
          overflowY: "hidden",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          padding: "3px",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export default darkTheme;
