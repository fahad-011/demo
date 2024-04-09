// UploadDialog.jsx
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

const UploadDialog = ({ open, onClose }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = () => {
    // Check if files were selected
    if (files.length === 0) {
      console.error("No files selected");
      return;
    }

    // Prompt the user to choose a directory for saving files
    window
      .showDirectoryPicker()
      .then(async (directoryHandle) => {
        // Iterate over each selected file
        for (const file of files) {
          const reader = new FileReader();

          // Create a new Promise to read the file content asynchronously
          const fileContentPromise = new Promise((resolve, reject) => {
            reader.onload = function () {
              resolve(reader.result);
            };
            reader.onerror = function () {
              reject(reader.error);
            };
          });

          // Read the selected file as ArrayBuffer
          reader.readAsArrayBuffer(file);

          // Wait for the file content to be loaded
          const fileContent = await fileContentPromise;

          const fileName = file.name;

          // Create a writable file in the chosen directory
          directoryHandle
            .getFileHandle(fileName, { create: true })
            .then(async (fileHandle) => {
              // Create a writable stream to write the file content
              const writableStream = await fileHandle.createWritable();
              const writer = writableStream.getWriter();

              // Write the file content to the writable stream
              await writer.write(new Uint8Array(fileContent));

              // Close the writable stream
              await writer.close();

              console.log(
                `File ${fileName} saved successfully at ${fileHandle.name}`
              );
              onClose();
            })
            .catch((error) => {
              console.error(`Error saving file ${fileName}:`, error);
            });
        }
      })
      .catch((error) => {
        console.error("Error choosing directory:", error);
      });
  };

  return (
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
            Upload Accounts
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
            style={{ marginTop: 16, width: "100%" }}
          />
        </Box>
      </DialogContent>
      <DialogActions style={{ paddingTop: 0 }}>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleUpload} color="primary" variant="contained">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadDialog;
