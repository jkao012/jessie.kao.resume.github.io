import React from "react";
import MainPage from "./view/MainPage";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Home Page");
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: theme.palette.background.main,
        }}
      >
        <Box
          sx={{
            minHeight: "500px",
            display: "fixed",
            flexDirection: "column",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <AppHeader value={value} setValue={setValue} />
        </Box>
        {/* <AppFooter /> */}
      </Box>
    </>
  );
}

export default App;
