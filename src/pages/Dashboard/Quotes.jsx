import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import ShipperDashboard from "../../components/Sidebar";

import SearchIcon from "@mui/icons-material/Search";
import filter from "../../assets/logo/filter.svg";

import plus from "../../assets/logo/plus 1.svg";
import OpenRequests from "./QMS/OpenRequests";
import PrivateRequests from "./QMS/PrivateRequests";
import PickedQuotes from "./QMS/PickedQuote";
import ExpiredRequests from "./QMS/ExpiredRequests";
import RejectedQuotes from "./QMS/RejectedQuotes";

export default function Quotes(props) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("open");

  const tabs = [
    { label: "My Open Requests", value: "open", path: "/open" },
    { label: "My Private Requests", value: "private", path: "/private" },
    { label: "Picked Quotes", value: "picked", path: "/picked" },
    { label: "Expired Requests", value: "expired", path: "/expired" },
    { label: "Rejected Quotes", value: "rejected", path: "/rejected" },
  ];

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
        {/* <Navbar fixed={fixedSidebar} /> */}
        {/*  */}

        <Grid
          container
          alignItems="center"
          sx={{
            m: "24px",
            bgcolor: "#FFFFFF",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <Grid size={{ xs: 12, md: "auto" }}>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: { md: "26px", xs: "20px", sm: "26px" },
                lineHeight: "150%",
                color: "#000000",
              }}
            >
              Quotes Management System
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: "auto", sm: 12 }}>
            <Grid
              container
              spacing={3}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <Grid size="auto">
                <Box
                  sx={{
                    width: 280,
                    height: 48,
                    border: "1px solid #E7E9ED",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: "#F5F6F8",
                      borderRadius: "8px",
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-input": {
                        padding: "12px 0",
                      },
                    }}
                  />
                </Box>
              </Grid>

              <Grid size="auto">
                <Box
                  sx={{
                    width: 106,
                    height: 48,
                    borderRadius: "8px",
                    border: "1px solid #E7E9ED",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "11px",
                  }}
                >
                  <Box
                    component="img"
                    src={filter}
                    alt="img"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography fontWeight={600} fontSize="14px">
                    Filters
                  </Typography>
                </Box>
              </Grid>

              <Grid size="auto">
                <Box
                  sx={{
                    width: 149,
                    height: 48,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "11px",
                    bgcolor: "#000000",
                  }}
                >
                  <Box
                    component="img"
                    src={plus}
                    alt="img"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography fontWeight={600} fontSize="14px" color="#FFFFFF">
                    New Request
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*  */}

        <Box
          sx={{
            px: 2,
            height: 52,
          }}
        >
          <Grid container spacing={1}>
            {tabs.map((tab) => (
              <Grid size="auto" key={tab.value}>
                <Box
                  onClick={() => setActiveTab(tab.value)}
                  sx={{
                    cursor: "pointer",
                    pb: "10px",
                    width: { lg: 191, md: "auto" },
                    mb: "24px",

                    borderBottom:
                      activeTab === tab.value
                        ? "2px solid #FC5722"
                        : "2px solid transparent",
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontStyle: "SemiBold",
                      lineHeight: "150%",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: { lg: "19px", md: "14px", xs: "10px" },
                      color: activeTab === tab.value ? "#FC5722" : "#667085",
                    }}
                  >
                    {tab.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box>
            {" "}
            {activeTab === "open" && <OpenRequests />}
            {activeTab === "private" && <PrivateRequests />}
            {activeTab === "picked" && <PickedQuotes />}
            {activeTab === "expired" && <ExpiredRequests />}
            {activeTab === "rejected" && <RejectedQuotes />}{" "}
          </Box>
        </Box>

        {/*  */}
      </Box>
    </Box>
  );
}
