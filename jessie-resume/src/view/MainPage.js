import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Banner from "../icon/GIS_banner.jpg";
import Timeline from "../component/Timeline";

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
      flexDirection="column"
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
          Builder) and being a frontend development beginner.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mx: 10,
          mb: 10,
        }}
      >
        <Typography variant="h3">Education</Typography>
        <Box display="flex" flexDirection="row" width="100%" gap={3}>
          <Button
            sx={{
              backgroundColor: theme.palette.background.dark,
              width: "50%",
            }}
          >
            <Box display="flex" flexDirection="column" gap={1} padding={2}>
              <Typography variant="h4">My Bachelor Degree</Typography>
            </Box>
          </Button>
          <Button
            sx={{
              backgroundColor: theme.palette.background.dark,
              width: "50%",
            }}
          >
            <Box display="flex" flexDirection="column" gap={1} padding={2}>
              <Typography variant="h4">My Master Degree</Typography>
            </Box>
          </Button>
        </Box>
      </Box>
      <Timeline />
    </Box>
  );
};
export default MainPage;
