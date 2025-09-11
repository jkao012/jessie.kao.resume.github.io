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
          Wellcome to my resume website! Jessie is a GIS master graduate who
          offers GIS-based digital services to achieve sustainability and
          accelerate smart society development.
        </Typography>
        <Typography>
          Participated in GIS-based projects to create interactive dashboard and
          app for clients’ needs. Usually approached software and products
          include ArcGIS Pro, ArcGIS Enterprises (Dashboard and Experience
          Builder) and currently approaching to React.js for frontend
          development.
        </Typography>
      </Box>
    </Box>
  );
};
export default MainPage;
