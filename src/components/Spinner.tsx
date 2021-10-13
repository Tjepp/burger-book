import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner: React.FC = () => {
  return (
    <Box flexGrow={1} style={{ alignItems: "center", display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
