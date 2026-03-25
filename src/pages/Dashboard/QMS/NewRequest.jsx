import { Box } from "@mui/material";
import React from "react";
import ShipperDashboard from "../../../components/Sidebar";

export default function Quotes(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <ShipperDashboard />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*  */}

        <Box
          sx={{
            px: 2,
            height: 52,
          }}
        ></Box>

        {/*  */}
      </Box>
    </Box>
  );
}
