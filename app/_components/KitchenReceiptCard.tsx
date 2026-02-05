"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import type { OrderDto, OrderItemDto } from "@/app/_types/order";
import KitchenReceiptCardHeader from "./staff-kitchen/KitchenReceiptCardHeader";
import { getWaitingInfo } from "./staff-kitchen/WaitingTimeChip";
import KitchenReceiptItemRow from "./KitchenReceiptItemRow";

/** Format ISO createdAt to HH:mm (local) and compute waiting minutes. Only runs after mount to avoid server/client timezone hydration mismatch. */
function useTimeInfo(
  createdAt: string | null | undefined,
  currentTimeMillis: number,
  mounted: boolean
) {
  return useMemo(() => {
    if (!mounted || !createdAt) return null;
    try {
      const date = new Date(createdAt);
      const formatted = date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const createdMs = date.getTime();
      const minutes = Math.max(
        0,
        Math.floor((currentTimeMillis - createdMs) / 60_000)
      );
      const { text, color } = getWaitingInfo(minutes);
      return { formatted, waitingText: text, color };
    } catch {
      return null;
    }
  }, [mounted, createdAt, currentTimeMillis]);
}

type Props = {
  order: OrderDto;
  currentTimeMillis: number;
  onComplete: () => void;
};

/**
 * Kitchen receipt-style card (MUI): dark header with order #, time, waiting badge, seat, Complete button;
 * body lists order items with checkable rows.
 */
export default function KitchenReceiptCard({
  order,
  currentTimeMillis,
  onComplete,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => setMounted(true), []);

  const timeInfo = useTimeInfo(order.createdAt, currentTimeMillis, mounted);

  const handleCheckedChange = useCallback((itemKey: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [itemKey]: checked }));
  }, []);

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 2,
        bgcolor: "#E5E5E5",
      }}
    >
      <Box sx={{ bgcolor: "background.paper" }}>
        <KitchenReceiptCardHeader
          order={order}
          timeInfo={timeInfo}
          onComplete={onComplete}
        />
        <CardContent sx={{ py: 1.5, px: 1.5, "&:last-child": { pb: 1.5 } }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {(order.items ?? []).map((item: OrderItemDto, index: number) => {
              const itemKey = `${item.menuItemId}_${index}`;
              return (
                <KitchenReceiptItemRow
                  key={itemKey}
                  item={item}
                  isChecked={checkedItems[itemKey] ?? false}
                  onCheckedChange={(checked) =>
                    handleCheckedChange(itemKey, checked)
                  }
                />
              );
            })}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
