import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  InputAdornment,
  Select,
  MenuItem,
  Checkbox,
  Grid,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";

import ShipperDashboard from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";
import BoxStepper1 from "../../../components/BoxStepper1";

const emptyForm = () => ({
  name: "",
  contactType: "business",
  company: "",
  country: "",
  address1: "",
  address2: "",
  address3: "",
  zipCode: "",
  city: "",
  state: "",
  emailAddress: "",
  phoneType: "",
  phoneCode: "",
  phoneNumber: "",
  phoneExtension: "",
  agentFirstName: "",
  agentMiddleName: "",
  agentLastName: "",
  agentCompanyTitle: "",
  agentEmail: "",
  agentPhone: "",
  saveToAddressBook: false,
});

const labelStyle = {
  fontSize: { xs: 12, sm: 13 },
  fontFamily: "Plus Jakarta Sans, sans-serif",
  mb: 0.5,
  color: "#000",
};

const fieldSx = { mb: 1.5 };

const inputSx = {
  "& .MuiInputBase-input": {
    fontSize: { xs: 12, sm: 13 },
    padding: { xs: "6px 10px", sm: "8px 12px" },
  },
};

function AddressPanel({ title, data, onChange }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 1.5, sm: 2.5 },
        flex: 1,

        borderRadius: "8px",
        minWidth: 0,
        width: "100%",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#E05A2B",
          fontWeight: 600,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: { xs: 13, sm: 15 },
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      {/* Name */}
      <Typography sx={labelStyle}>Name</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="small"
                sx={{
                  bgcolor: "#E05A2B",
                  borderRadius: 1,
                  p: { xs: 0.3, sm: 0.5 },
                  "&:hover": { bgcolor: "#c94e24" },
                }}
              >
                <ContactsIcon
                  sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Radio */}
      <FormControl sx={{ mb: 1.5 }}>
        <RadioGroup
          row
          value={data.contactType}
          onChange={(e) => onChange("contactType", e.target.value)}
          sx={{ gap: { xs: 0, sm: 1 }, flexWrap: "wrap" }}
        >
          <FormControlLabel
            value="personal"
            control={
              <Radio size="small" sx={{ p: { xs: "4px", sm: "9px" } }} />
            }
            label={
              <Typography
                sx={{
                  fontSize: { xs: 11, sm: 13 },
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Personal Contact
              </Typography>
            }
          />
          <FormControlLabel
            value="business"
            control={
              <Radio
                size="small"
                sx={{
                  p: { xs: "4px", sm: "9px" },
                  color: "#E05A2B",
                  "&.Mui-checked": { color: "#E05A2B" },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: { xs: 11, sm: 13 },
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Business Contact
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>

      {/* Company Name */}
      <Typography sx={labelStyle}>Company Name</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Company Name"
        value={data.company}
        onChange={(e) => onChange("company", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Country */}
      <Typography sx={labelStyle}>Country / Territory</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Country / Territory Name"
        value={data.country}
        onChange={(e) => onChange("country", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Address 1 */}
      <Typography sx={labelStyle}>Address 1</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Address"
        value={data.address1}
        onChange={(e) => onChange("address1", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Address 2 */}
      <Typography sx={labelStyle}>Address 2</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Address"
        value={data.address2}
        onChange={(e) => onChange("address2", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Address 3 */}
      <Typography sx={labelStyle}>Address 3</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Address"
        value={data.address3}
        onChange={(e) => onChange("address3", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Zip / City / State — stacks to 1 col on 320px */}
      <Grid container spacing={{ xs: 0.75, sm: 1 }} sx={{ mb: 1.5 }}>
        <Grid item xs={12} sm={4}>
          <Typography sx={labelStyle}>Zip Code</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter Zip Code"
            value={data.zipCode}
            onChange={(e) => onChange("zipCode", e.target.value)}
            sx={inputSx}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography sx={labelStyle}>City</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter City Name"
            value={data.city}
            onChange={(e) => onChange("city", e.target.value)}
            sx={inputSx}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography sx={labelStyle}>State</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter State"
            value={data.state}
            onChange={(e) => onChange("state", e.target.value)}
            sx={inputSx}
          />
        </Grid>
      </Grid>

      {/* Email */}
      <Typography sx={labelStyle}>Email Address</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Email Address"
        value={data.emailAddress}
        onChange={(e) => onChange("emailAddress", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Phone — 2 rows on mobile */}
      <Grid container spacing={{ xs: 0.75, sm: 1 }} sx={{ mb: 1.5 }}>
        <Grid item xs={6} sm={3}>
          <Typography sx={labelStyle}>Phone Type</Typography>
          <Select
            fullWidth
            size="small"
            displayEmpty
            value={data.phoneType}
            onChange={(e) => onChange("phoneType", e.target.value)}
            sx={{
              fontSize: { xs: 12, sm: 13 },
              "& .MuiSelect-select": {
                padding: { xs: "6px 8px", sm: "8px 12px" },
              },
            }}
          >
            <MenuItem value="">
              <em style={{ fontSize: 12 }}></em>
            </MenuItem>
            <MenuItem value="mobile">Mobile</MenuItem>
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="work">Work</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography sx={labelStyle}>Code</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Code"
            value={data.phoneCode}
            onChange={(e) => onChange("phoneCode", e.target.value)}
            sx={inputSx}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Typography sx={labelStyle}>Phone Number</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Phone Number"
            value={data.phoneNumber}
            onChange={(e) => onChange("phoneNumber", e.target.value)}
            sx={inputSx}
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography sx={labelStyle}>Ext.</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Ext"
            value={data.phoneExtension}
            onChange={(e) => onChange("phoneExtension", e.target.value)}
            sx={inputSx}
          />
        </Grid>
      </Grid>

      {/* Agent Section */}
      <Divider sx={{ my: 1.5 }} />
      <Typography
        sx={{
          fontSize: { xs: 13, sm: 14 },
          fontWeight: 600,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          mb: 1.5,
        }}
      >
        Agent/Representative details
      </Typography>

      <Typography sx={labelStyle}>First name</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter First name"
        value={data.agentFirstName}
        onChange={(e) => onChange("agentFirstName", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      <Typography sx={labelStyle}>Middle Name</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Middle Name"
        value={data.agentMiddleName}
        onChange={(e) => onChange("agentMiddleName", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      <Typography sx={labelStyle}>Last Name</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Last Name"
        value={data.agentLastName}
        onChange={(e) => onChange("agentLastName", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      <Typography sx={labelStyle}>Company Title/Role</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Company Title/Role"
        value={data.agentCompanyTitle}
        onChange={(e) => onChange("agentCompanyTitle", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      <Typography sx={labelStyle}>Email Address</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Email Address"
        value={data.agentEmail}
        onChange={(e) => onChange("agentEmail", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      <Typography sx={labelStyle}>Phone Number</Typography>
      <TextField
        fullWidth
        size="small"
        placeholder="Enter Phone Number"
        value={data.agentPhone}
        onChange={(e) => onChange("agentPhone", e.target.value)}
        sx={{ ...fieldSx, ...inputSx }}
      />

      {/* Save To Address Book */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        <Checkbox
          size="small"
          checked={data.saveToAddressBook}
          onChange={(e) => onChange("saveToAddressBook", e.target.checked)}
          sx={{
            p: 0,
            color: "#E05A2B",
            "&.Mui-checked": { color: "#E05A2B" },
            "& .MuiSvgIcon-root": {
              fontSize: { xs: 18, sm: 20 },
              borderRadius: "4px",
            },
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: 12, sm: 13 },
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 500,
          }}
        >
          Save To Address Book
        </Typography>
      </Box>
    </Paper>
  );
}

export default function Quotes1_1() {
  const navigate = useNavigate();
  const [fixedSidebar] = useState(false);
  const [from, setFrom] = useState(emptyForm());
  const [to, setTo] = useState(emptyForm());

  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
  };

  return (
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

        <Box
          sx={{
            p: { xs: 1, sm: 1.5, md: 2 },
            mt: { xs: 0, sm: -4 },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ── HEADER ── */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: { xs: 2, sm: 5 },
            }}
          >
            <IconButton
              onClick={() => navigate(-1)}
              sx={{
                width: { xs: 30, sm: 36 },
                height: { xs: 30, sm: 36 },
                borderRadius: "8px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #e0e0e0",
                flexShrink: 0,
                "&:hover": { backgroundColor: "#e8e8e8" },
              }}
            >
              <ArrowBackIcon
                sx={{ fontSize: { xs: 16, sm: 20 }, color: "#000" }}
              />
            </IconButton>

            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "12px", sm: "15px", md: "20px" },
                color: "#000000",
                lineHeight: 1.3,
              }}
            >
              International Transport Open Request Form
            </Typography>
          </Box>

          <Divider sx={{ border: "1px solid #EAECF0" }} />

          {/* ── STEPPER ── */}
          <Box sx={{ width: "100%", mt: "16px", overflowX: "auto" }}>
            <BoxStepper1 />
          </Box>

          <Divider sx={{ border: "1px solid #EAECF0", mt: 2 }} />

          {/* ── FROM / TO PANELS ── */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "flex-start" },
              gap: { xs: 1.5, md: 1 },
              mt: 2,
            }}
          >
            <AddressPanel
              title="From"
              data={from}
              onChange={(k, v) => setFrom((prev) => ({ ...prev, [k]: v }))}
            />

            {/* Switch Button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
                py: { xs: 0, md: 2.5 },
                alignSelf: { xs: "center", md: "flex-start" },
              }}
            >
              <IconButton
                onClick={handleSwitch}
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "50%",
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <SwapHorizIcon
                  sx={{ color: "#E05A2B", fontSize: { xs: 18, sm: 22 } }}
                />
              </IconButton>
              <Typography
                sx={{
                  fontSize: 11,
                  color: "text.secondary",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                Switch
              </Typography>
            </Box>

            <AddressPanel
              title="To"
              data={to}
              onChange={(k, v) => setTo((prev) => ({ ...prev, [k]: v }))}
            />
          </Box>

          {/* ── ACTION BUTTONS ── */}
          <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, mt: 3, mb: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setFrom(emptyForm());
                setTo(emptyForm());
              }}
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: { xs: 13, sm: 14 },
                textTransform: "none",
                borderRadius: "8px",
                px: { xs: 2.5, sm: 3 },
                py: { xs: 0.75, sm: 1 },
                color: "#E05A2B",
                borderColor: "#E05A2B",
                "&:hover": {
                  borderColor: "#c94e24",
                  backgroundColor: "#fff5f2",
                },
              }}
            >
              Clear
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/next-step")}
              sx={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 600,
                fontSize: { xs: 13, sm: 14 },
                textTransform: "none",
                borderRadius: "8px",
                px: { xs: 2.5, sm: 3 },
                py: { xs: 0.75, sm: 1 },
                backgroundColor: "#000000",
                color: "#ffffff",
                "&:hover": { backgroundColor: "#222222" },
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
