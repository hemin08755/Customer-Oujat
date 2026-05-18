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
    title: "ABC Logistic Services",
    mail: "john.doe@email.com",
    country1: "India",
    country2: "Qatar",
    services: "International Transport",
  },
  {
    title: "ABC Logistic Services",
    mail: "john.doe@email.com",
    country1: "India",
    country2: "Qatar",
    services: "International Transport",
  },
  {
    title: "ABC Logistic Services",
    mail: "john.doe@email.com",
    country1: "India",
    country2: "Qatar",
    services: "International Transport",
  },
  {
    title: "ABC Logistic Services",
    mail: "john.doe@email.com",
    country1: "India",
    country2: "Qatar",
    services: "International Transport",
  },
];

const liked = [
  {
    image,
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
    image,
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
    image,
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
    image,
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

// Reusable Order Card
const OrderCard = ({ order }) => (
  <Card
    sx={{
      width: "100%",
      minWidth: { xs: "260px", sm: "300px", md: "340px" },
      height: "auto",
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
    <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
      <Box sx={{ display: "flex", gap: "15px", mb: 2 }}>
        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "14px",
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
          }}
        >
          {order.quoteId}
        </Typography>
      </Box>

      <Typography
        sx={{
          font: "Plus Jakarta Sans",
          fontWeight: 500,
          fontSize: { xs: "17px", sm: "21px" },
          mb: 2,
        }}
      >
        {order.title}
      </Typography>

      {[
        { label: "Origin", value: order.origin, flag: india },
        { label: "Destination", value: order.destination, flag: qatar },
      ].map(({ label, value, flag }) => (
        <Box
          key={label}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Typography
            sx={{
              font: "Plus Jakarta Sans",
              fontWeight: 500,
              fontSize: "14px",
              color: "#5F7388",
            }}
          >
            {label}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box
              component="img"
              src={flag}
              alt="flag"
              sx={{ width: 24, height: 24 }}
            />
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 500,
                fontSize: "13px",
              }}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "14px",
            color: "#5F7388",
          }}
        >
          Lead Time
        </Typography>
        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "13px",
          }}
        >
          {order.leadTime}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

// Reusable Favorite Card
const FavoriteCard = ({ item }) => (
  <Card
    sx={{
      width: "100%",
      minWidth: { xs: "260px", sm: "300px", md: "340px" },
      height: "auto",
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
    <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
      <Typography
        sx={{
          font: "Plus Jakarta Sans",
          fontWeight: 500,
          fontSize: { xs: "17px", sm: "21px" },
          mb: 2,
        }}
      >
        {item.title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "14px", mb: 2 }}>
        <Box
          component="img"
          src={mail}
          alt="mail"
          sx={{ width: 20, height: 20 }}
        />
        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: { xs: "14px", sm: "18px" },
            color: "#5F7388",
          }}
        >
          {item.mail}
        </Typography>
      </Box>

      <Typography
        sx={{
          font: "Plus Jakarta Sans",
          fontWeight: 500,
          fontSize: "14px",
          color: "#5F7388",
          mb: 1,
        }}
      >
        Countries of Activity
      </Typography>
      <Box sx={{ display: "flex", gap: "6px", mb: 2 }}>
        {[
          { flag: india, name: item.country1 },
          { flag: qatar, name: item.country2 },
        ].map(({ flag, name }) => (
          <Box
            key={name}
            sx={{ display: "flex", gap: "4px", alignItems: "center" }}
          >
            <Box
              component="img"
              src={flag}
              alt={name}
              sx={{ width: 24, height: 24 }}
            />
            <Typography sx={{ fontSize: "14px" }}>{name}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "12px",
            color: "#FC5722",
          }}
        >
          {item.services}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

// Reusable Liked Card
const LikedCard = ({ item }) => (
  <Card
    sx={{
      width: "100%",
      minWidth: { xs: "260px", sm: "300px", md: "340px" },
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
    <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
      <Box
        component="img"
        alt="img"
        src={item.image}
        sx={{
          width: "100%",
          height: { xs: 160, sm: 192 },
          borderRadius: "8px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            sx={{
              font: "Plus Jakarta Sans",
              fontWeight: 600,
              fontSize: { xs: "15px", sm: "18px" },
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              border: "1px solid #E5D5D5",
              borderRadius: "16px",
              px: 1,
              py: 0.5,
            }}
          >
            <Box
              component="img"
              src={star}
              alt="star"
              sx={{ width: 18, height: 18 }}
            />
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {item.rating}
              <span style={{ fontSize: "9px" }}> {item.rating1}</span>
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            font: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "12px",
            color: "#FC5722",
            mb: 1.5,
          }}
        >
          {item.services}
        </Typography>

        {[
          {
            label: "City/Country",
            value: `${item.city}, ${item.country}`,
            flag: india,
          },
          { label: "Destination", value: item.destination, flag: doha },
        ].map(({ label, value, flag }) => (
          <Box
            key={label}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 500,
                fontSize: "12px",
                color: "#5F7388",
              }}
            >
              {label}
            </Typography>
            <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Box
                component="img"
                src={flag}
                alt="flag"
                sx={{ width: 24, height: 24 }}
              />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                {value}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 500,
                fontSize: "12px",
                color: "#5F7388",
              }}
            >
              From
            </Typography>
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: "12px",
              }}
            >
              {item.from}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 500,
                fontSize: "12px",
                color: "#5F7388",
              }}
            >
              Mode
            </Typography>
            <Box
              component="img"
              src={air}
              alt="air"
              sx={{ width: 24, height: 24 }}
            />
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: "12px",
              }}
            >
              {item.mode}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

