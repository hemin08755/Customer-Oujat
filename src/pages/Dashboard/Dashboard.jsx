import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  DialogActions,
  DialogTitle,
} from "@mui/material";

import ShipperDashboard from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import arrowright from "../../assets/logo/arrow-right.svg";
import frame from "../../assets/logo/Frame.svg";
import mail from "../../assets/logo/mail.svg";
import image from "../../assets/logo/image 1.svg";
import star from "../../assets/logo/star 1.svg";
import air from "../../assets/logo/air.svg";
import india from "../../assets/logo/india.svg";
import qatar from "../../assets/logo/qatar.svg";
import doha from "../../assets/logo/doha.svg";
export default function DashboardLayout() {
  const [fixedSidebar] = useState(false);
  const [openOrdersPopup, setOpenOrdersPopup] = useState(false);
  const [openFavoritePopup, setOpenFavoritePopup] = useState(false);
  const [openLikedPopup, setOpenLikedPopup] = useState(false);

  // orders
  const orders = [
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },

    {
      quoteId: "#1234",
      title: "Electronics Parts",
      origin: "Mumbai, India",
      destination: "Al Rayyan, Qatar",
      leadTime: "30 Days",
    },
  ];

  const favorite = [
    {
      title: " ABC Logistic Services",
      mail: "john.doe@email.com",
      country1: "India",
      country2: "Qatar",
      services: "International Transport",
    },
    {
      title: " ABC Logistic Services",
      mail: "john.doe@email.com",
      country1: "India",
      country2: "Qatar",
      services: "International Transport",
    },
    {
      title: " ABC Logistic Services",
      mail: "john.doe@email.com",
      country1: "India",
      country2: "Qatar",
      services: "International Transport",
    },
    {
      title: " ABC Logistic Services",
      mail: "john.doe@email.com",
      country1: "India",
      country2: "Qatar",
      services: "International Transport",
    },
  ];

  const liked = [
    {
      image: image,

      title: "Criselox Logistic Limited",
      rating: "4.0",
      rating1: "(214)",
      services: "International Transport",
      city: "Mumbai",
      country: "India",
      destination: "Doha, Saudi Arabia",
      from: "$25500.00/ Kg",
      mode: "Air",
    },
    {
      image: image,

      title: "Criselox Logistic Limited",
      rating: "4.0",
      rating1: "(214)",
      services: "International Transport",
      city: "Mumbai",
      country: "India",
      destination: "Doha, Saudi Arabia",
      from: "$25500.00/ Kg",
      mode: "Air",
    },
    {
      image: image,

      title: "Criselox Logistic Limited",
      rating: "4.0",
      rating1: "(214)",
      services: "International Transport",
      city: "Mumbai",
      country: "India",
      destination: "Doha, Saudi Arabia",
      from: "$25500.00/ Kg",
      mode: "Air",
    },
    {
      image: image,

      title: "Criselox Logistic Limited",
      rating: "4.0",
      rating1: "(214)",
      services: "International Transport",
      city: "Mumbai",
      country: "India",
      destination: "Doha, Saudi Arabia",
      from: "$25500.00/ Kg",
      mode: "Air",
    },
  ];
  return (
    <>
      <Dialog
        open={openOrdersPopup}
        onClose={() => setOpenOrdersPopup(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>Orders in Progress</DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            {orders.map((order, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Card
                  sx={{
                    minWidth: 355.3333435058594,
                    height: 210,
                    borderRadius: "20px",
                    border: "1px solid #EAECF0",
                    mb: 2,
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 320.666748046875,
                        height: 20,
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontSize: "14px",
                          lineHeight: "14px",
                          letterSpacing: "0%",
                          color: "#5F7388",
                        }}
                      >
                        Quote ID
                      </Typography>

                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "16px",
                          letterSpacing: "0%",
                        }}
                      >
                        {order.quoteId}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 320.666748046875,
                        height: 26,
                        mt: "16px",
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontSize: "21px",
                          lineHeight: "21px",
                          letterSpacing: "0%",
                        }}
                      >
                        {order.title}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 327.3333435058594,
                        height: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "16px",
                      }}
                    >
                      <Box sx={{ width: 185 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "16px",
                            letterSpacing: "0%",
                            color: "#5F7388",
                          }}
                        >
                          Origin
                        </Typography>
                      </Box>

                      <Box sx={{ width: 142, display: "flex", gap: 1 }}>
                        <Box
                          component="img"
                          src={india}
                          alt="img"
                          sx={{ width: 24, height: 24 }}
                        />
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0%",
                          }}
                        >
                          {order.origin}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        width: 327.3333435058594,
                        height: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "16px",
                      }}
                    >
                      <Box sx={{ width: 185 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "16px",
                            letterSpacing: "0%",
                            color: "#5F7388",
                          }}
                        >
                          Destination
                        </Typography>
                      </Box>

                      <Box sx={{ width: 142, display: "flex", gap: 1 }}>
                        <Box
                          component="img"
                          src={qatar}
                          alt="img"
                          sx={{ width: 24, height: 24 }}
                        />

                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0%",
                          }}
                        >
                          {order.destination}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        width: 327.3333435058594,
                        height: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "16px",
                      }}
                    >
                      <Box sx={{ width: 185 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "16px",
                            letterSpacing: "0%",
                            color: "#5F7388",
                          }}
                        >
                          Lead Time
                        </Typography>
                      </Box>

                      <Box sx={{ width: 142 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0%",
                          }}
                        >
                          {order.leadTime}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenOrdersPopup(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* favoutite dialog */}

      <Dialog
        open={openFavoritePopup}
        onClose={() => setOpenFavoritePopup(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>Orders in Progress</DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            {favorite.map((favorite, index) => (
              <Grid item xs={12} sm={6} md={2} key={index}>
                <Card
                  sx={{
                    minWidth: 355.3333435058594,
                    height: 210,
                    borderRadius: "20px",
                    border: "1px solid #EAECF0",
                    mb: 2,
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ width: 320.666748046875, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontSize: "21px",
                          lineHeight: "21px",
                          letterSpacing: "0%",
                        }}
                      >
                        {favorite.title}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 320.66,
                        height: 24,
                        gap: "14px",
                        display: "flex",
                        alignItems: "center",
                        mt: "16px",
                      }}
                    >
                      <Box
                        component="img"
                        src={mail}
                        alt="img"
                        sx={{ width: 20, height: 20 }}
                      />

                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontSize: "18px",
                          lineHeight: "100%",
                          letterSpacing: 0,
                          color: "#5F7388",
                        }}
                      >
                        {favorite.mail}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 320.666748046875,
                        height: 49,
                        gap: "11px",
                        mt: 2,
                      }}
                    >
                      <Box sx={{ width: 140, height: 18 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "100%",
                            letterSpacing: 0,
                            color: "#5F7388",
                          }}
                        >
                          Countryes of Activity
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: 147,
                          height: 20,
                          display: "flex",
                          gap: "6px",

                          mt: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 65,
                            height: 20,
                            gap: "4px",
                            display: "flex",
                          }}
                        >
                          <Box
                            component="img"
                            src={india}
                            alt="img"
                            sx={{ width: 24, height: 24 }}
                          />
                          <Typography>{favorite.country1}</Typography>
                        </Box>

                        <Box
                          sx={{
                            width: 65,
                            height: 20,
                            gap: "4px",
                            display: "flex",
                          }}
                        >
                          <Box
                            component="img"
                            src={qatar}
                            alt="img"
                            sx={{ width: 24, height: 24 }}
                          />
                          <Typography>{favorite.country2}</Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        width: 320.666748046875,
                        height: 20,
                        gap: "11px",
                        mt: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ width: 180.666748046875, height: 18 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "14px",
                            lineHeight: "100%",
                            letterSpacing: 0,
                          }}
                        >
                          Services
                        </Typography>
                      </Box>
                      <Box sx={{ width: 129, height: 18 }}>
                        <Typography
                          sx={{
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "12px",
                            fontStyle: "Medium",
                            lineHeight: "20px",
                            letterSpacing: 0,
                            color: "#FC5722",
                          }}
                        >
                          {favorite.services}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenFavoritePopup(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* liked dialog */}

      <Dialog
        open={openLikedPopup}
        onClose={() => setOpenLikedPopup(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>Orders in Progress</DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            {liked.map((liked, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 356,
                  height: 410,
                  borderRadius: "10px",
                  border: "1px solid #EAECF0",
                  mb: 2,
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      width: 324,
                      height: 370,
                      gap: "16px",
                    }}
                  >
                    <Box
                      component="img"
                      alt="img"
                      src={liked.image}
                      sx={{
                        width: 324,
                        height: 192,
                        borderRadius: "8px",
                        color: "#EBEBEB",
                      }}
                    />
                    <Box sx={{ width: 324, height: 162, gap: "11px" }}>
                      <Box
                        sx={{
                          height: 26,
                          width: 324,
                          gap: "12px",
                          display: "flex",
                          mt: "16px",
                        }}
                      >
                        <Box sx={{ width: 230, height: 23 }}>
                          <Typography
                            sx={{
                              font: "Plus Jakarta Sans",
                              fontWeight: 600,
                              fontSize: "18px",
                            }}
                          >
                            {liked.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: 82,
                            height: 26,
                            borderRadius: "16px",
                            border: "1px solid #E5D5D5",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Box
                            component="img"
                            alt="img"
                            src={star}
                            sx={{ width: 18, height: 18, ml: "7.5px" }}
                          />
                          <Box
                            sx={{
                              width: 48,
                              height: 18,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 600,
                                fontSize: "14px",
                                lineHeight: "100%",
                                letterSpacing: 0,
                              }}
                            >
                              {liked.rating}
                              <span
                                style={{
                                  fontFamily: "Plus Jakarta Sans",
                                  fontWeight: 600,
                                  fontSize: "9px",
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                }}
                              >
                                {" "}
                                {liked.rating1}
                              </span>
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: 324,
                          height: 20,
                          gap: "12px",
                          mt: "11px",
                        }}
                      >
                        <Typography
                          sx={{
                            width: 129,
                            height: 20,
                            style: "Medium",
                            font: "Plus Jakarta Sans",
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "20px",

                            color: "#FC5722",
                          }}
                        >
                          {liked.services}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          width: 324,
                          height: 24,
                          gap: "12px",
                          display: "flex",
                          mt: "15.5px",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ width: 187, height: 15 }}>
                          <Typography
                            sx={{
                              font: "Plus Jakarta Sans",
                              fontWeight: 500,
                              fontStyle: "Medium",
                              fontSize: "12px",
                              lineHeight: "100%",
                              letterSpacing: 0,
                              color: "#5F7388",
                            }}
                          >
                            City/Country
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: 125,
                            height: 24,
                            gap: "8px",
                            display: "flex",
                          }}
                        >
                          <Box
                            component="img"
                            alt="img"
                            src={india}
                            sx={{ width: 24, height: 24 }}
                          />
                          <Box sx={{ width: 93, height: 20 }}>
                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontStyle: "Medium",
                                fontSize: "14px",
                                lineHeight: "20px",
                              }}
                            >
                              {liked.city}, {liked.country}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: 324,
                          height: 24,
                          gap: "12px",
                          mt: "15.5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ width: 154, height: 15 }}>
                          <Typography
                            sx={{
                              font: "Plus Jakarta Sans",
                              fontWeight: 500,
                              fontSize: "12px",
                              lineHeight: "100%",
                              letterSpacing: 0,
                              color: "#5F7388",
                            }}
                          >
                            Destination
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: 158,
                            height: 24,
                            gap: "8px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            alt="img"
                            src={doha}
                            sx={{ width: 24, height: 24 }}
                          />
                          <Box sx={{ width: 126, height: 20 }}>
                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "20px",
                                letterSpacing: 0,
                              }}
                            >
                              {liked.destination}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          width: 324,
                          height: 24,
                          gap: "12px",
                          mt: "15.5px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 211,
                            height: 20,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ width: 34, height: 15 }}>
                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontSize: "12px",
                                lineHeight: "100%",
                                letterSpacing: 0,
                                color: "#5F7388",
                              }}
                            >
                              From
                            </Typography>
                          </Box>
                          <Box sx={{ width: 177, height: 20 }}>
                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 700,
                                fontSize: "12px",
                                lineHeight: "20px",
                                letterSpacing: 0,
                              }}
                            >
                              {liked.from}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            width: 101,
                            height: 24,
                            gap: "12px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ width: 34, height: 15 }}>
                            <Typography
                              sx={{
                                fontFamily: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontSize: "12px",
                                lineHeight: "100%",
                                letterSpacing: 0,
                                color: "#5F7388",
                              }}
                            >
                              Mode
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 55,
                              height: 24,
                              gap: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              component="img"
                              alt="img"
                              src={air}
                              sx={{ width: 24, height: 24 }}
                            />
                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 700,
                                fontSize: "12px",
                                lineHeight: "20px",
                                letterSpacing: 0,
                              }}
                            >
                              {liked.mode}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenLikedPopup(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      {/*  */}
      <Box sx={{ display: "flex" }}>
        <ShipperDashboard />

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          {/* <Navbar fixed={fixedSidebar} /> */}

          <Container
            maxWidth={false}
            sx={{
              display: "flex",
              flexDirection: "column",
              py: 2,
            }}
          >
            <Grid container spacing={3}>
              {/* LEFT CARD */}
              <Grid
                size={{ xs: 12, md: 8, lg: 8 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    minWidth: { lg: "600px", md: "500px", sm: "660px" },
                    minHeight: 160,
                    bgcolor: "#000",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    px: 3,
                  }}
                >
                  {/* Left content */}
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 42,
                        color: "#fff",
                      }}
                    >
                      120
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#fff",
                      }}
                    >
                      Pending Requests
                    </Typography>
                  </Box>

                  {/* Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexFlow: {
                        xs: "column",
                        sm: "row",
                        md: "row",
                        lg: "row",
                      },
                    }}
                  >
                    <Button
                      sx={{
                        bgcolor: "#FC5722",
                        height: 62,
                        borderRadius: "12px",
                        px: 3,
                        display: "flex",
                        gap: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: 14,
                          textTransform: "capitalize",
                          color: "#fff",
                        }}
                      >
                        Create New Open Request
                      </Typography>

                      <Box
                        component="img"
                        src={arrowright}
                        sx={{ width: 16 }}
                      />
                    </Button>

                    <Box
                      sx={{
                        height: 62,
                        px: 3,
                        borderRadius: "12px",
                        bgcolor: "#4D4D4D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: 600, fontSize: 14, color: "#fff" }}
                      >
                        View all
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* RIGHT CARD */}
              <Grid size={{ xs: 8, md: 2, lg: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    minWidth: {
                      lg: "280px",
                      md: "280px",
                      sm: "300px",
                      xs: "280px",
                    },
                    minHeight: 160,
                    borderRadius: "20px",
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, #7B78FF 0%, #8F8BFF 50%, #6F7CFF 100%)",
                    display: "flex",
                    alignItems: "center",
                    px: 3,
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={frame}
                    sx={{
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: 22,
                        color: "#fff",
                      }}
                    >
                      Wallet Balance
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 42,
                        color: "#fff",
                      }}
                    >
                      $2000.00
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* order in progress */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: { md: "1000px", lg: 1040, xs: "290px", sm: 740 },
                gap: "24px",
                mt: "24px",

                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: { md: "1000px", lg: 1020, xs: "290px", sm: 740 },
                  gap: "20px",

                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 28,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: 28,
                    }}
                  >
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: {
                          md: "26px",
                          lg: "26px",
                          sm: "26px",
                          xs: "20px",
                        },
                        lineHeight: "28px",
                        letterSpacing: 0,
                      }}
                    >
                      Orders in Progress ({orders?.length || 0})
                    </Typography>{" "}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      height: 28,
                    }}
                  >
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "28px",
                        cursor: "pointer",
                        color: "#FF7A3A",
                      }}
                      onClick={() => setOpenOrdersPopup(true)}
                    >
                      View all
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    gap: "24px",
                    mt: "20px",
                    overflowX: "auto",
                    py: 3,
                    "&::-webkit-scrollbar": {
                      height: 0,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      bgcolor: "#FFFFFF",
                    },
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    flexWrap="nowrap"
                    sx={{ gap: 47 }}
                  >
                    {orders.map((order, index) => (
                      <Grid key={index}>
                        <Card
                          sx={{
                            minWidth: 355.3333435058594,
                            height: 210,
                            borderRadius: "20px",
                            border: "1px solid #EAECF0",
                            mb: 2,
                            transition: "all 0.25s ease",
                            cursor: "pointer",
                            "&:hover": {
                              transform: "translateY(-6px)",
                              boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                            },
                          }}
                        >
                          <CardContent>
                            <Box
                              sx={{
                                width: 320.666748046875,
                                height: 20,
                                display: "flex",
                                gap: "15px",
                              }}
                            >
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  lineHeight: "14px",
                                  letterSpacing: "0%",
                                  color: "#5F7388",
                                }}
                              >
                                Quote ID
                              </Typography>

                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  lineHeight: "16px",
                                  letterSpacing: "0%",
                                }}
                              >
                                {order.quoteId}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                width: 320.666748046875,
                                height: 26,
                                mt: "16px",
                              }}
                            >
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "21px",
                                  lineHeight: "21px",
                                  letterSpacing: "0%",
                                }}
                              >
                                {order.title}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                width: 327.3333435058594,
                                height: 20,
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "16px",
                              }}
                            >
                              <Box sx={{ width: 185 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    letterSpacing: "0%",
                                    color: "#5F7388",
                                  }}
                                >
                                  Origin
                                </Typography>
                              </Box>

                              <Box sx={{ width: 142, display: "flex", gap: 1 }}>
                                <Box
                                  component="img"
                                  src={india}
                                  alt="img"
                                  sx={{ width: 24, height: 24 }}
                                />
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    letterSpacing: "0%",
                                  }}
                                >
                                  {order.origin}
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                width: 327.3333435058594,
                                height: 20,
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "16px",
                              }}
                            >
                              <Box sx={{ width: 185 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    letterSpacing: "0%",
                                    color: "#5F7388",
                                  }}
                                >
                                  Destination
                                </Typography>
                              </Box>

                              <Box sx={{ width: 142, display: "flex", gap: 1 }}>
                                <Box
                                  component="img"
                                  src={qatar}
                                  alt="img"
                                  sx={{ width: 24, height: 24 }}
                                />

                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    letterSpacing: "0%",
                                  }}
                                >
                                  {order.destination}
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                width: 327.3333435058594,
                                height: 20,
                                display: "flex",
                                justifyContent: "space-between",
                                mt: "16px",
                              }}
                            >
                              <Box sx={{ width: 185 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                    letterSpacing: "0%",
                                    color: "#5F7388",
                                  }}
                                >
                                  Lead Time
                                </Typography>
                              </Box>

                              <Box sx={{ width: 142 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    letterSpacing: "0%",
                                  }}
                                >
                                  {order.leadTime}
                                </Typography>
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Box>

            {/*faviorite */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: { md: "1000px", lg: 1020, xs: "290px", sm: 740 },
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 28,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: 28,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: {
                        md: "26px",
                        lg: "26px",
                        sm: "26px",
                        xs: "20px",
                      },
                      lineHeight: "28px",
                      letterSpacing: 0,
                    }}
                  >
                    Favorite Agents ({favorite?.length || 0})
                  </Typography>{" "}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: 28,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "28px",
                      cursor: "pointer",
                      color: "#FF7A3A",
                    }}
                    onClick={() => setOpenFavoritePopup(true)}
                  >
                    View all
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  gap: "24px",
                  mt: "20px",
                  overflowX: "auto",
                  py: 3,
                  "&::-webkit-scrollbar": {
                    height: 0,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    bgcolor: "#FFFFFF",
                  },
                }}
              >
                <Grid container spacing={3} flexWrap="nowrap" sx={{ gap: 47 }}>
                  {favorite.map((favorite, index) => (
                    <Grid key={index}>
                      <Card
                        sx={{
                          minWidth: 355.3333435058594,
                          height: 210,
                          borderRadius: "20px",
                          border: "1px solid #EAECF0",
                          mb: 2,
                          transition: "all 0.25s ease",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                          },
                        }}
                      >
                        <CardContent>
                          <Box sx={{ width: 320.666748046875, height: 26 }}>
                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontSize: "21px",
                                lineHeight: "21px",
                                letterSpacing: "0%",
                              }}
                            >
                              {favorite.title}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              width: 320.66,
                              height: 24,
                              gap: "14px",
                              display: "flex",
                              alignItems: "center",
                              mt: "16px",
                            }}
                          >
                            <Box
                              component="img"
                              src={mail}
                              alt="img"
                              sx={{ width: 20, height: 20 }}
                            />

                            <Typography
                              sx={{
                                font: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "100%",
                                letterSpacing: 0,
                                color: "#5F7388",
                              }}
                            >
                              {favorite.mail}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              width: 320.666748046875,
                              height: 49,
                              gap: "11px",
                              mt: 2,
                            }}
                          >
                            <Box sx={{ width: 140, height: 18 }}>
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                  color: "#5F7388",
                                }}
                              >
                                Countryes of Activity
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: 147,
                                height: 20,
                                display: "flex",
                                gap: "6px",

                                mt: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 65,
                                  height: 20,
                                  gap: "4px",
                                  display: "flex",
                                }}
                              >
                                <Box
                                  component="img"
                                  src={india}
                                  alt="img"
                                  sx={{ width: 24, height: 24 }}
                                />
                                <Typography>{favorite.country1}</Typography>
                              </Box>

                              <Box
                                sx={{
                                  width: 65,
                                  height: 20,
                                  gap: "4px",
                                  display: "flex",
                                }}
                              >
                                <Box
                                  component="img"
                                  src={qatar}
                                  alt="img"
                                  sx={{ width: 24, height: 24 }}
                                />
                                <Typography>{favorite.country2}</Typography>
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              width: 320.666748046875,
                              height: 20,
                              gap: "11px",
                              mt: "16px",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ width: 180.666748046875, height: 18 }}>
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "14px",
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                }}
                              >
                                Services
                              </Typography>
                            </Box>
                            <Box sx={{ width: 129, height: 18 }}>
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "12px",
                                  fontStyle: "Medium",
                                  lineHeight: "20px",
                                  letterSpacing: 0,
                                  color: "#FC5722",
                                }}
                              >
                                {favorite.services}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>

            {/* liked services */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: { md: "1000px", lg: 1020, xs: "280px", sm: 740 },
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: "auto", maxWidth: "1000px", height: 28 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: 28,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "26px",
                      lineHeight: "28px",
                      letterSpacing: 0,
                    }}
                  >
                    Liked Sevices ({liked?.length || 0})
                  </Typography>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "28px",
                      cursor: "pointer",
                      color: "#FF7A3A",
                    }}
                    onClick={() => setOpenLikedPopup(true)}
                  >
                    View all
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "24px",
                  mt: "20px",
                  overflowX: "auto",
                  py: 3,
                  "&::-webkit-scrollbar": {
                    height: 0,
                  },
                  "&::-webkit-scrollbar-thumb": {
                    bgcolor: "#FFFFFF",
                  },
                }}
              >
                {liked.map((liked, index) => (
                  <Card
                    key={index}
                    sx={{
                      minWidth: 356,
                      height: 410,
                      borderRadius: "10px",
                      border: "1px solid #EAECF0",
                      mb: 2,
                      transition: "all 0.25s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 324,
                          height: 370,
                          gap: "16px",
                        }}
                      >
                        <Box
                          component="img"
                          alt="img"
                          src={liked.image}
                          sx={{
                            width: 324,
                            height: 192,
                            borderRadius: "8px",
                            color: "#EBEBEB",
                          }}
                        />
                        <Box sx={{ width: 324, height: 162, gap: "11px" }}>
                          <Box
                            sx={{
                              height: 26,
                              width: 324,
                              gap: "12px",
                              display: "flex",
                              mt: "16px",
                            }}
                          >
                            <Box sx={{ width: 230, height: 23 }}>
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 600,
                                  fontSize: "18px",
                                }}
                              >
                                {liked.title}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: 82,
                                height: 26,
                                borderRadius: "16px",
                                border: "1px solid #E5D5D5",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <Box
                                component="img"
                                alt="img"
                                src={star}
                                sx={{ width: 18, height: 18, ml: "7.5px" }}
                              />
                              <Box
                                sx={{
                                  width: 48,
                                  height: 18,
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "Plus Jakarta Sans",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    letterSpacing: 0,
                                  }}
                                >
                                  {liked.rating}
                                  <span
                                    style={{
                                      fontFamily: "Plus Jakarta Sans",
                                      fontWeight: 600,
                                      fontSize: "9px",
                                      lineHeight: "100%",
                                      letterSpacing: 0,
                                    }}
                                  >
                                    {" "}
                                    {liked.rating1}
                                  </span>
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: 324,
                              height: 20,
                              gap: "12px",
                              mt: "11px",
                            }}
                          >
                            <Typography
                              sx={{
                                width: 129,
                                height: 20,
                                style: "Medium",
                                font: "Plus Jakarta Sans",
                                fontWeight: 500,
                                fontSize: "12px",
                                lineHeight: "20px",

                                color: "#FC5722",
                              }}
                            >
                              {liked.services}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              width: 324,
                              height: 24,
                              gap: "12px",
                              display: "flex",
                              mt: "15.5px",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ width: 187, height: 15 }}>
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontStyle: "Medium",
                                  fontSize: "12px",
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                  color: "#5F7388",
                                }}
                              >
                                City/Country
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: 125,
                                height: 24,
                                gap: "8px",
                                display: "flex",
                              }}
                            >
                              <Box
                                component="img"
                                alt="img"
                                src={india}
                                sx={{ width: 24, height: 24 }}
                              />
                              <Box sx={{ width: 93, height: 20 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontStyle: "Medium",
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  {liked.city}, {liked.country}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: 324,
                              height: 24,
                              gap: "12px",
                              mt: "15.5px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ width: 154, height: 15 }}>
                              <Typography
                                sx={{
                                  font: "Plus Jakarta Sans",
                                  fontWeight: 500,
                                  fontSize: "12px",
                                  lineHeight: "100%",
                                  letterSpacing: 0,
                                  color: "#5F7388",
                                }}
                              >
                                Destination
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: 158,
                                height: 24,
                                gap: "8px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                component="img"
                                alt="img"
                                src={doha}
                                sx={{ width: 24, height: 24 }}
                              />
                              <Box sx={{ width: 126, height: 20 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    letterSpacing: 0,
                                  }}
                                >
                                  {liked.destination}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              width: 324,
                              height: 24,
                              gap: "12px",
                              mt: "15.5px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                width: 211,
                                height: 20,
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box sx={{ width: 34, height: 15 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "100%",
                                    letterSpacing: 0,
                                    color: "#5F7388",
                                  }}
                                >
                                  From
                                </Typography>
                              </Box>
                              <Box sx={{ width: 177, height: 20 }}>
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 700,
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    letterSpacing: 0,
                                  }}
                                >
                                  {liked.from}
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                width: 101,
                                height: 24,
                                gap: "12px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <Box sx={{ width: 34, height: 15 }}>
                                <Typography
                                  sx={{
                                    fontFamily: "Plus Jakarta Sans",
                                    fontWeight: 500,
                                    fontSize: "12px",
                                    lineHeight: "100%",
                                    letterSpacing: 0,
                                    color: "#5F7388",
                                  }}
                                >
                                  Mode
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  width: 55,
                                  height: 24,
                                  gap: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  component="img"
                                  alt="img"
                                  src={air}
                                  sx={{ width: 24, height: 24 }}
                                />
                                <Typography
                                  sx={{
                                    font: "Plus Jakarta Sans",
                                    fontWeight: 700,
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                    letterSpacing: 0,
                                  }}
                                >
                                  {liked.mode}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            {/*  */}
          </Container>
        </Box>
      </Box>
    </>
  );
}
