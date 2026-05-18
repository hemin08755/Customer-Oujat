import React from "react";
import { Box } from "@mui/material";

export default function BoxStepper({ steps = 4, activeStep = 0 }) {
  return (
    <Box sx={{ display: "flex", gap: "12px" }}>
      {Array.from({ length: steps }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            height: 12,
            borderRadius: "30px",
            backgroundColor: index <= activeStep ? "#FC5722" : "#E0E0E0",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
}
