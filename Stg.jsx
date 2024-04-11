// Stg.jsx

import React, { useState } from "react";
import ItemsDrawer from "./../NavigationDrawer/ItemsDrawer";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import { Check, Block } from "@mui/icons-material";

const Setting = () => {
  // Existing state and function for License Key
  const dummyLicenseKey = "ABCD1234EFGH5678";
  const [showKey, setShowKey] = useState(false);
  const handleToggleKey = () => {
    setShowKey(!showKey);
  };

  // New state and functions for Connection Settings
  const [proxyType, setProxyType] = useState("settings");
  const [timeoutValue, setTimeoutValue] = useState("15");
  const [proxyChange, setProxyChange] = useState(false);
  const [proxyChangeCount, setProxyChangeCount] = useState("");
  const [threadCount, setThreadCount] = useState("");
  const [minDelay, setMinDelay] = useState("");
  const [maxDelay, setMaxDelay] = useState("");

  const handleProxyChange = (event) => {
    setProxyType(event.target.value);
  };

  const handleProxyChangeToggle = () => {
    setProxyChange(!proxyChange);
  };

  return (
    <>
      <ItemsDrawer />
      <Container
        maxWidth="lg"
        sx={{
          marginLeft: { xs: 0, sm: "260px" },
          marginRight: "auto",
          paddingTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box display="grid" gap={2} width="100%">
          {/* Existing License Key section */}
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              License Key
            </Typography>
            <Paper elevation={1} sx={{ padding: 2 }}>
              <Typography
                variant="body1"
                sx={{ visibility: showKey ? "visible" : "hidden" }}
              >
                {dummyLicenseKey}
              </Typography>
              <Typography
                variant="h5"
                sx={{ visibility: showKey ? "hidden" : "visible" }}
              >
                {"*".repeat(dummyLicenseKey.length)}
              </Typography>
            </Paper>
            <Grid container spacing={2} marginTop={2}>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    background: "linear-gradient(to right, #5f2c82, #49a09d)",
                    width: "150px", // Larger button size
                  }}
                  onClick={handleToggleKey}
                >
                  {showKey ? "Hide Key" : "Show Key"}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    border: "1px solid #5f2c82",
                    width: "150px", // Larger button size
                  }}
                  onClick={() => navigator.clipboard.writeText(dummyLicenseKey)}
                >
                  Copy Key
                </Button>
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ padding: 2, marginTop: 2 }}>
              Connection Settings
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ marginRight: "20px" }}>
                  <Typography variant="body1" gutterBottom>
                    Use Proxy
                  </Typography>
                  <Select
                    value={proxyType}
                    onChange={handleProxyChange}
                    style={{ height: "40px" }}
                  >
                    <MenuItem value="off">Disable</MenuItem>
                    <MenuItem value="settings">
                      Use proxy from settings
                    </MenuItem>
                    <MenuItem value="account">Use proxy from account</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ marginLeft: "20px" }}>
                  <Typography variant="body1" gutterBottom>
                    Timeout (Timeout)
                  </Typography>
                  <TextField
                    type="number"
                    value={timeoutValue}
                    onChange={(e) => setTimeoutValue(e.target.value)}
                    placeholder="15"
                    style={{ width: "100px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">sec</InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Setting;
