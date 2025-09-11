import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainPage from "../view/MainPage";

const AppHeader = ({ value, setValue }) => {
  const theme = useTheme();

  const handleTextColor = (tabValue) => {
    return value === tabValue ? "#7a5e4bff" : theme.palette.primary.main;
  };
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            boxShadow: 1,
            display: "flex",
            justifyContent: "flex-end",
            backgroundColor: theme.palette.background.main,
          }}
        >
          <Box display="flex" sx={{ flexGrow: 1, alignItems: "center", ml: 2 }}>
            <Typography
              sx={{
                textfont: "18px",
                fontWeight: "bold",
                color: theme.palette.primary.dark,
              }}
            >
              JESSIE'S PORTFOLIO
            </Typography>
          </Box>
          <TabList
            textColor="#7a5e4bff"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#7a5e4bff",
              },
              mr: 2,
              mb: 1,
            }}
            onChange={handleTabChange}
          >
            <Tab
              label="Home Page"
              sx={{ color: handleTextColor("1"), fontSize: "16px" }}
              value="1"
            />
            <Tab
              label="Education"
              sx={{ color: handleTextColor("2"), fontSize: "16px" }}
              value="2"
            />
            <Tab
              label="Projects"
              sx={{ color: handleTextColor("3"), fontSize: "16px" }}
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MainPage />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AppHeader;
