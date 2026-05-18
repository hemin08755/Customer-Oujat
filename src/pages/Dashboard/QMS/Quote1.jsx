import React, { useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Popover,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import MenuBookIcon from "@mui/icons-material/PermContactCalendar";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import ShipperDashboard from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import BoxStepper1 from "../../../components/BoxStepper1";

const FlagImg = ({ code, size = 24 }) => (
  <Box
    component="img"
    src={`https://flagcdn.com/w40/${code}.png`}
    alt={code}
    onError={(e) => {
      e.target.style.display = "none";
    }}
    sx={{
      width: size,
      height: size,
      borderRadius: "10px",
      objectFit: "cover",
      flexShrink: 0,
      display: "block",
    }}
  />
);

const validationSchema = Yup.object({
  fromCountry: Yup.string().required("Origin country is required"),
  toCountry: Yup.string()
    .required("Destination country is required")
    .test(
      "different-country",
      "Destination must be different from origin",
      function (value) {
        return value !== this.parent.fromCountry;
      },
    ),

  fromInput: Yup.string().required(""),
  toInput: Yup.string().required(""),
});

// ─── ARRAYS ───────────────────────────────────────────────────────────────────

const TABS = [
  { label: "Create a new request" },
  { label: "Duplicate a past request" },
];

const COUNTRIES = [
  { value: "mumbai_india", label: "Mumbai, India", flagCode: "in" },
  { value: "doha_saudi", label: "Doha, Saudi Arabia", flagCode: "sa" },
  { value: "dubai_uae", label: "Dubai, UAE", flagCode: "ae" },
  { value: "london_uk", label: "London, UK", flagCode: "gb" },
  { value: "newyork_usa", label: "New York, USA", flagCode: "us" },
];

const LOCATION_FIELDS = [
  {
    id: "from",
    countryLabel: "Country/territory",
    inputLabel: "From",
    inputPlaceholder: "Type sender's name, Street address, City or Postal code",
    stateKey: "fromCountry",
    inputStateKey: "fromInput",
    countryErrorKey: "fromCountry",
    inputErrorKey: "fromInput",
  },
  {
    id: "to",
    countryLabel: "Country/territory",
    inputLabel: "To",
    inputPlaceholder:
      "Type recipient's name, Street address, City or Postal code",
    stateKey: "toCountry",
    inputStateKey: "toInput",
    countryErrorKey: "toCountry",
    inputErrorKey: "toInput",
  },
];

const ADDRESS_COLUMNS = [
  { id: "nickName", label: "Nick Name" },
  { id: "name", label: "Name" },
  { id: "address", label: "Address" },
  { id: "city", label: "City" },
  { id: "country", label: "Country" },
];

const ADDRESS_ROWS = [
  {
    id: 1,
    nickName: "Bor Infor",
    name: "Desire Mehba",
    address: "12606 Grey Edge Court",
    city: "Doha",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 2,
    nickName: "DataSync Technologies",
    name: "Mohammed Al-Farsi",
    address: "12825 Maple Leaf Drive",
    city: "Manama",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 3,
    nickName: "RetailMax Systems",
    name: "John Doe",
    address: "13267 Mountain Peak Road",
    city: "Muscat",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 4,
    nickName: "FinTech Solutions",
    name: "John Doe",
    address: "13150 Pine Tree Way",
    city: "Abu Dhabi",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 5,
    nickName: "SmartHome Innovations",
    name: "Ravi Kumar",
    address: "13380 Riverbend Drive",
    city: "Jeddah",
    country: "Colambo, Srilanka",
    flagCode: "lk",
  },
  {
    id: 6,
    nickName: "Bor Infor",
    name: "Sofia Martinez",
    address: "13031 Ocean View Lane",
    city: "Riyadh",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 7,
    nickName: "AgriTech Ventures",
    name: "Jessica Lin",
    address: "12942 Sunset Ridge Avenue",
    city: "Dubai",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 8,
    nickName: "EcoEnergy Corp",
    name: "John Doe",
    address: "12701 Blue Sky Boulevard",
    city: "Doha",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 9,
    nickName: "HealthCloud Innovations",
    name: "Liam O'Connor",
    address: "13495 Desert Oasis Street",
    city: "Kuwait City",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
  {
    id: 10,
    nickName: "AutoPilot Dynamics",
    name: "Desire Mehba",
    address: "12606 Grey Edge Court",
    city: "Doha",
    country: "Saudi Arabia",
    flagCode: "sa",
  },
];

const FORM_BUTTONS = [
  {
    id: "clear",
    label: "Clear",
    variant: "outlined",
    sx: {
      textTransform: "none",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 500,
      fontSize: { xs: "13px", sm: "14px" },
      color: "#374151",
      borderColor: "#D1D5DB",
      borderRadius: "8px",
      px: { xs: 2.5, sm: 3 },
      py: 1,
      "&:hover": { borderColor: "#9CA3AF", backgroundColor: "#F9FAFB" },
    },
  },
  {
    id: "next",
    label: "Next",
    variant: "contained",

    sx: {
      textTransform: "none",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 600,
      fontSize: { xs: "13px", sm: "14px" },
      backgroundColor: "#111827",
      color: "#fff",
      borderRadius: "8px",
      px: { xs: 2.5, sm: 3 },
      py: 1,
      boxShadow: "none",
      "&:hover": { backgroundColor: "#1F2937", boxShadow: "none" },
    },
  },
];

// ─── ADDRESS BOOK FIELD COMPONENT ────────────────────────────────────────────

function AddressBookField({
  field,
  formState,
  handleFormChange,
  handleBlur,
  getError,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const anchorRef = useRef(null);

  const open = Boolean(anchorEl);
  const hasError = !!getError(field.inputErrorKey);

  const handleIconClick = () => setAnchorEl(anchorRef.current);

  const handleClose = () => {
    setAnchorEl(null);
    setSearchQuery("");
  };

  const handleSelectAddress = (row) => {
    const fullAddress = `${row.name}, ${row.address}, ${row.city}, ${row.country}`;
    handleFormChange(field.inputStateKey, fullAddress);
    handleClose();
  };

  const filteredRows = ADDRESS_ROWS.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  return (
    <Box ref={anchorRef} sx={{ maxWidth: { md: "738px" }, width: "100%" }}>
      <TextField
        size="small"
        fullWidth
        placeholder={field.inputPlaceholder}
        value={formState[field.inputStateKey]}
        onChange={(e) => handleFormChange(field.inputStateKey, e.target.value)}
        onBlur={() => handleBlur(field.inputErrorKey)}
        error={hasError}
        helperText={
          hasError ? (
            <span
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "12px",
                color: "#EF4444",
              }}
            >
              {getError(field.inputErrorKey)}
            </span>
          ) : null
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            pr: 0,
            "&.Mui-focused fieldset": {
              borderColor: hasError ? "#EF4444" : "#FF5722",
            },
            "& fieldset": {
              borderColor: hasError ? "#EF4444" : "#D1D5DB",
            },
            "&:hover fieldset": {
              borderColor: hasError ? "#EF4444" : "#9CA3AF",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ m: 0, p: 0 }}>
              <Box
                onClick={handleIconClick}
                sx={{
                  width: 38,
                  height: 38,
                  backgroundColor: open ? "#E64A19" : "#FF5722",
                  borderRadius: "0 6px 6px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "background-color 0.15s ease",
                  "&:hover": { backgroundColor: "#E64A19" },
                }}
              >
                <MenuBookIcon sx={{ fontSize: 18, color: "#fff" }} />
              </Box>
            </InputAdornment>
          ),
        }}
      />

      {/* ── Address Book Popover ── */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            mt: 0.5,
            width: anchorRef.current ? anchorRef.current.offsetWidth : 500,
            borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            border: "1px solid #E5E7EB",
            overflow: "hidden",
          },
        }}
      >
        {/* Popover Header */}
        <Box
          sx={{
            px: 2,
            py: 1.5,
            borderBottom: "1px solid #F3F4F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#FAFAFA",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#111827",
            }}
          >
            Select Address
          </Typography>

          <TextField
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 16, color: "#9CA3AF" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: "180px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                fontSize: "13px",
                "&.Mui-focused fieldset": { borderColor: "#FF5722" },
              },
            }}
          />
        </Box>

        {/* Address Table */}
        <TableContainer sx={{ maxHeight: 280, overflow: "auto" }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                {ADDRESS_COLUMNS.map((col) => (
                  <TableCell
                    key={col.id}
                    sx={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 600,
                      fontSize: "12px",
                      color: "#6B7280",
                      backgroundColor: "#F9FAFB",
                      borderBottom: "1px solid #F3F4F6",
                      py: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => handleSelectAddress(row)}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#FFF7F5" },
                    "& td": { borderBottom: "1px solid #F9FAFB", py: 1.2 },
                  }}
                >
                  {ADDRESS_COLUMNS.map((col) => (
                    <TableCell
                      key={col.id}
                      sx={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontSize: "12px",
                        color: "#111827",
                        whiteSpace: col.id === "address" ? "normal" : "nowrap",
                      }}
                    >
                      {col.id === "country" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.8,
                          }}
                        >
                          <FlagImg code={row.flagCode} size={16} />
                          {row.country}
                        </Box>
                      ) : (
                        row[col.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              {filteredRows.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={ADDRESS_COLUMNS.length}
                    sx={{ textAlign: "center", py: 4 }}
                  >
                    <Typography color="gray" fontSize="13px">
                      No addresses found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Popover Footer */}
        <Box
          sx={{
            px: 2,
            py: 1,
            borderTop: "1px solid #F3F4F6",
            backgroundColor: "#FAFAFA",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size="small"
            onClick={handleClose}
            sx={{
              textTransform: "none",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              color: "#6B7280",
              "&:hover": { color: "#111827" },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Popover>
    </Box>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Quotes1() {
  const navigate = useNavigate();
  const [fixedSidebar] = useState(false);
  const [value, setValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // ── All fields start empty ──
  const [formState, setFormState] = useState({
    fromCountry: "",
    toCountry: "",
    fromInput: "",
    toInput: "",
  });

  const [errors, setErrors] = useState({
    fromCountry: "",
    fromInput: "",
    toCountry: "",
  });

  const [touched, setTouched] = useState({
    fromCountry: false,
    fromInput: false,
    toCountry: false,
    toInput: false,
  });

  const handleTabChange = (event, newValue) => setValue(newValue);

  const validateField = async (key, val) => {
    try {
      await validationSchema.validateAt(key, { ...formState, [key]: val });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.message }));
    }
  };

  const handleFormChange = (key, val) => {
    setFormState((prev) => ({ ...prev, [key]: val }));
    if (touched[key]) validateField(key, val);
  };

  const handleBlur = (key) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
    validateField(key, formState[key]);
  };

  // ── Clear resets everything to empty ──
  const handleClear = () => {
    setFormState({
      fromCountry: "",
      toCountry: "",
      fromInput: "",
      toInput: "",
    });
    setErrors({
      fromCountry: "",
      fromInput: "",
      toCountry: "",
      toInput: "",
    });
    setTouched({
      fromCountry: false,
      fromInput: false,
      toCountry: false,
      toInput: false,
    });
    setSearchQuery("");
  };

  const handleNext = async () => {
    setTouched({
      fromCountry: true,
      fromInput: true,
      toCountry: true,
      toInput: true,
    });

    try {
      await validationSchema.validate(formState, { abortEarly: false });

      console.log("Form valid, proceeding:", formState);

      // ✅ ROUTE HERE
      navigate("/quote1_1", {
        state: formState, // optional data pass
      });
    } catch (err) {
      const newErrors = {
        fromCountry: "",
        fromInput: "",
        toCountry: "",
        toInput: "",
      };

      err.inner.forEach((e) => {
        if (e.path in newErrors) newErrors[e.path] = e.message;
      });

      setErrors(newErrors);
    }
  };

  const BUTTON_HANDLERS = { clear: handleClear, next: handleNext };

  const ROUTE_SUMMARY = [
    COUNTRIES.find((c) => c.value === formState.fromCountry),
    COUNTRIES.find((c) => c.value === formState.toCountry),
  ].filter(Boolean);

  const filteredRows = ADDRESS_ROWS.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const getError = (key) => (touched[key] ? errors[key] : "");

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <ShipperDashboard />

        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Navbar fixed={fixedSidebar} />

          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              mt: { xs: 0, sm: -4 },
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
            }}
          >
            {/* ── HEADER ── */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: { xs: 3, sm: 5 },
              }}
            >
              <IconButton
                onClick={() => navigate(-1)}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  backgroundColor: "#f2f2f2",
                  border: "1px solid #e0e0e0",
                  flexShrink: 0,
                  "&:hover": { backgroundColor: "#e8e8e8" },
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 20, color: "#000" }} />
              </IconButton>

              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "15px", sm: "18px", md: "20px" },
                  color: "#000000",
                }}
              >
                International Transport Open Request Form
              </Typography>
            </Box>

            <Divider sx={{ border: "1px solid #EAECF0" }} />

            {/* ── STEPPER ── */}
            <Box sx={{ width: "100%", mt: "24px" }}>
              <BoxStepper1 />
            </Box>

            {/* ── TABS ── */}
            <Box sx={{ width: "100%", mt: "24px" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="inherit"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                TabIndicatorProps={{
                  style: { backgroundColor: "#FF5722", height: "1px" },
                }}
                sx={{ "& .MuiTabs-scrollButtons": { color: "#FF5722" } }}
              >
                {TABS.map((tab, index) => (
                  <Tab
                    key={tab.label}
                    label={tab.label}
                    sx={{
                      textTransform: "none",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: "14px", sm: "17px", md: "21px" },
                      minWidth: "auto",
                      px: { xs: 1, sm: 2 },
                      color: value === index ? "#FF5722" : "#6B7280",
                    }}
                  />
                ))}
              </Tabs>

              {/* ════════════════════════════════
                  TAB 0 — Create new request
              ════════════════════════════════ */}
              {value === 0 && (
                <Box sx={{ mt: { xs: "24px", sm: "44px" } }}>
                  <Typography
                    sx={{
                      color: "#FF5722",
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: "15px", sm: "18px" },
                      mb: "14px",
                    }}
                  >
                    Origin & Destination
                  </Typography>

                  <Grid container spacing={2}>
                    {LOCATION_FIELDS.map((field) => (
                      <React.Fragment key={field.id}>
                        {/* ── Country Select ── */}
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                          <Typography
                            sx={{
                              mb: "8px",
                              fontFamily: "Plus Jakarta Sans, sans-serif",
                              fontWeight: 600,
                              fontSize: { xs: "13px", sm: "15px", md: "16px" },
                            }}
                          >
                            {field.countryLabel}
                          </Typography>
                          <FormControl
                            size="small"
                            fullWidth
                            error={!!getError(field.countryErrorKey)}
                            sx={{ maxWidth: { md: "362px" } }}
                          >
                            <Select
                              displayEmpty
                              value={formState[field.stateKey]}
                              onChange={(e) =>
                                handleFormChange(field.stateKey, e.target.value)
                              }
                              onBlur={() => handleBlur(field.countryErrorKey)}
                              IconComponent={ArrowDropDownIcon}
                              renderValue={(selected) => {
                                // ── Empty: show placeholder ──
                                if (!selected) {
                                  return (
                                    <Typography
                                      fontSize="14px"
                                      sx={{
                                        color: "#9CA3AF",
                                        fontFamily:
                                          "Plus Jakarta Sans, sans-serif",
                                      }}
                                    >
                                      Select country...
                                    </Typography>
                                  );
                                }
                                const country = COUNTRIES.find(
                                  (c) => c.value === selected,
                                );
                                return country ? (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <FlagImg
                                      code={country.flagCode}
                                      size={20}
                                    />
                                    <Typography fontSize="14px">
                                      {country.label}
                                    </Typography>
                                  </Box>
                                ) : null;
                              }}
                              sx={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                fontSize: "14px",
                                "& .MuiOutlinedInput-notchedOutline": {
                                  borderColor: getError(field.countryErrorKey)
                                    ? "#EF4444"
                                    : "#D1D5DB",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                  borderColor: getError(field.countryErrorKey)
                                    ? "#EF4444"
                                    : "#9CA3AF",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                  {
                                    borderColor: getError(field.countryErrorKey)
                                      ? "#EF4444"
                                      : "#FF5722",
                                  },
                              }}
                            >
                              {COUNTRIES.map((country) => (
                                <MenuItem
                                  key={country.value}
                                  value={country.value}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 1,
                                    }}
                                  >
                                    <FlagImg
                                      code={country.flagCode}
                                      size={20}
                                    />
                                    <Typography fontSize="14px">
                                      {country.label}
                                    </Typography>
                                  </Box>
                                </MenuItem>
                              ))}
                            </Select>

                            {getError(field.countryErrorKey) && (
                              <FormHelperText
                                sx={{
                                  fontFamily: "Plus Jakarta Sans, sans-serif",
                                  fontSize: "11px",
                                  color: "#EF4444",
                                  mt: "4px",
                                }}
                              >
                                {getError(field.countryErrorKey)}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>

                        {/* ── Address Book Field ── */}
                        <Grid size={{ xs: 12, sm: 6, md: 8 }}>
                          <Typography
                            sx={{
                              mb: "8px",
                              fontFamily: "Plus Jakarta Sans, sans-serif",
                              fontWeight: 600,
                              fontSize: { xs: "13px", sm: "15px", md: "16px" },
                            }}
                          >
                            {field.inputLabel}
                          </Typography>
                          <AddressBookField
                            field={field}
                            formState={formState}
                            handleFormChange={handleFormChange}
                            handleBlur={handleBlur}
                            getError={getError}
                          />
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>

                  {/* ── ROUTE SUMMARY ── */}
                  {ROUTE_SUMMARY.length > 0 && (
                    <Box
                      sx={{
                        mt: 3,
                        p: { xs: 1.5, sm: 2 },
                        backgroundColor: "#F3F4F6",
                        borderRadius: "6px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 1, sm: 2 },
                        flexWrap: "wrap",
                      }}
                    >
                      {ROUTE_SUMMARY.map((stop, index) => (
                        <React.Fragment key={stop.value}>
                          <Box
                            sx={{
                              background: "#fff",
                              px: { xs: 1.5, sm: 2 },
                              py: 0.75,
                              borderRadius: "999px",
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                            }}
                          >
                            <Box
                              sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                overflow: "hidden",
                                flexShrink: 0,
                                border: "2px solid #E5E7EB",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#f0f0f0",
                              }}
                            >
                              <Box
                                component="img"
                                src={`https://flagcdn.com/w40/${stop.flagCode}.png`}
                                alt={stop.label}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                                sx={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "12px", sm: "14px" },
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                fontWeight: 500,
                                color: "#111827",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {stop.label}
                            </Typography>
                          </Box>

                          {index < ROUTE_SUMMARY.length - 1 && (
                            <Box
                              sx={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                backgroundColor: "#FEE8E2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#FF5722",
                                  fontWeight: 700,
                                  fontSize: "14px",
                                  lineHeight: 1,
                                }}
                              >
                                ⇄
                              </Typography>
                            </Box>
                          )}
                        </React.Fragment>
                      ))}
                    </Box>
                  )}

                  {/* ── BUTTONS ── */}
                  <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                    {FORM_BUTTONS.map((btn) => (
                      <Button
                        key={btn.id}
                        variant={btn.variant}
                        onClick={BUTTON_HANDLERS[btn.id]}
                        sx={btn.sx}
                      >
                        {btn.label}
                      </Button>
                    ))}
                  </Box>
                </Box>
              )}

              {/* ════════════════════════════════
                  TAB 1 — Duplicate past request
              ════════════════════════════════ */}
              {value === 1 && (
                <Box sx={{ mt: { xs: "24px", sm: "32px" } }}>
                  {/* Header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1,
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        fontWeight: 700,
                        fontSize: { xs: "16px", sm: "20px" },
                        color: "#000",
                      }}
                    >
                      Address
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <TextField
                        size="small"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon
                                sx={{ fontSize: 18, color: "#6B7280" }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          width: { xs: "140px", sm: "200px" },
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "8px",
                            "&.Mui-focused fieldset": {
                              borderColor: "#FF5722",
                            },
                          },
                        }}
                      />
                      <Button
                        variant="outlined"
                        startIcon={<TuneIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          textTransform: "none",
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          color: "#374151",
                          borderColor: "#D1D5DB",
                          borderRadius: "8px",
                          px: 2,
                          "&:hover": {
                            borderColor: "#9CA3AF",
                            backgroundColor: "#F9FAFB",
                          },
                        }}
                      >
                        Filters
                      </Button>
                    </Box>
                  </Box>

                  <Divider sx={{ mb: 1, borderColor: "#E5E7EB" }} />

                  {/* Table */}
                  <TableContainer
                    component={Paper}
                    elevation={0}
                    sx={{
                      border: "1.5px ",
                      borderRadius: "8px",
                      overflow: "auto",
                    }}
                  >
                    <Table size="small" sx={{ minWidth: 600 }}>
                      <TableHead>
                        <TableRow>
                          {ADDRESS_COLUMNS.map((col) => (
                            <TableCell
                              key={col.id}
                              sx={{
                                fontFamily: "Plus Jakarta Sans, sans-serif",
                                fontWeight: 600,
                                fontSize: "13px",
                                color: "#6B7280",
                                borderBottom: "1px solid #F3F4F6",
                                py: 1.5,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {col.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {filteredRows.map((row) => (
                          <TableRow
                            key={row.id}
                            hover
                            sx={{
                              cursor: "pointer",
                              "&:hover": { backgroundColor: "#FFF7F5" },
                              "& td": {
                                borderBottom: "1px solid #F9FAFB",
                                py: 1.5,
                              },
                            }}
                          >
                            {ADDRESS_COLUMNS.map((col) => (
                              <TableCell
                                key={col.id}
                                sx={{
                                  fontFamily: "Plus Jakarta Sans, sans-serif",
                                  fontSize: "13px",
                                  color: "#111827",
                                  whiteSpace:
                                    col.id === "address" ? "normal" : "nowrap",
                                }}
                              >
                                {col.id === "country" ? (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.8,
                                    }}
                                  >
                                    <FlagImg code={row.flagCode} size={18} />
                                    {row.country}
                                  </Box>
                                ) : (
                                  row[col.id]
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}

                        {filteredRows.length === 0 && (
                          <TableRow>
                            <TableCell
                              colSpan={ADDRESS_COLUMNS.length}
                              sx={{ textAlign: "center", py: 4 }}
                            >
                              <Typography color="gray" fontSize="14px">
                                No records found
                              </Typography>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  {/* Buttons */}
                  <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                    {FORM_BUTTONS.map((btn) => (
                      <Button
                        key={btn.id}
                        variant={btn.variant}
                        onClick={BUTTON_HANDLERS[btn.id]}
                        sx={btn.sx}
                      >
                        {btn.label}
                      </Button>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
