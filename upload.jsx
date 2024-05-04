<Button
        variant="contained"
        sx={{
          fontSize: "small",
          padding: "8px 16px",
          borderRadius: "12px",
          backgroundColor: "#3F51B5",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            backgroundColor: "#6573c3",
          },
        }}
      >
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          Import Files
        </label>
        <input
          type="file"
          id="file-upload"
          accept=".xls,.xlsx"
          onChange={handleFileUpload}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
        />
      </Button>
