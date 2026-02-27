import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import oujat from "../assets/logo/Oujat.com2.png";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useLocation } from "react-router-dom";

const OTP_LENGTH = 4;

export default function Otp() {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(29);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const [otpStatus, setOtpStatus] = useState("default");

  const location = useLocation();
  const email = location.state?.email;

  const storedOtp = sessionStorage.getItem("otp");
  const enteredOtp = otp.join("");

  const handleVerifyOtp = () => {
    if (!storedOtp) return;

    if (enteredOtp === storedOtp) {
      setOtpStatus("success");

      setTimeout(() => {
        sessionStorage.removeItem("otp");
        navigate("/subscriptionindividual");
      }, 800);
    } else {
      setOtpStatus("error");
    }
  };

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  //
  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value) {
      const nextIndex = index + 1;
      if (nextIndex < otp.length && inputsRef.current[nextIndex]) {
        inputsRef.current[nextIndex].focus();
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevIndex = index - 1;
      if (inputsRef.current[prevIndex]) {
        inputsRef.current[prevIndex].focus();
      }
    }
  };

  const handleResend = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();

    console.log("Resent OTP:", newOtp);

    sessionStorage.setItem("otp", newOtp);

    setOtp(new Array(OTP_LENGTH).fill(""));
    setTimer(29);
    inputsRef.current[0]?.focus();
  };

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
            width: { lg: 670, md: 670, sm: 670, xs: "310px" },
            height: { lg: 420, md: 420, xs: 450, sm: 450 },
            position: "relative",
            top: { md: "200px", lg: "125px", xs: 75 },
            backgroundColor: "#FFFFFF",
            border: "1px solid #00000029",
            borderRadius: "8px",
            boxShadow: `
    6px 12px 30px 0px #000000 08,
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
                  Enter
                  <span style={{ color: "#FC5722" }}> OTP Number</span>
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "auto",
              height: "17px",
              opacity: 1,
              mt: { xs: -2, md: -2, sm: 0 },
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                fontWeight: 500,
                style: "Medium",
                fontSize: "12px",
                lineHeight: "140%",
                letterSpacing: "0.01em",
                verticalAlign: "middle",
                color: "#6C7278",
              }}
            >
              We've sent your one-time password to{" "}
              <span
                style={{
                  font: "Plus Jakarta Sans",
                  fontWeight: 800,
                  style: "ExtraBold",
                  fontSize: "17px",
                  lineHeight: "140%",
                  letterSpacing: "-0.01em",
                  verticalAlign: "middle",
                  color: "#000000",
                }}
              >
                {email}
                <IconButton size="small">
                  <EditIcon sx={{ fontSize: 16, color: "#FF5722" }} />
                </IconButton>
              </span>
            </Typography>
          </Box>

          <Box
            sx={{
              width: { md: 634, lg: 634, xs: 300, sm: 634 },
              height: 164,
              gap: "24px",
              mt: 5,
            }}
          >
            <Box
              sx={{
                width: { md: 634, lg: 634, xs: 200, sm: 634 },
                display: "flex",
                justifyContent: "left",
                gap: { md: "24px", sm: "24px", xs: "14px" },
                mt: { md: 3, sm: 3, xs: 6 },
              }}
            >
              {otp.map((digit, index) => (
                <Box
                  key={index}
                  component="input"
                  ref={(el) => (inputsRef.current[index] = el)}
                  value={otp[index] ?? ""}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  maxLength={1}
                  sx={{
                    width: 50.5,
                    height: 48,
                    textAlign: "center",
                    fontSize: 20,
                    borderRadius: "6px",
                    border: `1.5px solid ${
                      otpStatus === "success"
                        ? "#2E7D32" // green
                        : otpStatus === "error"
                        ? "#D32F2F" // red
                        : "#DFE3E7"
                    }`,
                    outline: "none",
                    "&:focus": {
                      borderColor: "#FF5722",
                    },
                  }}
                />
              ))}
            </Box>

            <Box
              sx={{
                width: { md: 634, lg: 634, xs: "auto", sm: 634 },
                height: 20,
                gap: "24px",
                mt: 3,
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  fontWeight: 600,
                  size: "14px",
                  lineHeight: "140%",
                  letterSpacing: "-1%",
                  verticalAlign: "middle",
                  color: "#6C7278",
                  display: "flex",
                  flexFlow: { xs: "column", md: "row", sm: "row" },
                }}
              >
                Haven’t Received Code?{" "}
                {timer > 0 ? (
                  <span
                    style={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      style: "SemiBold",
                      size: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0px",
                      color: "#FC5722",
                    }}
                  >
                    Send Again {timer}sec
                  </span>
                ) : (
                  <span
                    style={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 600,
                      style: "SemiBold",
                      size: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0px",
                      color: "#FC5722",
                    }}
                    onClick={handleResend}
                  >
                    Send Again
                  </span>
                )}
              </Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              onClick={handleVerifyOtp}
              disabled={otp.includes("")}
              sx={{
                width: { md: 620, lg: 620, xs: 275, sm: 620 },
                height: 48,
                borderRadius: "8px",
                bgcolor: "#FC5722",
                display: "flex",
                mt: { md: 3, xs: 5 },
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  fontWeight: 700,
                  style: "Bold",
                  size: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Confirm OTP Number
              </Typography>
            </Button>
          </Box>
        </Container>
      </Container>
    </Grid>
  );
}
