import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Divider,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import oujat from "../assets/logo/Oujat.com2.png";
import google from "../assets/logo/google.png";
import apple from "../assets/logo/apple.png";
import * as Yup from "yup";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
const initialValues = { email: "", password: "" };
// ✅ SAME validation as LoginFormDialog
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login({ open, onClose, onSignupClick }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [, setResponseMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      setErrors({});
      setShowPassword(false);
      setLoading(false);
      setResponseMsg("Login successful ✅");
      setValues(initialValues);
    }
  }, [open]);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    try {
      await validationSchema.validateAt(name, {
        ...values,
        [name]: value,
      });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(values, { abortEarly: false });
      setErrors({});
      setLoading(true);

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        values,
      );

      console.log("Login Response:", response.data);
      setResponseMsg("Login successful ✅");
      setValues(initialValues);

      setTimeout(() => {
        setLoading(false);
        onClose?.();
      }, 800);
    } catch (err) {
      setLoading(false);
      if (err.inner) {
        const formErrors = {};
        err.inner.forEach((error) => {
          formErrors[error.path] = error.message;
        });
        setErrors(formErrors);
      }
    }
  };

  const content = <p>{``}</p>;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
      <Container
        sx={{
          height: 900,
          display: "flex",
          justifyContent: "center",
          alignitem: "center",
          width: "200px",
        }}
      >
        <Container
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: { lg: "680px", md: "680px", sm: "680px", xs: "300px" },
            height: "713px",
            position: "relative",
            top: { md: "100px", lg: "100px", xs: 100 },
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
                  width: { xs: "auto", sm: 351, md: 351, lg: 351 },
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
                  Welcome to <span style={{ color: "#FC5722" }}>Oujat.com</span>
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { md: "300px" },
                  height: "17px",
                  opacity: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "140%",
                    letterSpacing: "-0.01em",
                    verticalAlign: "middle",
                    color: "#6C7278",
                  }}
                >
                  Enter the required information to log into your account
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
              width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
              height: 284,
              mt: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
                height: 80,
                flexFlow: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Email/User ID
              </Typography>

              <TextField
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Enter Email Address/User ID"
                fullWidth
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
                height: 80,
                flexFlow: "column",
                mt: "30px",
              }}
            >
              <Box sx={{ width: 104, height: 24 }}>
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  Password
                </Typography>
              </Box>
              <TextField
                fullWidth
                name="password"
                value={values.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{
                height: "20px",
                display: "flex",
                justifyContent: {
                  lg: "flex-end",
                  md: "flex-end",
                  sm: "flex-end",
                  xs: "center",
                },
                mt: { lg: "10px", md: "10px", sm: "10px", xs: "30px" },
                opacity: 1,
              }}
            >
              <Link
                onClick={onSignupClick}
                underline="none"
                sx={{ color: "#3D8F81", fontWeight: 600, cursor: "pointer" }}
              >
                <Typography
                  sx={{
                    height: "20px",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                    color: "#E56060",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Link>
            </Box>

            <Box
              sx={{
                width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                opacity: 1,
                mt: { lg: "30px", md: "30px", sm: "30px", xs: "20px" },
              }}
            >
              <Button
                onClick={() => navigate("/Dashboard")}
                disabled={loading}
                aria-label="close"
                sx={{
                  width: { xs: "300px", sm: "634px", md: "634px", lg: "634px" },
                  height: "48px",
                  borderRadius: "8px",
                  px: "40px",
                  py: "10px",
                  opacity: 1,
                  textTransform: "none",
                  background: "#FC5722",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}
                >
                  Login
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: "40px" }}>
            <Root>
              {content}
              <Divider>
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                    color: " #000000",
                  }}
                >
                  Or
                </Typography>
              </Divider>
            </Root>
          </Box>

          <Box
            sx={{
              width: { xs: "auto", sm: "634px", md: "634px", lg: "634px" },
              height: "44px",
              display: "flex",
              flexFlow: { xs: "column", sm: "row", md: "row", lg: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "6px", sm: "42px", md: "42px", lg: "42px" },
              opacity: 1,
              mt: { md: "20px", lg: "30px", sm: "20px", xs: "40px" },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                width: "225px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity: 1,
                borderRadius: "8px",
                borderWidth: "1px",
                px: "16px",
                py: "10px",
                textTransform: "none",
              }}
            >
              <Box
                component="img"
                src={google}
                alt="img"
                sx={{ width: 24, height: 24 }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#344054",
                }}
              >
                Sign in with Google
              </Typography>
            </Button>

            <Button
              variant="outlined"
              sx={{
                width: "225px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                opacity: 1,
                borderRadius: "8px",
                borderWidth: "1px",
                px: "16px",
                py: "10px",
                textTransform: "none",
              }}
            >
              <Box
                component="img"
                src={apple}
                alt="img"
                sx={{ width: 24, height: 24 }}
              />
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#344054",
                }}
              >
                Sign in with Apple
              </Typography>
            </Button>
          </Box>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 4, mb: 1, color: "#8F9DAC" }}
          >
            Don’t have an account?{" "}
            <Link
              onClick={() => navigate("/shipper")}
              underline="hover"
              sx={{ color: "#E56060", fontWeight: 600, cursor: "pointer" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Container>
      </Container>
    </Grid>
  );
}
