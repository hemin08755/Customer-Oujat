import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import user from "../assets/logo/user.svg";
import Frame from "../assets/logo/Frame.svg";
import Frame1 from "../assets/logo/Frame.svg";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

export default function Navbar() {
  const [avatarSrc] = React.useState(undefined);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  //  const handleAvatarChange = (event) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     // Read the file as a data URL
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setAvatarSrc(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const profileOpen = Boolean(profileAnchorEl);

  const handleProfileOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            transition: "all 0.4s ease",
          }}
        >
          <Box
            sx={{
              height: 88,
              bgcolor: "#FFFFFF",
              borderBottom: "3px solid #F1F2F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: { lg: 3, md: 2, sm: 2, xs: 1.5 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  lg: "26px",
                  md: "22px",
                  sm: "18px",
                  xs: "14px",
                },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Hello <span style={{ color: "#FC5722" }}>John Warner</span>
            </Typography>

            <Box
              sx={{ display: "flex", alignItems: "center", gap: "12px", mr: 0 }}
            >
              <IconButton
                onClick={handleOpen}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "40px",
                  border: "1px solid #E7E9ED",
                  bgcolor: "#F9FAFC",
                }}
              >
                <TranslateIcon sx={{ fontSize: 20, color: "#344054" }} />
              </IconButton>

              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "40px",
                  border: "1px solid #E7E9ED",
                  bgcolor: "#F9FAFC",
                }}
              >
                <NotificationsNoneIcon
                  sx={{ fontSize: 20, color: "#344054" }}
                />
              </IconButton>

              <Box
                onClick={handleProfileOpen}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "48px",
                    borderRadius: "8px",
                    border: "1px solid #E7E9ED",
                    justifyContent: "center",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <ButtonBase
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    aria-label="Avatar image"
                    sx={{
                      borderRadius: "40px",
                      "&:has(:focus-visible)": {
                        outline: "2px solid",
                        outlineOffset: "2px",
                        gap: "8px",
                      },
                    }}
                  >
                    <Avatar
                      src={avatarSrc}
                      alt="User Avatar"
                      sx={{
                        width: 32,
                        height: 32,
                        cursor: "pointer",
                      }}
                    />
                    <KeyboardArrowDownIcon sx={{ color: "#667085" }} />
                  </ButtonBase>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* PAGE CONTENT */}
          <Box sx={{ flexGrow: 1, p: 3 }}>
            {/* Your routes / page content */}
          </Box>
        </Box>

        {/* LANGUAGE MENU */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: "12px",
              minWidth: 140,
              boxShadow: "0px 8px 24px rgba(16,24,40,0.12)",
            },
          }}
        >
          <MenuItem onClick={handleClose}>English</MenuItem>
          <MenuItem onClick={handleClose}>Hindi</MenuItem>
          <MenuItem onClick={handleClose}>Gujarati</MenuItem>
        </Menu>

        <Menu
          anchorEl={profileAnchorEl}
          open={profileOpen}
          onClose={handleProfileClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: "12px",
              minWidth: 180,
              boxShadow: "0px 8px 24px rgba(16,24,40,0.12)",
            },
          }}
        >
          <MenuItem>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                width: "177px",
                height: "48px",
                alignItems: "center",
                border: "1px solid #E7E9ED",
                borderRadius: "8px",
                justifyContent: "center",
              }}
            >
              <Avatar
                src={avatarSrc}
                alt="User Avatar"
                sx={{
                  width: 32,
                  height: 32,
                  cursor: "pointer",
                }}
              />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "Bold",
                  fontStyle: "Medium",
                  color: "#000000",
                }}
              >
                John Warner
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem onClick={handleProfileClose}>
            <Box
              onClick={() => navigate("/Profile")}
              sx={{
                display: "flex",
                gap: "6px",
                width: "177px",
                height: "44px",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={user}
                alt="logo"
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "Bold",
                  fontStyle: "SemiBold",
                  color: "#8F9DAC",
                }}
              >
                {" "}
                My Profile
              </Typography>
            </Box>
          </MenuItem>

          <MenuItem onClick={handleProfileClose}>
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                width: "177px",
                height: "44px",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={Frame}
                alt="logo"
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "Bold",
                  fontStyle: "SemiBold",
                  color: "#8F9DAC",
                }}
              >
                Go to <span style={{ color: "#FC5722" }}> Oujat.com</span>
              </Typography>
            </Box>
          </MenuItem>
          <MenuItem>
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                width: "177px",
                height: "44px",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={Frame1}
                alt="logo"
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "Bold",
                  fontStyle: "SemiBold",
                  color: "#8F9DAC",
                }}
              >
                Help
              </Typography>
            </Box>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}
