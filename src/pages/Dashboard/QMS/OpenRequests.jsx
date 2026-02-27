import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  MenuItem,
  ListItemIcon,
  Menu,
  Select,
  Button,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OpenRequests() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(1);

  const totalPages = 10;

  const getpagenumber = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Left dots
    if (page > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPages - 1, page + 1);
      i++
    ) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const item = [
    {
      requestId: "0000010",
      submitOn: "23/11/2024 01:00 AM",
      origin: "Mumbai, India",
      destination: "Doha, Saudi Arabia",
      mode: "Air",
      category: "Barrels",
      cargo: "FCL",
      quotes: "0/5",
    },
  ];

  return (
    <Box
      sx={{
        width: { md: "100%", lg: "100%", xs: "290px", sm: "100%" },
        height: 632,
        border: "1px solid #EAECF0",
        bgcolor: "#FFFFFF",
        borderRadius: "8px",
        overflowY: "hidden",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          width: { md: "1000px", lg: "1000px", xs: "290px", sm: "768px" },
          height: 564,
          display: "flex",
        }}
      >
        {/* request id */}
        <Box sx={{ width: 102, height: 564 }}>
          <Box
            sx={{
              width: 102,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Requests ID
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 102,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.requestId}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Submitted on */}

        <Box sx={{ width: 113, height: 564 }}>
          <Box
            sx={{
              width: 113,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Submitted On
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 113,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  width: "78px",
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.submitOn}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* origin */}

        <Box sx={{ width: 242, height: 564 }}>
          <Box
            sx={{
              width: 242,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Origin
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 242,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Box component="img" alt="img" sx={{ width: 20, height: 20 }} />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.origin}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Destination */}

        <Box sx={{ width: 242, height: 564 }}>
          <Box
            sx={{
              width: 242,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Destination
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 242,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Box component="img" alt="img" sx={{ width: 20, height: 20 }} />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.destination}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* mode */}
        <Box sx={{ width: 100, height: 564 }}>
          <Box
            sx={{
              width: 100,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Mode
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 100,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Box component="img" alt="img" sx={{ width: 20, height: 20 }} />
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.mode}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* category */}
        <Box sx={{ width: 100, height: 564 }}>
          <Box
            sx={{
              width: 100,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Category
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 100,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.category}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* cargo */}
        <Box sx={{ width: 100, height: 564 }}>
          <Box
            sx={{
              width: 100,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Cargo
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 100,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.cargo}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* quotes */}
        <Box sx={{ width: 69, height: 564 }}>
          <Box
            sx={{
              width: 69,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Quotes
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 69,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.quotes}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Action */}
        <Box sx={{ width: 70, height: 564 }}>
          <Box
            sx={{
              width: 70,
              height: 44,
              borderBottom: "1px solid #EAECF0",
              bgcolor: "#F9FAFB",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                wight: 500,
                fontStyle: "Medium",
                fontSize: "12px",
                lineHeight: "18px",
                color: "#667085",
              }}
            >
              Action
            </Typography>
          </Box>
          {item.map((item, index) => (
            <Box
              sx={{
                width: 70,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                <IconButton onClick={handleClick}>
                  <MoreVertIcon sx={{ color: "#000000" }} />
                </IconButton>
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    width: 180,
                    borderRadius: 3,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                    paddingY: 1,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E7E9ED",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <VisibilityIcon color="#8F9DAC  " fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "14px",
                      letterSpacing: "0px",
                      color: "#8F9DAC",
                    }}
                  >
                    View
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ContentCopyIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "14px",
                      letterSpacing: "0px",
                      color: "#8F9DAC",
                    }}
                  >
                    Duplicate Request
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "14px",
                      letterSpacing: "0px",
                      color: "#8F9DAC",
                    }}
                  >
                    Edit
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography
                    sx={{
                      font: "Plus Jakarta Sans",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "14px",
                      letterSpacing: "0px",
                      color: "#8F9DAC",
                    }}
                  >
                    Delete
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ))}
        </Box>
      </Box>
      {/*  */}
      <Box
        sx={{
          width: "auto",
          height: 68,
          border: "1px solid #EAECF0",
          gap: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: 532,
            height: 36,
            gap: "14px",
            ml: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#FC5722",
              font: "Plus Jakarta Sans",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "120%",
              letterSpacing: "0%",
            }}
          >
            View records by:
          </Typography>
          <Box sx={{ gap: 20 }}>
            <Select
              value={rows}
              onChange={(e) => setRows(e.target.value)}
              size="small"
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                width: 80,
                height: 36,
                fontSize: 14,
                "& fieldset": { border: "none" },
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,

            px: 2,
            py: 1,
            borderRadius: "6px",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            sx={{ textTransform: "none" }}
          >
            Previous
          </Button>

          {getpagenumber().map((item, index) => (
            <Box
              key={index}
              onClick={() => typeof item === "number" && setPage(item)}
              sx={{
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: typeof item === "number" ? "pointer" : "default",
                borderRadius: "4px",
                bgcolor: page === item ? "#E0E7FF" : "transparent",
                fontWeight: page === item ? 600 : 400,
              }}
            >
              {item}
            </Box>
          ))}

          <Button
            endIcon={<ArrowForwardIcon />}
            disabled={page === 10}
            onClick={() => setPage(page + 1)}
            sx={{ textTransform: "none" }}
          >
            Next
          </Button>
        </Box>
      </Box>

      {/*  */}
    </Box>
  );
}
