"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { OrderDto } from "@/app/_types/order";
import { getDisplayOrderNumber } from "@/app/_types/order";
import WaitingTimeChip from "./WaitingTimeChip";

/** Seat label: delivery vs hall seat + tableId */
export function getSeatLabel(order: OrderDto): string {
  const tableId = order.tableId;
  if (tableId == null || String(tableId).toLowerCase() === "delivery") {
    return "Delivery";
  }
  return `Hall Seat ${tableId}`;
}

/** Service type label */
export function getServiceType(order: OrderDto): string {
  const tableId = order.tableId;
  if (tableId == null || String(tableId).toLowerCase() === "delivery") {
    return "Delivery";
  }
  return "Dine-in";
}

export type TimeInfo = {
  formatted: string;
  waitingText: string;
  color: string;
};

type Props = {
  order: OrderDto;
  timeInfo: TimeInfo | null;
  onComplete: () => void;
};

/**
 * Dark header section of kitchen receipt card: order #, time chip, seat, service type, Complete button.
 */
export default function KitchenReceiptCardHeader({
  order,
  timeInfo,
  onComplete,
}: Props) {
  const displayNumber = getDisplayOrderNumber(order);
  const seatLabel = getSeatLabel(order);
  const serviceType = getServiceType(order);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#2C3E50",
        borderRadius: "12px 12px 0 0",
        px: 1.5,
        py: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: "white", fontSize: 20 }}>
          #{displayNumber}
        </Typography>
        {timeInfo && (
          <WaitingTimeChip
            formattedTime={timeInfo.formatted}
            waitingText={timeInfo.waitingText}
            color={timeInfo.color}
          />
        )}
      </Box>
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)", fontSize: 13 }}>
        {seatLabel}
      </Typography>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>
        {serviceType}
      </Typography>
      <Button
        fullWidth
        variant="contained"
        onClick={onComplete}
        sx={{
          bgcolor: "#2196F3",
          "&:hover": { bgcolor: "#1976D2" },
          py: 1.25,
          borderRadius: 1,
          fontWeight: 600,
          fontSize: 15,
          textTransform: "none",
        }}
      >
        Complete
      </Button>
    </Box>
  );
}
