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
import { useLocale } from "../../_hooks/useLocale";
import RoleSelectionCard from "../../_components/ui/RoleSelectionCard";

const SelectModePage = () => {
  const router = useRouter();
  const locale = useLocale();

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
            onClick={() => router.push(`/${locale}/customer`)}
          />
          {/* Staff Card */}
          <RoleSelectionCard
            title="Staff"
            description="Manage orders and kitchen"
            onClick={() => router.push(`/${locale}/staff`)}
          />
        </Stack>
      </Box>


    </Box>
  );
};

export default SelectModePage;
