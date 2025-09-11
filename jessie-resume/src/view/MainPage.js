import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

const MainPage = () => {
  const theme = useTheme();
  return (
    <Box width="100%" minHeight="500px" justifyContent="center" display="flex">
      <Box
        display="flex"
        flexDirection="column"
        sx={{ justifyContent: "center" }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
          Jessie Kao Resume
        </Typography>
      </Box>
    </Box>
  );
};
export default MainPage;
