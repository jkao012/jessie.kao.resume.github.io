import React from "react";
import MainPage from "./view/MainPage";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";
// import "./App.css";

function App() {
  const [value, setValue] = useState("1");
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.light,
        }}
      >
        <AppHeader value={value} setValue={setValue} />
        <Box sx={{ flexGrow: 1 }}>{/* <MainPage value={value} /> */}</Box>
        <AppFooter />
      </Box>
    </>
  );
}

export default App;
