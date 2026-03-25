import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  Chip,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";

import oujat from "../assets/logo/Oujat.com2.png";
import CheckLogo from "../Checklogo";
import { useNavigate } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SubscriptionBusiness() {
  const navigate = useNavigate();
  const isIndividual = true;
  const mutedVisibility = {
    color: "#9AA4B2",
    userSelect: "none",
    pointerEvents: "none",
  };

  //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
      <Container
        maxWidth={false}
        sx={{
          height: 88,
          bgcolor: "#FFFFFF",
          borderBottom: "3px solid #F1F2F3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans",
              fontWeight: 700,
              fontSize: { md: "26px", sm: "22px", xs: "18px" },
              lineHeight: "150%",
            }}
          >
            Hello
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
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
            <NotificationsNoneIcon sx={{ fontSize: 20, color: "#344054" }} />
          </IconButton>

          <Box
            sx={{
              width: 80,
              height: 48,
              borderRadius: "8px",
              border: "1px solid #E7E9ED",
              bgcolor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              cursor: "pointer",
            }}
          >
            <Avatar sx={{ width: 32, height: 32 }} />
            <KeyboardArrowDownIcon sx={{ color: "#667085" }} />
          </Box>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
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
      </Container>

      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "20px",
          p: { md: "60px", lg: "60px", xs: "10px" },
          gap: "54px",
        }}
      >
        <Box
          sx={{
            height: { md: 108, lg: 108, xs: 150 },
            width: "100%",
            display: "flex",
            flexFlow: "column",
            gap: "32px",
          }}
        >
          <Box
            component="img"
            src={oujat}
            alt="img"
            sx={{ width: 148, height: 34 }}
          />

          <Box
            sx={{
              height: 42,
              gap: 5,
              width: "100%",
              display: "flex",
              position: "relative",
              bottom: -30,
              flexFlow: { md: "row", xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                width: { lg: "100%", md: 596, sm: 596, xs: "auto" },
                height: 42,
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: { md: "32px", lg: "32px", sm: "32px", xs: "25px" },
                  lineHeight: "130%",
                  letterSpacing: "-0.02em",
                  verticalAlign: "middle",
                }}
              >
                Select your
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: {
                      md: "32px",
                      lg: "32px",
                      sm: "32px",
                      xs: "25px",
                    },
                    lineHeight: "130%",
                    letterSpacing: "-0.02em",
                    verticalAlign: "middle",
                    color: "#FC5722",
                  }}
                >
                  {" "}
                  subscription plan
                </span>
              </Typography>
            </Box>

            <Box
              onClick={() => navigate("/subscriptionindividual")}
              sx={{
                width: { lg: "100%", md: 596, sm: 296, xs: "auto" },
                height: 42,
                display: "flex",
                justifyContent: { md: "right", xs: "left", sm: "flex-end" },
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: { md: "24px", lg: "24px", sm: "24px", xs: "20px" },
                  lineHeight: "130%",
                  letterSpacing: "-0.02em",
                  textAlign: "right",
                  verticalAlign: "middle",
                  textDecoration: "underline",
                  color: "#FC5722",
                }}
              >
                Switch to Individual{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: "100%",
            height: "100%",
            gap: "40px",
            overflowX: { xs: "auto", md: "auto", lg: "visible", xl: "visible" },
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Box
            sx={{
              width: { xs: 1300, md: 1300, lg: "auto", sm: 1300 },
              height: 344,
              gap: "24px",
              display: "flex",
              justifyContent: "right",

              mt: { md: 4, xs: 12 },
            }}
          >
            <Card
              sx={{
                width: 218.25,
                height: 344,
                borderRadius: "16px",
                border: "1.5px solid #D0D5DD",
                gap: "20px",
                bgcolor: "#FFFFFF",
                opacity: isIndividual ? 0.5 : 1,
                pointerEvents: isIndividual ? "none" : "auto",
              }}
            >
              <Box
                sx={{
                  width: 158.25,
                  height: 208,
                  gap: "24px",
                  display: "flex",
                  ml: "30px",
                  mt: 3,
                  justifyItems: "center",
                }}
              >
                <Box sx={{ width: 158.25, height: 62, gap: "12px" }}>
                  <Box sx={{ width: 155, height: 30 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#FC5722",
                      }}
                    >
                      Light Shipper
                    </Typography>
                  </Box>
                  <Box sx={{ width: 158.25, height: 20, mt: 1.5 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8F9DAC",
                      }}
                    >
                      (Low volume)
                    </Typography>
                  </Box>

                  <Box sx={{ width: 151, height: 32, mt: 3 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "25px",
                        lineHeight: "100%",
                        letterSpacing: "0.25px",
                        textAlign: "center",
                        color: "#000000",
                      }}
                    >
                      Free forever
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                sx={{
                  width: "158.25px",
                  height: "56px",
                  borderRadius: "6px",
                  border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  px: "16px",
                  py: "17px",
                  ml: "30px",
                  mt: 3.5,
                  opacity: 1,
                  background: "#000000",
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "0.16px",
                    display: "flex",
                    alignItems: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Choose Plan
                </Typography>
              </Button>
            </Card>

            <Card
              sx={{
                width: 218.25,
                height: 344,
                borderRadius: "16px",
                border: "1.5px solid #D0D5DD",
                gap: "20px",
                bgcolor: "#FFFFFF",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box sx={{ width: 150, height: 0 }}>
                <Chip
                  label="30 days free trial"
                  color="error"
                  size="small"
                  sx={{
                    width: 150,
                    height: 32,
                    position: "relative",
                    top: -20,
                    left: "73%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    borderRadius: "5px",
                    bgcolor: "#000000",
                    color: "#FC5722",
                    opacity: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: 186,
                  height: 208,
                  gap: "24px",
                  display: "flex",
                  ml: "30px",
                  mt: 3.5,

                  flexFlow: "column",
                }}
              >
                <Box
                  sx={{
                    width: 158,
                    height: 60,
                    gap: "12px",

                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: 186, height: 30 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FC5722",
                      }}
                    >
                      Growth Shipper
                    </Typography>
                  </Box>
                  <Box sx={{ width: 158.25, height: 20, mt: 1 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8F9DAC",
                      }}
                    >
                      (Moderate volume)
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ width: 159, height: 32 }}>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "25px",
                      lineHeight: "100%",
                      letterSpacing: "0.01em",
                      textAlign: "center",
                    }}
                  >
                    $9.99/Month
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 18,
                    height: 18,
                    mt: -2.5,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                      textAlign: "center",
                      ml: 8,
                      color: "#8F9DAC",
                    }}
                  >
                    Or
                  </Typography>
                </Box>
                <Box sx={{ width: 158.25, height: 62, gap: "12px", mt: -2 }}>
                  <Box sx={{ width: 157, height: 32 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#FC5722",
                      }}
                    >
                      $95.88/Year
                    </Typography>
                  </Box>
                  <Box sx={{ width: 158, height: 18, mt: 1.5 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8F9DAC",
                      }}
                    >
                      ($7.99 monthly value)
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                sx={{
                  width: "158.25px",
                  height: "56px",
                  borderRadius: "6px",
                  border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  px: "16px",
                  py: "17px",
                  ml: "30px",
                  mt: 3,
                  opacity: 1,
                  background: "#000000",
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "0.16px",
                    display: "flex",
                    alignItems: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Choose Plan
                </Typography>
              </Button>
            </Card>

            <Card
              sx={{
                width: 218.25,
                height: 344,
                borderRadius: "16px",
                border: "1.5px solid #D0D5DD",
                gap: "20px",
                bgcolor: "#FFFFFF",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 158.25,
                  height: 208,
                  gap: "24px",
                  display: "flex",
                  ml: "30px",
                  mt: 3.5,

                  flexFlow: "column",
                }}
              >
                <Box
                  sx={{
                    width: 158,
                    height: 60,
                    gap: "12px",
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: 137, height: 30 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FC5722",
                      }}
                    >
                      Pro Shipper
                    </Typography>
                  </Box>
                  <Box sx={{ width: 158.25, height: 20, mt: 1 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8F9DAC",
                      }}
                    >
                      (High volume)
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ width: 159, height: 32 }}>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "25px",
                      lineHeight: "100%",
                      letterSpacing: "0.01em",
                      textAlign: "center",
                    }}
                  >
                    $49/Month
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 18,
                    height: 18,
                    mt: -2.5,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0px",
                      textAlign: "center",
                      ml: 8,
                      color: "#8F9DAC",
                    }}
                  >
                    Or
                  </Typography>
                </Box>
                <Box sx={{ width: 158.25, height: 62, gap: "12px", mt: -2 }}>
                  <Box sx={{ width: 157, height: 32 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#FC5722",
                      }}
                    >
                      $468/Year
                    </Typography>
                  </Box>
                  <Box sx={{ width: 158, height: 18, mt: 1.5 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8F9DAC",
                      }}
                    >
                      ($39 monthly value)
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                sx={{
                  width: "158.25px",
                  height: "56px",
                  borderRadius: "6px",
                  border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  px: "16px",
                  py: "17px",
                  ml: "30px",
                  mt: 3,
                  opacity: 1,
                  background: "#000000",
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "0.16px",
                    display: "flex",
                    alignItems: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Choose Plan
                </Typography>
              </Button>
            </Card>

            <Card
              sx={{
                width: 218.25,
                height: 344,
                borderRadius: "16px",
                border: "1.5px solid #D0D5DD",
                gap: "20px",
                bgcolor: "#FFFFFF",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: 158.25,
                  height: 208,
                  gap: "24px",
                  display: "flex",
                  ml: "30px",
                  mt: 3.5,

                  flexFlow: "column",
                }}
              >
                <Box
                  sx={{
                    width: 158,
                    height: 60,
                    gap: "12px",
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: 158, height: 30 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FC5722",
                      }}
                    >
                      Elite Shipper
                    </Typography>
                  </Box>
                  <Box sx={{ width: 158.25, height: 20, mt: 1 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",
                        color: "#8F9DAC",
                      }}
                    >
                      (Custom Solutions)
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: 193,
                    height: 32,
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <Box sx={{ width: 35, height: 18 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "100%",
                        letterSpacing: "0px",
                        color: "#8F9DAC",
                      }}
                    >
                      From
                    </Typography>
                  </Box>
                  <Box sx={{ width: 150, height: 32 }}>
                    <Typography
                      sx={{
                        font: "Plus Jakarta Sans",
                        fontWeight: 700,
                        fontSize: "25px",
                        lineHeight: "100%",
                        letterSpacing: "0.01em",
                        textAlign: "center",
                      }}
                    >
                      $199/Month
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                sx={{
                  width: "158.25px",
                  height: "56px",
                  borderRadius: "6px",
                  border: "1px solid",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  py: "17px",
                  ml: "30px",
                  mt: 3,
                  opacity: 1,
                  background: "#000000",
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    letterSpacing: "0.16px",
                    display: "flex",
                    alignItems: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Contact Sales
                </Typography>
              </Button>
            </Card>
          </Box>

          <Box
            sx={{
              width: { xs: 1300, md: 1300, lg: "auto", sm: 1300 },
              height: 90,
              mt: 5,
              borderBottom: "1px solid #D0D5DD",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 351,
                height: 26,
                gap: "10px",

                display: "flex",
                justifyContent: "left",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "26px",
                  letterSpacing: "0",
                  verticalAlign: "middle",
                  color: "#000000",
                }}
              >
                Sales Commission
              </Typography>
            </Box>

            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "right" }}
            >
              <Box
                sx={{
                  width: 218.25,
                  height: 26,
                  gap: "10px",
                  ...(isIndividual && mutedVisibility),
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "26px",
                    letterSpacing: "0",
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                >
                  0%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 218.25,
                  height: 26,
                  gap: "10px",

                  ml: 3,
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "26px",
                    letterSpacing: "0",
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                >
                  0%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 218.25,
                  height: 26,
                  gap: "10px",

                  ml: 3,
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "26px",
                    letterSpacing: "0",
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                >
                  0%
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 218.25,
                  height: 26,
                  gap: "10px",

                  ml: 3,
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "26px",
                    letterSpacing: "0",
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                >
                  0%
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
              height: 200,
              mt: 5,
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 70,

                pt: "10px",

                borderBottom: "1px solid #FC5722",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "36px",
                  letterSpacing: "0.01em",
                  verticalAlign: "middle",
                }}
              >
                Customer Service
              </Typography>
            </Box>

            <Box
              sx={{
                width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                height: 118,
                mt: 2,
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #D0D5DD",
              }}
            >
              <Box
                sx={{
                  width: 280,
                  height: 44,
                  gap: "10px",
                }}
              >
                <Box sx={{ width: 351, height: 26 }}>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "26px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                    }}
                  >
                    Customer Support
                  </Typography>
                </Box>
                <Box sx={{ width: 351, height: 18 }}>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 500,
                      fontStyle: "Medium",
                      size: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                    }}
                  >
                    Receive online customer support{" "}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "right" }}
              >
                <Box
                  sx={{
                    width: 218.25,
                    height: 26,
                    gap: "10px",
                    ...(isIndividual && mutedVisibility),
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontStyle: "SemiBold",
                      fontSize: "18px",
                      lineHeight: "26px",
                      letterSpacing: "0",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Email Support
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 218.25,
                    height: 26,
                    gap: "10px",

                    ml: 3,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "26px",
                      letterSpacing: "0",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Email & chat support
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 218.25,
                    height: 26,
                    gap: "10px",
                    display: "flex",
                    alignItems: "center",
                    ml: 3,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "26px",
                      letterSpacing: "0",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Dedicated support specialist via Email, chat & phone
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 218.25,
                    height: 26,
                    gap: "10px",
                    display: "flex",
                    alignItems: "center",

                    ml: 3,
                  }}
                >
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "26px",
                      letterSpacing: "0",
                      verticalAlign: "middle",
                      textAlign: "center",
                    }}
                  >
                    Priority dedicated account team specialist via Email, Chat
                    or Phone
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                height: 1114,
                gap: "12px",
                mt: 3,
              }}
            >
              <Box
                sx={{
                  width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                  height: 70,
                  borderBottom: "1px solid #FC5722",
                  gap: "10px",
                  pt: "10px",
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "1%",
                    color: "#000000",
                  }}
                >
                  Business Essentials
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                  height: 1032,
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 90,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 44,

                      flexFlow: "column",
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Online Payment System
                      </Typography>
                    </Box>
                    <Box sx={{ width: 300, height: 18 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Pay for your services online
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo
                          size={20}
                          color={isIndividual ? "#A8D3C2" : "#599E85"}
                        />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 120,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 62,

                      flexFlow: "column",
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Oujat.com Digital Wallet
                      </Typography>
                    </Box>
                    <Box sx={{ width: 350, height: 18 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Online funds management account to make and receive
                        payments directly on the platform.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo
                          size={20}
                          color={isIndividual ? "#A8D3C2" : "#599E85"}
                        />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 156,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 100,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Multiple Users
                      </Typography>
                    </Box>
                    <Box sx={{ width: 350, height: 90 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Besides the main account holder, other members of your
                        company or organization can take part in your business
                        activities. You can for example assign members to
                        specific orders or agents in the chat in order to better
                        manage your operations
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ...(isIndividual && mutedVisibility),
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          fontStyle: "SemiBold",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        1
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        5
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        10
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        From 20
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 102,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 62,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Open Quote Requests
                      </Typography>
                    </Box>
                    <Box sx={{ width: 350, height: 30 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Send open quote requests to receive and compare multiple
                        quotes from several agents at once
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ...(isIndividual && mutedVisibility),
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          fontStyle: "SemiBold",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        7 Days
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        30 Days
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        40 Days
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        60 Days
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 138,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 98,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Open Request Expiry
                      </Typography>
                    </Box>
                    <Box sx={{ width: 330, height: 72 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        The maximum duration open requests will remain visible
                        in the agent global request database until you accept a
                        quote or until you manually cancel your request.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ...(isIndividual && mutedVisibility),
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          fontStyle: "SemiBold",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        20/Month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        100/Month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        140/Month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        From 200/Month
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 120,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 80,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Agents Per Open Request
                      </Typography>
                    </Box>
                    <Box sx={{ width: 330, height: 54 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        The default number of agents allowed to send quotations
                        for every open request sent, excluding agents with Green
                        Pass
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ...(isIndividual && mutedVisibility),
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          fontStyle: "SemiBold",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        2
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        5
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        8
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        15
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 120,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 80,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Private Requests
                      </Typography>
                    </Box>
                    <Box sx={{ width: 330, height: 54 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Fill out and send private quote request forms to
                        specific agents from their service listings, storefronts
                        or in chats.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ...(isIndividual && mutedVisibility),
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          fontStyle: "SemiBold",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        10/Month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        50/Month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        60/Month
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        From 100/Month
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 102,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 62,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Open Request Quote Comparator
                      </Typography>
                    </Box>
                    <Box sx={{ width: 320, height: 36 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Analyze multiple quotes side by side in a comparative
                        table
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 102,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 62,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Batch Requests Processing
                      </Typography>
                    </Box>
                    <Box sx={{ width: 320, height: 36 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Send multiple open requests at once using the same
                        spreadsheet
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Up to 20 at once
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Up to 100 at once
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/*  */}
            <Box
              sx={{
                width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                height: 562,
                gap: "12px",
                mt: 10,
              }}
            >
              <Box
                sx={{
                  width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                  height: 70,
                  borderBottom: " 1px solid #FC5722",
                  gap: "10px",
                  bgcolor: "#FFFFFF",
                }}
              >
                {" "}
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 700,
                    fontStyle: "Bold",
                    fontSize: "24px",
                    lineHeight: "36px",
                    letterSpacing: "1%",
                    color: " #000000",
                  }}
                >
                  Analytics
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                  height: 480,
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 138,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 98,
                      gap: "10px",
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Shipment History
                      </Typography>
                    </Box>
                    <Box sx={{ width: 320, height: 76 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Access a detailed summary of your monthly activities
                        (Number of transactions, total spendings, total spent
                        per route/service/agent and average cost per kg/mile)
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",
                        ...(isIndividual && mutedVisibility),
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          fontStyle: "SemiBold",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Last 30 Days
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 52,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Last 90 Days<br></br> (Export to CSV/PDF)
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 52,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        Last 12 Months <br></br>(Export to CSV/PDF)
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 52,
                        gap: "10px",
                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        All Time <br></br>(Export to CSV/PDF)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 120,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 80,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Agent Scorecards
                      </Typography>
                    </Box>
                    <Box sx={{ width: 335, height: 54 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        On-time delivery rate, damage rates, responsiveness per
                        agent and all-time reviews/ comments
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 120,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 80,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Access a detailed report of your
                      </Typography>
                    </Box>
                    <Box sx={{ width: 335, height: 54 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        warehouses or locations (Number of transactions, total
                        spendings, total spent per route/service/agent and
                        average cost per kg/mile)
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { md: 1300, lg: "100%", sm: 1300, xs: 1300 },
                    height: 120,
                    borderBottom: "1px solid #D0D5DD",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 280,
                      height: 62,
                    }}
                  >
                    <Box sx={{ width: 351, height: 26 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontStyle: "SemiBold",
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Cost Benchmarking
                      </Typography>
                    </Box>
                    <Box sx={{ width: 335, height: 36 }}>
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 500,
                          fontStyle: "Medium",
                          fontSize: "14px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#000000",
                        }}
                      >
                        Compare your rates against platform averages for similar
                        routes
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: 218.25,
                        height: 26,
                        gap: "10px",

                        ml: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          font: "Plus Jakarta Sans",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "0",
                          verticalAlign: "middle",
                          textAlign: "center",
                        }}
                      >
                        <CheckLogo />
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </Grid>
  );
}
