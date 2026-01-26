"use client";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import {
  SignalWifi4Bar,
  Lock,
  BatteryFull,
  ArrowForward,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const SelectModePage = () => {
  const router = useRouter();

  // Get current time
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      {/* Top Status Bar - Orange */}
      <Box
        sx={{
          bgcolor: "#FF8C00",
          width: "100%",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          color: "#FFFFFF",
        }}
      >
        {/* Left side: Time, Signal, Lock */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {currentTime}
          </Typography>
          <SignalWifi4Bar sx={{ fontSize: 18 }} />
          <Lock sx={{ fontSize: 18 }} />
        </Box>

        {/* Center: Small white line */}
        <Box
          sx={{
            width: "40px",
            height: "4px",
            bgcolor: "#FFFFFF",
            borderRadius: "2px",
          }}
        />

        {/* Right side: Battery */}
        <BatteryFull sx={{ fontSize: 24 }} />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
          py: 6,
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            color: "#FF8C00",
            fontWeight: 600,
            mb: 6,
            textAlign: "center",
          }}
        >
          Select Mode
        </Typography>

        {/* Mode Cards */}
        <Stack spacing={3} sx={{ width: "100%", maxWidth: "600px" }}>
          {/* Customer Card */}
          <Card
            sx={{
              bgcolor: "#FFF8F0",
              borderRadius: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
              },
            }}
            onClick={() => router.push("/customer")}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 3,
                px: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#000000",
                    mb: 0.5,
                  }}
                >
                  Customer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#000000",
                    opacity: 0.8,
                  }}
                >
                  Order food and view menu
                </Typography>
              </Box>
              <IconButton
                sx={{
                  color: "#FF8C00",
                  "&:hover": {
                    bgcolor: "rgba(255, 140, 0, 0.1)",
                  },
                }}
              >
                <ArrowForward sx={{ fontSize: 28 }} />
              </IconButton>
            </CardContent>
          </Card>

          {/* Staff Card */}
          <Card
            sx={{
              bgcolor: "#FFF8F0",
              borderRadius: 4,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
              },
            }}
            onClick={() => router.push("/staff")}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 3,
                px: 4,
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#000000",
                    mb: 0.5,
                  }}
                >
                  Staff
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#000000",
                    opacity: 0.8,
                  }}
                >
                  Manage orders and kitchen
                </Typography>
              </Box>
              <IconButton
                sx={{
                  color: "#FF8C00",
                  "&:hover": {
                    bgcolor: "rgba(255, 140, 0, 0.1)",
                  },
                }}
              >
                <ArrowForward sx={{ fontSize: 28 }} />
              </IconButton>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      {/* Bottom Navigation Bar - Black */}
      <Box
        sx={{
          bgcolor: "#000000",
          width: "100%",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Small white line indicator */}
        <Box
          sx={{
            width: "134px",
            height: "4px",
            bgcolor: "#FFFFFF",
            borderRadius: "2px",
          }}
        />
      </Box>
    </Box>
  );
};

export default SelectModePage;
