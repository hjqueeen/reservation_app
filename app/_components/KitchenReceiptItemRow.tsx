"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { OrderItemDto } from "@/app/_types/order";

/** Parse optionsJson (e.g. '["Spicy","No onion"]') to display strings */
function parseOptionNames(optionsJson?: string): string[] {
  if (!optionsJson?.trim()) return [];
  try {
    const parsed = JSON.parse(optionsJson) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

type Props = {
  item: OrderItemDto;
  isChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

/**
 * Single order item row in kitchen receipt card (MUI).
 * Shows quantity + name, optional option names; checkable with green highlight when done.
 */
export default function KitchenReceiptItemRow({
  item,
  isChecked = false,
  onCheckedChange,
}: Props) {
  const optionNames = parseOptionNames(item.optionsJson);
  const displayName = item.name ?? item.menuItemId;

  return (
    <ListItemButton
      onClick={() => onCheckedChange?.(!isChecked)}
      sx={{
        borderRadius: 1,
        py: 1,
        px: 1.25,
        bgcolor: isChecked ? "#E8F5E9" : "transparent",
        "&:hover": {
          bgcolor: isChecked ? "#C8E6C9" : "action.hover",
        },
      }}
    >
      {isChecked && (
        <CheckCircleIcon
          sx={{ color: "#4CAF50", fontSize: 20, mr: 1, flexShrink: 0 }}
        />
      )}
      <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 0.25 }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            letterSpacing: 0.8,
            color: isChecked ? "#4CAF50" : "text.primary",
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {item.quantity} {displayName}
        </Typography>
        {optionNames.map((name) => (
          <Typography
            key={name}
            variant="body2"
            sx={{
              fontSize: 13,
              pl: 1,
              color: isChecked ? "rgba(76, 175, 80, 0.8)" : "text.secondary",
              textDecoration: isChecked ? "line-through" : "none",
            }}
          >
            └ {name}
          </Typography>
        ))}
      </Box>
    </ListItemButton>
  );
}
