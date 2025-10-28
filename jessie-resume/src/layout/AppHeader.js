import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainPage from "../view/MainPage";
import Icon from "../icon/earth.png";

const AppHeader = ({ value, setValue }) => {
  const theme = useTheme();

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
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box display="flex" sx={{ flexGrow: 1, alignItems: "center", ml: 2 }}>
            <img
              src={Icon}
              alt="icon"
              style={{
                maxWidth: "30px",
                maxHeight: "30px",
                marginRight: "10px",
              }}
            />
            <Typography variant="h5">JESSIE KAO</Typography>
          </Box>
          <TabList
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#7a5e4bff",
              },
              mr: 2,
              mb: 1,
            }}
            onChange={handleTabChange}
          >
            {["Home Page", "Education", "Work Experience", "Contact"].map(
              (tab) => (
                <Tab
                  key={tab}
                  label={tab}
                  value={tab}
                  sx={{ ...theme.typography.body2 }}
                />
              )
            )}
          </TabList>
        </Box>
        <TabPanel value="Home Page">
          <MainPage />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AppHeader;
