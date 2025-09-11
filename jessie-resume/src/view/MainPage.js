import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

const MainPage = () => {
  const theme = useTheme();
  return (
    <Box width="100%" justifyContent="center" display="flex">
      <Box
        display="flex"
        flexDirection="column"
        sx={{ justifyContent: "center" }}
      >
        <Typography variant="h5">Jessie Kao Resume</Typography>
      </Box>
    </Box>
  );
};
export default MainPage;
