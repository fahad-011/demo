import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const ActionDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent
        sx={{ display: "flex", backgroundColor: "#121212", padding: "20px" }}
      >
        {/* First Column */}
        <div style={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: "#3cc7b1" }}>
            CHECK
          </Typography>
          <List
            sx={{
              "& .MuiListItem-root:hover": {
                backgroundColor: "#52958d",
              },
              color: "#ffffff",
            }}
          >
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Check for ban" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Check for limits" />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ color: "#3cc7b1" }}>
            SETTING UP ACCOUNTS
          </Typography>
          <List
            sx={{
              "& .MuiListItem-root:hover": {
                backgroundColor: "#52958d",
              },
              color: "#ffffff",
            }}
          >
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Set photo" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Delete photo" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Update photo" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Set names" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Set username" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Remove username" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Set gender" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Set bio" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Delete bio" />
            </ListItem>
          </List>
        </div>

        {/* Second Column */}
        <div style={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: "#3cc7b1" }}>
            SECURITY
          </Typography>
          <List
            sx={{
              "& .MuiListItem-root:hover": {
                backgroundColor: "#52958d",
              },
              color: "#ffffff",
            }}
          >
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Set 2-FA" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Remove 2-FA" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Get authorization code" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Close third party sessions" />
            </ListItem>
            <ListItem button>
              <SettingsIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="Maintain account online" />
            </ListItem>
          </List>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActionDialog;
