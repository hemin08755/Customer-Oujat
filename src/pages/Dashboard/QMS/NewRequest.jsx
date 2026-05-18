import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ShipperDashboard from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import international from "../../../assets/images/international.svg";
import citywide from "../../../assets/images/citywide.svg";
import citytocity from "../../../assets/images/citytocity.svg";
import customs from "../../../assets/images/customs.svg";
import warehouse from "../../../assets/images/warehouse.svg";
import port from "../../../assets/images/port.svg";
import brokerage from "../../../assets/images/brokerage.svg";

import { useNavigate } from "react-router-dom";

export default function Quotes(props) {
  const [fixedSidebar] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const requestOptions = [
    {
      title: "International Transport",
      img: international,
      accent: "#FF6B35",
      route: "/quote1",
    },
    { title: "Domestic Transport Citywide", img: citywide, accent: "#FF6B35" },
    {
      title: "Domestic Transport City-to-City",
      img: citytocity,
      accent: "#FF6B35",
    },
    { title: "Customs Services", img: customs, accent: "#FF6B35" },
    { title: "Warehouse Services", img: warehouse, accent: "#FF6B35" },
    { title: "Port Agency Services", img: port, accent: "#FF6B35" },
    { title: "Brokerage Services", img: brokerage, accent: "#FF6B35" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <ShipperDashboard />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar fixed={fixedSidebar} />

        {/* MAIN CONTENT */}
        <Box
          sx={{
            p: 2,

            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
          }}
        >
          {/* HEADER */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
            <IconButton
              sx={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #e0e0e0",
                "&:hover": { backgroundColor: "#e8e8e8" },
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 20, color: "#000" }} />
            </IconButton>

            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 600,
                fontSize: "20px",
                color: "#000000",
              }}
            >
              New Open Request
            </Typography>
          </Box>

          {/* SUBTEXT */}
          <Typography
            sx={{
              font: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: "20px",
              color: "#000000",
              mb: 3,
            }}
          >
            Which Open Request do you wish to send?
          </Typography>

          {/* GRID */}
          <Grid container spacing={1}>
            {requestOptions.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  onClick={() => navigate(item.route)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  elevation={0}
                  sx={{
                    height: 186,

                    width: { md: "351px", xs: "358px", lg: "338px" },
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #FC5722",
                    borderColor:
                      hovered === index ? item.accent : "transparent",
                    boxShadow:
                      hovered === index
                        ? `0 6px 20px rgba(0,0,0,0.15)`
                        : "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "all 0.22s ease",
                    transform:
                      hovered === index ? "translateY(-3px)" : "translateY(0)",
                    backgroundColor: "#eee",
                  }}
                >
                  {/* FULL-CARD ILLUSTRATION */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "358px",
                      height: "150px",
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.3s ease",
                      transform: hovered === index ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "62px",

                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
                    }}
                  />

                  {/* BOTTOM ACCENT LINE — visible on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "62px",
                      background:
                        "linear-gradient(180deg, rgba(252,87,34,0) 0%, rgba(252,87,34,1) 100%)",
                      opacity: hovered === index ? 1 : 0,
                      transition: "opacity 0.22s ease",
                    }}
                  />

                  {/* LABEL */}
                  <CardContent
                    sx={{
                      position: "relative",
                      height: "85%",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontStyle: "Bold",
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0.1px",
                        textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
