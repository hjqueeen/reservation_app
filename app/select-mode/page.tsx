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
import RoleSelectionCard from "../_components/ui/RoleSelectionCard";

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
          <RoleSelectionCard
            title="Customer"
            description="Order food and view menu"
            onClick={() => router.push("/customer")}
          />
          {/* Staff Card */}
          <RoleSelectionCard
            title="Staff"
            description="Manage orders and kitchen"
            onClick={() => router.push("/staff")}
          />
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
