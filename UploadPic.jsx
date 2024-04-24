import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetPhotoDialog = ({ open, onClose, handleSetPhoto, files, setFiles }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map(
      (file) => file.name
    );
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      console.error("No files selected");
      return;
    }

    setUploading(true);

    try {
      // Call parent component's handleSetPhoto function with file names
      handleSetPhoto();
      toast.success("Files uploaded successfully");
      onClose();
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Error uploading files");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 8,
            backgroundColor: "#fff",
          },
        }}
      >
        <DialogTitle style={{ paddingBottom: 8 }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <CloudUpload fontSize="large" color="primary" />
            <Typography
              variant="h6"
              style={{ marginLeft: 8, fontSize: "1.25rem" }}
            >
              Upload Profile Pictures
            </Typography>
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <input
              type="file"
              onChange={handleFileChange}
              multiple
              style={{ width: "100%" }}
            />
          </Box>
        </DialogContent>
        <DialogActions style={{ paddingTop: 0 }}>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            color="primary"
            variant="contained"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer position="top-right" />
    </>
  );
};

export default SetPhotoDialog;
