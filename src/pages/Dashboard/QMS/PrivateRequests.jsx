import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function PrivateRequests() {
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(1);

  const totalPages = 10;

  const getpagenumber = () => {
    const pages = [];

    pages.push(1);

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

  const item = [
    {
      requestId: "0000010",
      submitOn: "23/11/2024 01:00 AM",
      agent: "Chris from Apex Global Logistics",
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
        width: { md: "100%", lg: "100%" },
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
          width: "1000px",
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
        {/* Agent */}
        <Box sx={{ width: 181, height: 564 }}>
          <Box
            sx={{
              width: 181,
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
              Agent
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
                  width: 164,
                  font: "Plus Jakarta Sans",
                  wight: 500,
                  fontStyle: "Medium",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#101828",
                }}
              >
                {item.agent}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* origin */}

        <Box sx={{ width: 146.5, height: 564 }}>
          <Box
            sx={{
              width: 146.5,
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

        <Box sx={{ width: 160.5, height: 564 }}>
          <Box
            sx={{
              width: 160.5,
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

        {/* Action */}
        <Box sx={{ width: 156, height: 564 }}>
          <Box
            sx={{
              width: 156,
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
              Action
            </Typography>
          </Box>
          {item.map((row, index) => (
            <Box
              key={index}
              sx={{
                width: 156,
                height: 52,
                borderBottom: "1px solid #EAECF0",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* View */}
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#E0F2FE",
                  borderRadius: "8px",
                  "&:hover": { bgcolor: "#BAE6FD" },
                }}
              >
                <VisibilityOutlinedIcon
                  sx={{ fontSize: 18, color: "#0284C7" }}
                />
              </IconButton>

              {/* Edit */}
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#FEF9C3",
                  borderRadius: "8px",
                  "&:hover": { bgcolor: "#FEF08A" },
                }}
              >
                <EditOutlinedIcon sx={{ fontSize: 18, color: "#CA8A04" }} />
              </IconButton>

              {/* Delete */}
              <IconButton
                size="small"
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: "#FEE2E2",
                  borderRadius: "8px",
                  "&:hover": { bgcolor: "#FECACA" },
                }}
              >
                <DeleteOutlineOutlinedIcon
                  sx={{ fontSize: 18, color: "#DC2626" }}
                />
              </IconButton>
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
