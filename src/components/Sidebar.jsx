import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import Dashboard from "../assets/logo/Dashboard.svg";
import Quotes from "../assets/logo/Quote Requests.svg";
import Orders from "../assets/logo/Orders Management.svg";
import Chat from "../assets/logo/Message.svg";
import Payments from "../assets/logo/Payments.svg";
import Team from "../assets/logo/team management.svg";
import Address from "../assets/logo/map-pin 1.svg";
import Dispute from "../assets/logo/Dispute Center.svg";
import Analytics from "../assets/logo/Analytics.svg";
import Logout from "../assets/logo/Log Out Icon.svg";
import Subscriptions from "../assets/logo/subscription.svg";
import MiniLogo from "../assets/logo/Clip path group.svg";
import Oujat from "../assets/logo/Oujat.com2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 278;
const miniWidth = 80;

export default function ShipperDashboard() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const navigate = useNavigate();

  const logout = [
    {
      label: "Log Out",
      path: "/login",
      icon: Logout,
    },
  ];

  const menuItems = [
    {
      label: "Dashboard",
      path: "/Dashboard",
      icon: Dashboard,
    },
    {
      label: "Quotes Management",
      path: "/quotes",
      icon: Quotes,
    },

    {
      label: "Orders",
      path: "/Orders",
      icon: Orders,
    },
    {
      label: "Chat",
      path: "/Chat",
      icon: Chat,
    },
    {
      label: "Payments",
      path: "/Payments",
      icon: Payments,
    },
    {
      label: "Team Management",
      path: "/Team",
      icon: Team,
    },
    {
      label: "Address Book",
      path: "/Address",
      icon: Address,
    },
    {
      label: "Dispute Center",
      path: "/Dispute",
      icon: Dispute,
    },
    {
      label: "Analytics/Reports ",
      path: "/Analytics",
      icon: Analytics,
    },
    {
      label: "Subscriptions",
      path: "/Subscriptions",
      icon: Subscriptions,
    },
  ];

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* LOGO */}
      <Box
        sx={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: open || isMobile ? "flex-start" : "center",
          px: open || isMobile ? 3 : 0,
          mt: 2,
        }}
      >
        <Box
          component="img"
          src={open || isMobile ? Oujat : MiniLogo}
          sx={{ width: 160, height: 37 }}
        />
      </Box>

      {/* MENU */}
      <List
        sx={{
          px: open || isMobile ? 1.5 : 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {menuItems.map((item) => {
          const selected = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              selected={selected}
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                mx: open || isMobile ? 1 : "auto",
                width: open || isMobile ? 238 : 48,
                height: 50,
                borderRadius: 2,
                justifyContent: open || isMobile ? "flex-start" : "center",
                px: open || isMobile ? 2.5 : 0,
                transition: "0.2s ease",

                "&:hover": {
                  backgroundColor: "#FC5722",
                  "& img": { filter: "brightness(0) invert(1)" },
                  "& .MuiListItemText-root": { color: "#fff" },
                },

                "&.Mui-selected": {
                  backgroundColor: "#FC5722",
                  "& img": { filter: "brightness(0) invert(1)" },
                  "& .MuiListItemText-root": { color: "#fff" },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: open || isMobile ? 32 : "auto",
                  mr: open || isMobile ? 1.5 : 0,
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  sx={{
                    width: 28,
                    height: 28,
                    filter: selected
                      ? "brightness(0) invert(1)"
                      : "invert(65%) sepia(6%) saturate(600%) hue-rotate(180deg)",
                  }}
                />
              </ListItemIcon>

              {(open || isMobile) && (
                <ListItemText
                  primary={item.label}
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: selected ? "#fff" : "#8B95A7",
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* Toggle Button (Desktop Only) */}
      {!isMobile && (
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            position: "fixed",
            top: 20,
            left: open ? drawerWidth - 20 : miniWidth - 20,
            zIndex: 1300,
            width: 32,
            height: 32,
            backgroundColor: "#fff",
            border: "1px solid #E5E7EB",
            borderRadius: "25%",
            transition: "left 0.3s ease",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      )}

      {/* Mobile Button */}
      {isMobile && (
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{
            position: "fixed",
            top: 15,
            left: 15,
            zIndex: 1300,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        sx={{
          width: open ? drawerWidth : miniWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : miniWidth,
            transition: "width 0.3s ease",
            overflowX: "hidden",
            overflowY: "auto",
            height: "100vh",
            borderRight: "1px solid #E5E7EB",
            scrollbarWidth: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
