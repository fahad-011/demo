<Button
        variant="contained"
        startIcon={<SearchIcon />}
        sx={{
          fontSize: "medium",
          padding: "12px 24px",
          borderRadius: "30px",
          marginLeft: { xs: "8px", sm: 0 },
          "&:hover": {
            boxShadow: "0px 4px 4px rgba(0, 0, 255, 0.25)",
          },
        }}
        onClick={onCheckProxyStatus}
      >
        Check It out!
      </Button>
