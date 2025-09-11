import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: "#265F39",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: ["Ubuntu"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: { fontWeight: 500, fontSize: 40 },
    h3: { fontWeight: 500, fontSize: 32 },
    h4: { fontWeight: 500, fontSize: 24 },
    h5: { fontWeight: 500, fontSize: 20 },
    h6: { fontWeight: 500, fontSize: 16 },
    subtitle1: { fontWeight: 600, fontSize: 16 },
    subtitle2: { fontWeight: 600, fontSize: 14 },
    subtitle3: { fontWeight: 600, fontSize: 12 },
    body1: { fontWeight: 400, fontSize: 16 },
    body2: { fontWeight: 400, fontSize: 14 },
    body3: { fontWeight: 400, fontSize: 10 },
    caption: { fontWeight: 400, fontSize: 8 },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 20,
          fontWeight: 400,
        },
        asterisk: {
          color: red[500],
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 20,
          fontWeight: 400,
          color: "#265F39",
          padding: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "16px",
          color: grey[800],
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
        },
        outlined: {
          m: 1,
          backgroundColor: "#F8FCF9",
          color: "#265F39",
          border: "2px solid #24B855",
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
          ":hover": {
            border: "2px solid #265F39",
          },
        },
        outlined_selected: {
          m: 1,
          backgroundColor: "#F8FCF9",
          color: "#265F39",
          border: "2px solid #004b80",
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
          ":hover": {
            border: "2px solid #004b80",
          },
        },
        outlined_weather: {
          m: 1,
          backgroundColor: "#F8FCF9",
          color: "#757575",
          border: `2px solid #757575`,
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
          ":hover": {
            border: `2px solid #757575`,
          },
        },
        contained: {
          m: 1,
          color: "#F8FCF9",
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
        },
        contained_dark: {
          m: 1,
          backgroundColor: "#265F39",
          color: "white",
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
          "&:disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
          },
        },
        contained_select: {
          m: 1,
          backgroundColor: "#A6A6A6",
          color: "gray",
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
        },
        contained_unselect: {
          m: 1,
          backgroundColor: "#A6A6A6",
          color: "white",
          fontWeight: 600,
          fontSize: isBrowser ? "16px !important" : "14px !important",
        },
        Valid: {
          m: 1,
          backgroundColor: "#00ACC1",
          backgroundColor: "#00ACC1",
          color: "white",
          fontWeight: 600,
          fontSize: 20,
          ":hover": {
            backgroundColor: "#00515C",
          },
        },
        Completed: {
          m: 1,
          backgroundColor: "#8A8A8A",
          color: "white",
          fontWeight: 600,
          fontSize: 20,
          ":hover": {
            backgroundColor: "#666565",
          },
        },
        Draft: {
          m: 1,
          backgroundColor: "#C15700",
          color: "white",
          fontWeight: 600,
          fontSize: 20,
          ":hover": {
            backgroundColor: "#7F1210",
          },
        },
      },
    },
  },
});

const ModuleLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default ModuleLayout;
