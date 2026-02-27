import React from "react";
import { Button, Container, Grid, Box, Typography } from "@mui/material";
import oujat from "../assets/logo/Oujat.com2.png";
import frame from "../assets/logo/Frame.png";
import business from "../assets/logo/Business.png";
import { useNavigate } from "react-router-dom";

export default function Shipper() {
  const navigate = useNavigate();
  return (
    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignitem: "center",
        }}
      >
        <Container
          component="form"
          sx={{
            width: { lg: 981, md: 981, sm: 981, xs: "300px" },
            height: { lg: 444, md: 444, xs: 710, sm: 444 },
            position: "relative",
            top: { md: "100px", lg: "120px", xs: 10 },
            backgroundColor: "#FFFFFF",
            border: "1px solid #00000029",
            borderRadius: "8px",
            boxShadow: `
    6px 12px 30px 0px #00000008,
    23px 49px 54px 0px #00000005,
    51px 110px 73px 0px #00000003,
    91px 196px 87px 0px #00000000,
    142px 307px 95px 0px #00000000
  `,
          }}
        >
          <Box
            sx={{
              width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
              height: "137px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              opacity: 1,
              justifyContent: "center",
              pt: "40px",
            }}
          >
            <Box
              component="img"
              src={oujat}
              alt="img"
              sx={{ width: 148, height: 34 }}
            ></Box>

            <Box
              sx={{
                width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
                height: "71px",
                display: "flex",
                flexDirection: "column",
                gap: "13px",
                opacity: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: "auto", sm: 451, md: 451, lg: 451 },
                  height: 42,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: {
                      lg: "32px",
                      md: "32px",
                      sm: "32px",
                      xs: "24px",
                    },
                    lineHeight: "130%",
                    letterSpacing: "-0.02em",
                    verticalAlign: "middle",
                  }}
                >
                  Create your{" "}
                  <span style={{ color: "#FC5722" }}> shipper's account</span>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: { lg: "auto", md: "auto", sm: 700, xs: "auto" },
              height: 224,
              gap: "24px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              mt: { xs: 4, md: 0, sm: 0 },
            }}
          >
            <Button
              onClick={() => navigate("/individual")}
              sx={{
                width: { lg: "460.5px", md: "460.5px", sm: "460.5px" },
                height: "224px",
                borderRadius: "16px",
                border: "1.5px solid #D0D5DD",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                p: "30px",
                opacity: 1,
                boxSizing: "border-box",
              }}
            >
              <Box
                component="img"
                src={frame}
                alt="img"
                sx={{ width: 84, height: 84 }}
              ></Box>
              <Box sx={{ width: "auto", height: 60 }}>
                {" "}
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "60px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#FC5722",
                    textTransform: "capitalize",
                  }}
                >
                  Individual
                </Typography>
              </Box>
            </Button>

            <Button
              onClick={() => navigate("/business")}
              sx={{
                width: { lg: "460.5px", md: "460.5px", sm: "460.5px" },
                height: "224px",
                borderRadius: "16px",
                border: "1.5px solid #D0D5DD",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                p: "30px",
                opacity: 1,
                boxSizing: "border-box",
              }}
            >
              <Box
                component="img"
                src={business}
                alt="img"
                sx={{ width: 84, height: 84 }}
              ></Box>
              <Box sx={{ width: "auto", height: 60 }}>
                {" "}
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "60px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#FC5722",
                    textTransform: "capitalize",
                  }}
                >
                  Business
                </Typography>
              </Box>
            </Button>
          </Box>
        </Container>
      </Container>
    </Grid>
  );
}
