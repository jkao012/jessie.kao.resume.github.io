import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const MainPage = () => {
  const theme = useTheme();
  return (
    <Box width="100%" minHeight="500px" justifyContent="center" display="flex">
      <Box
        display="flex"
        flexDirection="column"
        sx={{ justifyContent: "flex-start" }}
      >
        <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
          Jessie Kao
        </Typography>
        <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
          Wellcome to my resume website!
        </Typography>
      </Box>
    </Box>
  );
};
export default MainPage;
