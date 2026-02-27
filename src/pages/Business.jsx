import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Divider,
  Checkbox,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import oujat from "../assets/logo/Oujat.com2.png";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "270px",
  },
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

//  validation
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, " Name must be at least 2 characters")
    .required("Full Name is required"),

  phone: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  createPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain at least one special character")
    .required("Create Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("createPassword")], "Passwords do not match")
    .required("Confirm Password is required"),
  country: Yup.string().required("Country is required"),
  addressLine1: Yup.string()
    .min(5, "Address is too short")
    .required("Address Line 1 is required"),
  city: Yup.string()
    .min(2, "City name is too short")
    .required("City is required"),
  state: Yup.string()
    .min(2, "State name is too short")
    .required("State is required"),

  postalCode: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(4, "Postal/ZIP Code is too short")
    .max(10, "Postal/ZIP Code is too long")
    .required("Postal/ZIP Code is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
  accountType: Yup.string().required("Account Type is required"),

  companyName: Yup.string()
    .min(2, "Company Name is too short")
    .required("Company Name is required"),

  companyUrl: Yup.string()
    .url("Enter a valid company URL (https://example.com)")
    .required("Company URL is required"),

  businessCategory: Yup.string().required("Business category is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters")
    .required("Description is required"),
});

export default function Business({ open, onClose, onSignupClick }) {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    createPassword: "",
    confirmPassword: "",
    companyName: "",
    companyUrl: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    description: "",
    accountType: "",
    country: "",
    businessCategory: "",
    terms: false,
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [, setLoading] = useState(false);
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = React.useState("+1");
  const [checked, setChecked] = React.useState(false);

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setValues((prev) => ({ ...prev, [name]: fieldValue }));

    try {
      await validationSchema.validateAt(name, {
        ...values,
        [name]: fieldValue,
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

      // 🔐 Generate OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      console.log("Business OTP:", otp);

      // 🔑 Save OTP
      sessionStorage.setItem("otp", otp);

      setTimeout(() => {
        setLoading(false);

        navigate("/otp", {
          state: {
            email: values.email,
          },
        });
      }, 500);
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
          height: { lg: 2000, sm: 1850, md: 2000, xs: 2320 },
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
            width: { lg: "680px", md: "680px", sm: "680px", xs: "305px" },
            height: { lg: 1825, sm: 1825, md: 1825, xs: 2300 },
            position: "relative",
            top: { md: "100px", lg: "100px", xs: 10 },
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
                  width: " auto",
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
                  Create Your{" "}
                  <span style={{ color: "#FC5722" }}>Shipper Account</span>
                </Typography>
              </Box>

              <Box
                sx={{
                  width: { md: "300px" },
                  height: "17px",
                  opacity: 1,
                  mt: { xs: 2, md: 0, sm: 0 },
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
                  Enter Basic Details according to following forms
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* personal info */}

          <Box
            sx={{
              width: { md: "634px", lg: "634px", sm: "634px", xs: "300px" },
              height: 812,
              gap: "24px",
              mt: 4,
            }}
          >
            <Box
              sx={{
                width: { md: "634px", lg: "634px", sm: "634px", xs: "265px" },
                height: "54px",
                display: "flex",
                gap: "10px",
                pb: "24px",
                opacity: 1,
                borderBottom: "1px solid #FC5722",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                {" "}
                Personal Information
              </Typography>
            </Box>
            {/* names */}
            <Box
              sx={{
                width: "auto",
                height: 80,
                gap: "24px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: 3,
              }}
            >
              <Box
                sx={{
                  width: { md: "634px", lg: "634px", sm: "634px", xs: "265px" },
                  height: 80,
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    verticalAlign: "middle",
                  }}
                >
                  {" "}
                  Full Name{" "}
                </Typography>
                <TextField
                  value={values.fullName}
                  onChange={handleChange}
                  name="fullName"
                  placeholder="Enter Full Name "
                  fullWidth
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: "auto",
                height: 80,
                gap: "24px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 3 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 305, md: 305, sm: 305, xs: 270 },
                  height: 80,
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  Email{" "}
                </Typography>

                <TextField
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter Email Address"
                  fullWidth
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: { lg: 305, md: 305, sm: 305, xs: 270 },
                  height: 80,
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  {" "}
                  Phone Number{" "}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {" "}
                  <TextField
                    select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    SelectProps={{
                      displayEmpty: true,
                      IconComponent: KeyboardArrowDownIcon,
                    }}
                    sx={{
                      mt: "8px",
                      width: "125px",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "6px",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                      },
                    }}
                  >
                    <MenuItem value="+1">+1</MenuItem>
                    <MenuItem value="+91">+91</MenuItem>
                    <MenuItem value="+44">+44</MenuItem>
                    <MenuItem value="+61">+61 </MenuItem>
                    <MenuItem value="+81">+81 </MenuItem>
                    <MenuItem value="+49">+49 </MenuItem>
                    <MenuItem value="+33">+33 </MenuItem>
                    <MenuItem value="+971">+971 </MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={values.phone ?? ""}
                    onChange={(e) =>
                      handleChange({
                        target: {
                          name: "phone",
                          value: e.target.value.replace(/\D/g, ""),
                        },
                      })
                    }
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    inputProps={{
                      inputMode: "numeric",
                      maxLength: 15,
                    }}
                    sx={{
                      mt: "8px",
                      "& .MuiOutlinedInput-root": {
                        height: "48px",
                        borderRadius: "6px",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "auto",
                height: 80,
                gap: "24px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 16 },
              }}
            >
              {" "}
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                    color: "#000000",
                  }}
                >
                  Account Type
                </Typography>{" "}
                <TextField
                  select
                  fullWidth
                  name="accountType"
                  value={values.accountType ?? ""}
                  onChange={handleChange}
                  error={Boolean(errors.accountType)}
                  helperText={errors.accountType || " "}
                  SelectProps={{
                    displayEmpty: true,
                    IconComponent: KeyboardArrowDownIcon,
                    renderValue: (selected) => {
                      if (!selected) {
                        return (
                          <span style={{ color: "#98A2B3" }}>
                            Select Account Type
                          </span>
                        );
                      }
                      return selected;
                    },
                  }}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>Select Account Type</em>
                  </MenuItem>

                  <MenuItem value="personal">Personal</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                </TextField>
              </Box>
            </Box>

            <Box
              sx={{
                width: "auto",
                height: 80,
                gap: "24px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: 3,
              }}
            >
              <Box
                sx={{
                  width: { lg: 305, md: 305, sm: 305, xs: 270 },
                  height: 80,
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    verticalAlign: "middle",
                  }}
                >
                  Company Name
                </Typography>
                <TextField
                  fullWidth
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                  placeholder="Enter Company Name"
                  error={Boolean(errors.companyName)}
                  helperText={errors.companyName || " "}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { lg: 305, md: 305, sm: 305, xs: 270 },
                  height: 80,
                  gap: "8px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  Company URL
                </Typography>
                <TextField
                  fullWidth
                  name="companyUrl"
                  value={values.companyUrl}
                  onChange={handleChange}
                  placeholder="Enter Company URL"
                  error={Boolean(errors.companyUrl)}
                  helperText={errors.companyUrl || " "}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 80,
                gap: "8px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 17 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  Create Password{" "}
                </Typography>
                <TextField
                  fullWidth
                  name="createPassword"
                  value={values.createPassword}
                  onChange={handleChange}
                  error={Boolean(errors.createPassword)}
                  helperText={errors.createPassword}
                  placeholder="Create Password"
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
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
            </Box>

            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 80,
                gap: "8px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 3 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600, // SemiBold
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  Confirm Password{" "}
                </Typography>
                <TextField
                  fullWidth
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword}
                  placeholder="Confirm Password"
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
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
            </Box>

            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 80,
                gap: "8px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 3 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  Country{" "}
                </Typography>
                <TextField
                  select
                  fullWidth
                  name="country"
                  value={values.country ?? ""}
                  onChange={handleChange}
                  error={Boolean(errors.country)}
                  helperText={errors.country || " "}
                  SelectProps={{
                    displayEmpty: true,
                    IconComponent: KeyboardArrowDownIcon,
                    renderValue: (selected) => {
                      if (!selected) {
                        return (
                          <span style={{ color: "#98A2B3" }}>
                            Select Country
                          </span>
                        );
                      }
                      return selected;
                    },
                  }}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                >
                  <MenuItem value="">Select Country</MenuItem>

                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                </TextField>
              </Box>
            </Box>

            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 110,
                gap: "8px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 3 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  {" "}
                  Address{" "}
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    name="addressLine1"
                    value={values.addressLine1}
                    onChange={handleChange}
                    error={Boolean(errors.addressLine1)}
                    helperText={errors.addressLine1 || " "}
                    multiline
                    rows={3}
                    placeholder="Address Line 1"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "16px",
                        lineHeight: "24px",
                        alignItems: "flex-start",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#98A2B3",
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 80,
                gap: "16px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 5, lg: 5, sm: 5, xs: 5 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  City{" "}
                </Typography>
                <TextField
                  fullWidth
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  error={Boolean(errors.city)}
                  helperText={errors.city || " "}
                  placeholder="Enter City"
                  sx={{
                    mt: "8px",
                    width: { lg: 200, md: 200, sm: 200, xs: 270 },
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                  mt: { md: 0, lg: 0, sm: 0, xs: 5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  State{" "}
                </Typography>
                <TextField
                  fullWidth
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  error={Boolean(errors.state)}
                  helperText={errors.state || " "}
                  placeholder="Enter State"
                  sx={{
                    mt: "8px",
                    width: { lg: 200, md: 200, sm: 200, xs: 270 },
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                  mt: { md: 0, lg: 0, sm: 0, xs: 5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  Postal/ZIP Code{" "}
                </Typography>
                <TextField
                  fullWidth
                  name="postalCode"
                  value={values.postalCode ?? ""}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: "postalCode",
                        value: e.target.value.replace(/\D/g, ""),
                      },
                    })
                  }
                  placeholder="Enter Postal/ZIP Code"
                  error={Boolean(errors.postalCode)}
                  helperText={errors.postalCode || " "}
                  inputProps={{
                    inputMode: "numeric",
                  }}
                  sx={{
                    mt: "8px",
                    width: { lg: 200, md: 200, sm: 200, xs: 270 },
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: { md: "634px", lg: "634px", sm: "634px", xs: "265px" },
                height: "54px",
                display: "flex",
                gap: "10px",
                pb: "24px",
                mt: { xs: 29, md: 4, sm: 4 },
                opacity: 1,
                borderBottom: "1px solid #FC5722",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "150%",
                  letterSpacing: "0%",
                }}
              >
                {" "}
                Business Information
              </Typography>
            </Box>
            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 80,
                gap: "8px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 3 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    font: "Plus Jakarta Sans",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                    color: "#000000",
                  }}
                >
                  Which category best fits your business?
                </Typography>
                <TextField
                  select
                  fullWidth
                  name="businessCategory"
                  value={values.businessCategory}
                  onChange={handleChange}
                  error={Boolean(errors.businessCategory)}
                  helperText={errors.businessCategory || " "}
                  SelectProps={{
                    displayEmpty: true,
                    IconComponent: KeyboardArrowDownIcon,
                    renderValue: (selected) => {
                      if (!selected) {
                        return (
                          <span style={{ color: "#98A2B3" }}>
                            Select category
                          </span>
                        );
                      }
                      return selected;
                    },
                  }}
                  sx={{
                    mt: "8px",
                    "& .MuiOutlinedInput-root": {
                      height: "48px",
                      borderRadius: "6px",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>Select category</em>
                  </MenuItem>

                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="E-commerce">E-commerce</MenuItem>
                  <MenuItem value="IT Services">IT Services</MenuItem>
                  <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Education">Education</MenuItem>
                </TextField>
              </Box>
            </Box>

            <Box
              sx={{
                width: { lg: 634, md: 634, sm: 634, xs: 270 },
                height: 110,
                gap: "8px",
                display: "flex",
                flexFlow: { lg: "row", md: "row", sm: "row", xs: "column" },
                mt: { md: 3, lg: 3, sm: 3, xs: 6 },
              }}
            >
              <Box
                sx={{
                  width: { lg: 634, md: 634, sm: 634, xs: 270 },
                  height: 48,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    verticalAlign: "middle",
                  }}
                >
                  {" "}
                  Add a short description of your business
                </Typography>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    error={Boolean(errors.description)}
                    helperText={errors.description || " "}
                    multiline
                    rows={3}
                    placeholder="Add description here"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "16px",
                        lineHeight: "24px",
                        alignItems: "flex-start",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#98A2B3",
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: { xs: 270, sm: "auto" },
                mt: { xs: 10, sm: 5, md: 5 },
              }}
            >
              <Checkbox
                name="terms"
                checked={!!values.terms}
                onChange={handleChange}
                sx={{
                  padding: 0,
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />

              <Typography
                component="span"
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "24px",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
                onClick={() => setChecked(!checked)}
              >
                I agree to the terms and conditions
              </Typography>
            </Box>
            {errors.terms && (
              <Typography
                sx={{
                  color: "#d32f2f",
                  fontSize: "12px",
                  mt: "4px",
                }}
              >
                {errors.terms}
              </Typography>
            )}
            <Box
              sx={{
                width: { xs: 270, sm: "634px", md: "634px", lg: "634px" },
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
                type="submit"
                aria-label="close"
                sx={{
                  width: { xs: "270px", sm: "634px", md: "634px", lg: "634px" },
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
                  Next
                </Typography>
              </Button>
            </Box>

            <Box sx={{ mt: 3 }}>
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

            <Typography
              variant="body2"
              sx={{
                mt: 2,
                mb: 1,
                color: "#8F9DAC",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Already have an account?{" "}
              <Link
                onClick={() => navigate("/")}
                underline="hover"
                sx={{ color: "#E56060", fontWeight: 600, cursor: "pointer" }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Container>
      </Container>
    </Grid>
  );
}
