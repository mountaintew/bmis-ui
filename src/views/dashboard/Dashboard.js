import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Avatar,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import {TITLE} from "../../constants/environment";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {useState} from "react";
import Modal from "@mui/material/Modal";
import AllInboxRoundedIcon from "@mui/icons-material/AllInboxRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import FilePresentRoundedIcon from "@mui/icons-material/FilePresentRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import DashboardDropzone from "./DashboardDropzone";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import {isEmpty, startCase} from "lodash";
import {Menu} from "@mui/material";
import {MenuItem} from "@mui/material";
import {Link} from "react-router-dom";
import DashboardDemographics from "./DashboardDemographics";

const drawerWidth = 240;

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
function Dashboard(props) {
  const {window, name} = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorProfile, setAnchorProfile] = useState(null);
  const open = Boolean(anchorProfile);

  const [isUploading, setIsUploading] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);

  function toggleProfile(event) {
    setAnchorProfile(anchorProfile ? null : event.currentTarget);
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const [files, setFiles] = useState([]);

  const {fname, lname} = name || {};

  const drawer = (
    <div style={{backgroundColor: "#512DA8", color: "white"}} className="h-100">
      <Toolbar>
        <Typography
          variant="h4"
          noWrap
          sx={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
            py: 3,
          }}
        >
          {TITLE}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          {label: "Inbox", icon: <AllInboxRoundedIcon />},
          {label: "Announcements", icon: <CampaignRoundedIcon />},
          {label: "Document Requests", icon: <FilePresentRoundedIcon />},
          {label: "Residents", icon: <PeopleAltRoundedIcon />},
        ].map((item, index) => {
          const {label, icon} = item || {};

          return (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon sx={{color: "white"}}>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function toggleImport() {
    setImportModalOpen(!importModalOpen);
  }

  return (
    <>
      <Box sx={{display: "flex"}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`},
            backgroundColor: "white",

            color: "#222222",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: "none"}}}
            >
              <MenuIcon />
            </IconButton>
            <div style={{flexGrow: 1}}>
              <FormControl variant="outlined" sx={{minWidth: "800px"}}>
                <InputLabel>Search</InputLabel>
                <OutlinedInput
                  sx={{border: 0}}
                  startAdornment={
                    <InputAdornment position="start">
                      <IconButton edge="end">
                        <SearchRoundedIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
            </div>
            <div className="d-flex align-items-center mx-3 my-4">
              <Avatar
                sx={{width: 40, height: 40, mr: 2}}
                alt="Name"
                src="https://lh3.googleusercontent.com/a-/AOh14Gj4U8ey89ebuvLzQjxpYDqDRagNkwOmsqaht3U9?type=square"
              />
              <Typography sx={{fontWeight: "bold", fontSize: "22px", mr: 2}}>
                {startCase(fname)} {lname && startCase(lname).charAt(0)}.
              </Typography>

              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleProfile}
              >
                <ExpandMoreRoundedIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                open={open}
                anchorEl={anchorProfile}
                onClose={toggleProfile}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={toggleProfile}>Profile</MenuItem>
                <MenuItem
                  component={Link}
                  to="/"
                  sx={{"&:hover": {color: "black"}}}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: {xs: "block", sm: "none"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: {xs: "none", sm: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}

            <div style={{backgroundColor: "#512DA8", color: "white"}}>
              <List>
                <ListItem>
                  <ListItemButton onClick={toggleImport}>
                    <ListItemIcon sx={{color: "white"}}>
                      <CloudUploadRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Import Data" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
        >
          <Toolbar />

          {!isEmpty(files) && !importModalOpen && <DashboardDemographics />}
        </Box>
      </Box>

      <Modal open={importModalOpen} onClose={toggleImport}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{marginBottom: 2}}
          >
            Import Resident Data
          </Typography>

          {files.map((file, index) => {
            const {path} = file || {};
            return (
              <Alert
                severity="info"
                icon={<AttachFileRoundedIcon fontSize="inherit" />}
              >
                {path}
              </Alert>
            );
          })}

          <DashboardDropzone setFiles={setFiles} />
          <Typography id="modal-modal-description" sx={{my: 2}}>
            Accepted files: .xlsx, .xls
          </Typography>
          <div className="d-flex justify-content-end w-100 mr-3">
            {!isEmpty(files) && (
              <Button
                variant="contained"
                onClick={() => {
                  toggleImport();
                  setIsUploading(!isUploading);
                }}
                sx={{flexGrow: 1}}
              >
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Dashboard;
