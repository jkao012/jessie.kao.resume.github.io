import React from "react";
import MainPage from "./view/MainPage";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";
// import "./App.css";
import Banner from "./icon/GIS_banner.jpg";

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
          backgroundColor: theme.palette.background.main,
          // backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%), url(${Banner})`,
          // backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            minHeight: "500px",
            display: "fixed",
            flexDirection: "column",
            backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255, 252, 245, 1) 100%), url(${Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <AppHeader value={value} setValue={setValue} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>{/* <MainPage value={value} /> */}</Box>
        <AppFooter />
      </Box>
    </>
  );
}

export default App;
