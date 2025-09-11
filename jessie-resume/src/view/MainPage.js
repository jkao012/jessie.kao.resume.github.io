import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const MainPage = ({ value }) => {
  const theme = useTheme();

  return (
    <Box width="100%" justifyContent="center" display="flex">
      {/* <TabPanel value="1"></TabPanel> */}

      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{ justifyContent: "flex-start", mx: 10, my: 5 }}
      >
        <Typography variant="h2" sx={{ color: theme.palette.primary.dark }}>
          Welcome to Jessie Kao's Portfolio!
        </Typography>
        <Typography variant="h5" sx={{ color: theme.palette.primary.dark }}>
          Jessie is a GIS master graduate who offers GIS-based digital services
          to achieve sustainability and accelerate smart society development.
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
