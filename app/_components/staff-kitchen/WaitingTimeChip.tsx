"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

/** Waiting time label and color by minutes (matches Kotlin getWaitingTimeText / getWaitingTimeColor) */
export function getWaitingInfo(minutes: number): { text: string; color: string } {
  if (minutes < 5) return { text: "<5 min", color: "#4CAF50" };
  if (minutes < 15) return { text: "<15 min", color: "#FF9800" };
  return { text: "15+ min", color: "#F44336" };
}

type Props = {
  formattedTime: string;
  waitingText: string;
  color: string;
};

/**
 * Small chip showing order time and waiting duration with color-coded badge.
 */
export default function WaitingTimeChip({
  formattedTime,
  waitingText,
  color,
}: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)", fontSize: 13 }}>
        {formattedTime}
      </Typography>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.5,
          px: 1,
          py: 0.5,
          borderRadius: 1,
          backgroundColor: `${color}e6`,
        }}
      >
        <AccessTimeIcon sx={{ fontSize: 14, color: "white" }} />
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, fontSize: 11, color: "white" }}
        >
          {waitingText}
        </Typography>
      </Box>
    </Box>
  );
}
