import * as React from "react";
import Box from "@mui/material/Box";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import HttpIcon from "@mui/icons-material/Http";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PatternIcon from "@mui/icons-material/Pattern";

import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SmsIcon from "@mui/icons-material/Sms";
import AddIcon from "@mui/icons-material/Add";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DescriptionIcon from "@mui/icons-material/Description";

const drawerWidth = 280;

export default function ItemsDrawer() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {isMobileOrTablet && (
        <IconButton
          onClick={handleToggle}
          aria-label={open ? "Close Menu" : "Open Menu"}
          color="primary"
          size="medium"
          sx={{ position: "absolute", left: 0, zIndex: 1 }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: 12,
          },
        }}
        variant={isMobileOrTablet ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ paddingTop: "20px", textAlign: "center" }}>
          <IconButton
            aria-label="contained"
            color="primary"
            size="medium"
            sx={{ transform: "rotate(-40deg)" }}
          >
            <SendIcon sx={{ fontSize: 36 }} />
          </IconButton>
          <Typography variant="h5" noWrap sx={{ marginTop: "10px" }}>
            Telegram <br /> Expert
          </Typography>
        </Box>
        <List>
          <ListItem button onClick={handleToggle}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Submenu items can go here */}
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Pannel account" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Account action" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>
            <ListItemText primary="Gathering audience" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SmsIcon />
            </ListItemIcon>
            <ListItemText primary="Sending SMS" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Invite" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Phone numbers" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InsertChartIcon />
            </ListItemIcon>
            <ListItemText primary="Interplot" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create chats" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FolderSpecialIcon />
            </ListItemIcon>
            <ListItemText primary="Special modules" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContentCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Cloner" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reporter" />
            <ExpandMoreIcon />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
            <ExpandMoreIcon />
          </ListItem>
          <Box sx={{ marginTop: "20px" }}>
            <ListItem button>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText primary="Buy Accounts" />
              <ExpandMoreIcon />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PatternIcon />
              </ListItemIcon>
              <ListItemText primary="Proxy Patterns" />
              <ExpandMoreIcon />
            </ListItem>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
              <ExpandMoreIcon />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <HttpIcon />
              </ListItemIcon>
              <ListItemText primary="Proxy" />
              <ExpandMoreIcon />
            </ListItem>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
}