// Reusable Section Header
const SectionHeader = ({ title, count, onViewAll }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    }}
  >
    <Typography
      sx={{
        font: "Plus Jakarta Sans",
        fontWeight: 700,
        fontSize: { xs: "18px", sm: "22px", md: "26px" },
      }}
    >
      {title} ({count})
    </Typography>
    <Typography
      sx={{
        font: "Plus Jakarta Sans",
        fontWeight: 700,
        fontSize: "16px",
        cursor: "pointer",
        color: "#FF7A3A",
      }}
      onClick={onViewAll}
    >
      View all
    </Typography>
  </Box>
);

// Reusable Horizontal Scroll Section
const HorizontalScrollSection = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      gap: "24px",
      overflowX: "auto",
      py: 2,
      "&::-webkit-scrollbar": { height: 0 },
    }}
  >
    {children}
  </Box>
);

// Reusable Dialog wrapper
const ListDialog = ({ open, onClose, title, children }) => (
  <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent dividers>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

export default function DashboardLayout() {
  const [fixedSidebar] = useState(false);
  const [openOrdersPopup, setOpenOrdersPopup] = useState(false);
  const [openFavoritePopup, setOpenFavoritePopup] = useState(false);
  const [openLikedPopup, setOpenLikedPopup] = useState(false);

  return (
    <>
      {/* Orders Dialog */}
      <ListDialog
        open={openOrdersPopup}
        onClose={() => setOpenOrdersPopup(false)}
        title="Orders in Progress"
      >
        {orders.map((order, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <OrderCard order={order} />
          </Grid>
        ))}
      </ListDialog>

      {/* Favourite Dialog */}
      <ListDialog
        open={openFavoritePopup}
        onClose={() => setOpenFavoritePopup(false)}
        title="Favourite Agents"
      >
        {favorite.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FavoriteCard item={item} />
          </Grid>
        ))}
      </ListDialog>

      {/* Liked Dialog */}
      <ListDialog
        open={openLikedPopup}
        onClose={() => setOpenLikedPopup(false)}
        title="Liked Services"
      >
        {liked.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LikedCard item={item} />
          </Grid>
        ))}
      </ListDialog>

      <Box sx={{ display: "flex" }}>
        <ShipperDashboard />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <Navbar fixed={fixedSidebar} />

          <Container maxWidth={false} sx={{ py: 0, mt: "-24px" }}>
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
              <Grid size={{ xs: 8, md: 6, lg: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    minWidth: {
                      lg: "290px",
                      md: "280px",
                      sm: "300px",
                      xs: "auto",
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

            {/* Orders in Progress */}
            <Box sx={{ mt: "24px" }}>
              <SectionHeader
                title="Orders in Progress"
                count={orders.length}
                onViewAll={() => setOpenOrdersPopup(true)}
              />
              <HorizontalScrollSection>
                {orders.map((order, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: { xs: 260, sm: 300, md: 355 },
                      flexShrink: 0,
                    }}
                  >
                    <OrderCard order={order} />
                  </Box>
                ))}
              </HorizontalScrollSection>
            </Box>

            {/* Favorite Agents */}
            <Box sx={{ mb: 0 }}>
              <SectionHeader
                title="Favorite Agents"
                count={favorite.length}
                onViewAll={() => setOpenFavoritePopup(true)}
              />
              <HorizontalScrollSection>
                {favorite.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: { xs: 260, sm: 300, md: 355 },
                      flexShrink: 0,
                    }}
                  >
                    <FavoriteCard item={item} />
                  </Box>
                ))}
              </HorizontalScrollSection>
            </Box>

            {/* Liked Services */}
            <Box sx={{ mb: 0 }}>
              <SectionHeader
                title="Liked Services"
                count={liked.length}
                onViewAll={() => setOpenLikedPopup(true)}
              />
              <HorizontalScrollSection>
                {liked.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: { xs: 260, sm: 300, md: 356 },
                      flexShrink: 0,
                    }}
                  >
                    <LikedCard item={item} />
                  </Box>
                ))}
              </HorizontalScrollSection>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
