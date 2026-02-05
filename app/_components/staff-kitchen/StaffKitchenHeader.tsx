"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import RefreshIcon from "@mui/icons-material/Refresh";

type Props = {
  receivedCount: number;
  onRefresh: () => void;
};

/**
 * Page header for staff kitchen: Settings (placeholder), Received N, Open indicator, Refresh.
 */
export default function StaffKitchenHeader({ receivedCount, onRefresh }: Props) {
  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          px: 2,
          py: 1.5,
        }}
      >
        <IconButton
          size="medium"
          aria-label="Settings"
          sx={{ color: "text.primary" }}
        >
          <SettingsIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#2196F3", fontSize: 16 }}>
            Received {receivedCount}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "4px",
                bgcolor: "#4CAF50",
              }}
            />
            <Typography variant="body2" sx={{ color: "#4CAF50", fontWeight: 500, fontSize: 14 }}>
              Open
            </Typography>
          </Box>
          <IconButton
            size="medium"
            aria-label="Refresh"
            onClick={onRefresh}
            sx={{ color: "text.primary" }}
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
