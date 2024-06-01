import { createTheme } from "@mui/material/styles";

const font_family =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#494c7d",
    },
    secondary: {
      main: "#2a9461",
    },
  },
  typography: {
    body1: {
      fontFamily: font_family,
    },
    body2: {
      fontFamily: font_family,
    },
    h1: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h2: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h3: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h4: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h5: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    h6: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    subtitle2: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
    subtitle1: {
      fontFamily: font_family,
      "&:first-child": {
        marginTop: "0px",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          maxHeight: "100vh",
          overflowY: "hidden",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "background.paper",
          padding: "3px",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export default lightTheme;
