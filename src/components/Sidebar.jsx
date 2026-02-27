import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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

const drawerWidth = 278;
const miniWidth = 80;

export default function ShipperDashboard() {
  const [open] = useState(true);
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

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : miniWidth,
        display: { xs: "none", md: "block" },
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : miniWidth,
          transition: "width 0.4s ease",
          overflowX: "hidden",
          borderRight: "1px solid #E5E7EB",
        },
      }}
    >
      {/* LOGO */}
      <Box
        sx={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
          px: open ? 8 : 5,
          mt: 3,
        }}
      >
        <Box
          component="img"
          src={open ? Oujat : MiniLogo}
          alt="logo"
          sx={{
            width: 160,
            height: 37,
          }}
        />
      </Box>

      {/* MENU */}

      <List
        sx={{
          px: open ? 1.5 : 0,
        }}
      >
        {menuItems.map((item) => {
          const selected = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              selected={selected}
              onClick={() => navigate(item.path)}
              sx={{
                mx: open ? 1 : "auto",
                width: open ? 233 : 48,
                height: 50,
                borderRadius: 2,
                justifyContent: open ? "flex-start" : "center",
                px: open ? 2.5 : 0,
                mt: 0.2,
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
                  minWidth: open ? 32 : "auto",
                  mr: open ? 1.5 : 0,
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.label}
                  sx={{
                    width: 28,
                    height: 28,
                    transition: "0.3s ease",
                    filter: selected
                      ? "brightness(0) invert(1)"
                      : "invert(65%) sepia(6%) saturate(600%) hue-rotate(180deg)",
                  }}
                />
              </ListItemIcon>

              {open && (
                <ListItemText
                  primary={item.label}
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: selected ? "#fff" : "#8B95A7",
                    whiteSpace: "nowrap",
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>

      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List sx={{ mt: "auto", px: open ? 1.5 : 0 }}>
          {logout.map((item) => {
            const selected = location.pathname === item.path;

            return (
              <ListItemButton
                key={item.path}
                selected={selected}
                onClick={() => navigate(item.path)}
                sx={{
                  mx: open ? 1 : "auto",
                  width: open ? 233 : 48,
                  height: 50,
                  borderRadius: 2,
                  justifyContent: open ? "flex-start" : "center",
                  px: open ? 2.5 : 0,
                  mt: "auto",
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
                    minWidth: open ? 32 : "auto",
                    mr: open ? 1.5 : 0,
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.label}
                    sx={{
                      width: 28,
                      height: 28,
                      transition: "0.3s ease",
                      filter: selected
                        ? "brightness(0) invert(1)"
                        : "invert(65%) sepia(6%) saturate(600%) hue-rotate(180deg)",
                    }}
                  />
                </ListItemIcon>

                {open && (
                  <ListItemText
                    primary={item.label}
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: selected ? "#fff" : "#8B95A7",
                      whiteSpace: "nowrap",
                    }}
                  />
                )}
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
