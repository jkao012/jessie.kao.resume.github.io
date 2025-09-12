import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Banner from "../icon/GIS_banner.jpg";

const MainPage = ({ value }) => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      // justifyContent="center"
      display="flex"
      // sx={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%), url(${Banner})`,
      //   backgroundSize: "cover",
      // }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          justifyContent: "flex-start",
          mx: 10,
          mt: 5,
          mb: 10,
          width: "70%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.background.main,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Welcome to Jessie's Portfolio!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.background.main,
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
          Hi! This is Jessie Kao. I am a GIS master graduate who offers
          GIS-based digital advisory to achieve sustainability and accelerate
          smart society development.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.background.main,
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
          }}
        >
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
