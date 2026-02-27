import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShipperDashboard from "./Sidebar";
import Navbar from "./Navbar";
import image02 from "../assets/images/img2.svg";
import Filter from "../assets/logo/Frame.png";

function Services() {
  // ✅ Services Data Array
  const servicesData = [
    {
      id: 1,
      title: "Criselox Logistic Limited",
      city: "Mumbai, India",
      destination: "Doha, Saudi Arabia",
      price: "$25500.00 / Kg",
      rating: "4.0",
      image: image02,
    },
    {
      id: 2,
      title: "Criselox Logistic Limited",
      city: "Mumbai, India",
      destination: "Doha, Saudi Arabia",
      price: "$25500.00 / Kg",
      rating: "4.0",
      image: image02,
    },
    {
      id: 3,
      title: "Criselox Logistic Limited",
      city: "Mumbai, India",
      destination: "Doha, Saudi Arabia",
      price: "$25500.00 / Kg",
      rating: "4.0",
      image: image02,
    },
    {
      id: 4,
      title: "Criselox Logistic Limited",
      city: "Mumbai, India",
      destination: "Doha, Saudi Arabia",
      price: "$25500.00 / Kg",
      rating: "4.0",
      image: image02,
    },
  ];

  // ✅ Reusable Card Component
  const ServiceCard = ({ data }) => {
    return (
      <Box
        sx={{
          border: "1px solid #EAECF0",
          borderRadius: "12px",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#fff",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={data.image}
          alt="service"
          sx={{
            width: "100%",
            height: 192,
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        {/* Title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              font: "Plus Jakarta Sans, sans-serif",
              fontWeight: 600,
              fontSize: { lg: "19px", md: "19px", sm: "19px", xs: "19px" },
              lineHeight: "100%",
              fontStyle: "SemiBold",
              color: "#000000",
            }}
          >
            {data.title}
          </Typography>

          <Typography fontSize="14px">⭐ {data.rating}</Typography>
        </Box>

        {/* Locations */}
        <Typography fontSize="14px" color="#667085">
          {data.city} → {data.destination}
        </Typography>

        {/* Price & Rating */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography fontWeight={600} color="#5F7388">
            From
          </Typography>
          <Typography fontWeight={600} color="#000000">
            {data.price}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <ShipperDashboard />

      <Box
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - 260px)` },
        }}
      >
        <Navbar />

        <Container maxWidth="xl" sx={{ mt: -4 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",

              gap: "16px",
              mb: 3,
            }}
          >
            <Box sx={{ width: "519px" }}>
              <Typography fontWeight={700} fontSize="22px">
                My Services
                <span style={{ color: "#FC5722" }}>
                  ({servicesData.length})
                </span>
              </Typography>
            </Box>

            {/* Search */}
            <TextField
              placeholder="Search"
              size="small"
              sx={{
                width: 280,

                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                width: { xs: "100%", sm: "106px", md: "106px", lg: "106px" },
                height: "48px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #E7E9ED",
                borderRadius: "8px",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={Filter}
                alt="logo"
                sx={{ width: 24, height: 24 }}
              />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: { lg: "14px", md: "14px", sm: "14px", xs: "14px" },
                  lineHeight: "150%",
                  fontStyle: "SemiBold",
                  color: "#344054",
                }}
              >
                Filters
              </Typography>
            </Box>

            {/* Add Button */}
            <Button
              sx={{
                backgroundColor: "#FC5722",
                width: "164px",
                height: "48px",
                color: "#fff",
                borderRadius: "8px",
                px: 3,
                textTransform: "none",
                "&:hover": { backgroundColor: "#e14e1f" },
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 800,
                  fontSize: { lg: "14px", md: "14px", sm: "14px", xs: "14px" },
                  lineHeight: "100%",
                  fontStyle: "ExtraBold",
                  color: "#FFFFFF",
                }}
              >
                Add New Service
              </Typography>
            </Button>
          </Box>

          {/* Cards Grid */}
          <Grid container spacing={3} justifyContent="center">
            {servicesData.map((item) => (
              <Grid xs={12} sm={6} md={6} lg={4} key={item.id}>
                <ServiceCard data={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Services;
