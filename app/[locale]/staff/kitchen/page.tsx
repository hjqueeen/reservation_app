"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Settings, Refresh, AccessTime, CheckCircle } from "@mui/icons-material";
import {
  getApiBaseUrl,
  getRestaurantId,
  getAccessToken,
  getAuthHeaders,
} from "../../../_utils/api";
import type { OrderDto, OrderItemDto } from "../../../_types/order";
import {
  isKitchenOrder,
  getDisplayOrderNumber,
} from "../../../_types/order";

const KITCHEN_COLUMN_COUNT = 4;

/** Minutes since createdAt; negative/NaN -> 0 */
function getWaitingMinutes(createdAt: string | null | undefined): number {
  if (!createdAt) return 0;
  try {
    const ms = Date.now() - new Date(createdAt).getTime();
    return Math.max(0, Math.floor(ms / 60_000));
  } catch {
    return 0;
  }
}

function formatTime(createdAt: string | null | undefined): string {
  if (!createdAt) return "--:--";
  try {
    const d = new Date(createdAt);
    return d.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch {
    return "--:--";
  }
}

/** Same logic as gastrosoftware getWaitingTimeText */
function waitingText(createdAt: string | null | undefined): string {
  const minutes = getWaitingMinutes(createdAt);
  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 대기`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}시간 ${m}분 대기`;
}

/** Same logic as gastrosoftware getWaitingTimeColor: Green ≤10, Yellow ≤15, Orange ≤20, Red 20+ */
function getWaitingTimeColor(minutes: number): string {
  if (minutes <= 10) return "#4CAF50";
  if (minutes <= 15) return "#FFC107";
  if (minutes <= 20) return "#FF9800";
  return "#F44336";
}

/** Parse optionsJson into list of option display strings (for "ㄴ optionName" rows; same idea as OrderItem.selectedOptionNames) */
function getOptionNames(item: OrderItemDto): string[] {
  const raw = item.optionsJson;
  if (!raw || typeof raw !== "string") return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) return parsed.filter((x): x is string => typeof x === "string");
    if (parsed && typeof parsed === "object") {
      const out: string[] = [];
      for (const v of Object.values(parsed)) {
        if (Array.isArray(v)) out.push(...v.filter((x): x is string => typeof x === "string"));
        else if (typeof v === "string") out.push(v);
      }
      return out;
    }
  } catch {
    // ignore
  }
  return [];
}

/** Per-item row with ready state (same behavior as KitchenReceiptItemRow in gastrosoftware) */
function KitchenReceiptItemRow({
  item,
  isChecked,
  onCheckedChange,
}: {
  item: OrderItemDto;
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  const optionNames = getOptionNames(item);
  const bgColor = isChecked ? "#E8F5E9" : "transparent";
  const textColor = isChecked ? "#4CAF50" : "black";
  const subColor = isChecked ? "rgba(76, 175, 80, 0.8)" : "text.secondary";

  return (
    <Box
      onClick={() => onCheckedChange(!isChecked)}
      sx={{
        width: "100%",
        bgcolor: bgColor,
        borderRadius: 1,
        px: 1.25,
        py: 1,
        cursor: "pointer",
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
      }}
    >
      {isChecked && (
        <CheckCircle sx={{ color: "#4CAF50", fontSize: 20, mt: 0.25 }} />
      )}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body2"
          fontWeight={500}
          color={textColor}
          sx={{ textDecoration: isChecked ? "line-through" : "none" }}
        >
          {item.quantity} {item.name ?? item.menuItemId}
        </Typography>
        {optionNames.map((name, i) => (
          <Typography
            key={i}
            variant="caption"
            color={subColor}
            sx={{
              display: "block",
              pl: 1,
              textDecoration: isChecked ? "line-through" : "none",
            }}
          >
            ㄴ {name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

function KitchenReceiptCard({
  order,
  onComplete,
}: {
  order: OrderDto;
  onComplete: () => void;
}) {
  const id = order.id ?? "";
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const seatLabel =
    !order.tableId || order.tableId.toLowerCase() === "delivery"
      ? "배달"
      : `홀자리 ${order.tableId}번`;
  const serviceType =
    !order.tableId || order.tableId.toLowerCase() === "delivery"
      ? "배달"
      : "매장";

  const waitingMinutes = getWaitingMinutes(order.createdAt);
  const timeBadgeColor = getWaitingTimeColor(waitingMinutes);

  const setItemChecked = useCallback(
    (itemKey: string, checked: boolean) => {
      setCheckedItems((prev) => ({ ...prev, [itemKey]: checked }));
    },
    []
  );

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "#e5e5e5",
      }}
    >
      <Box sx={{ bgcolor: "#2C3E50", color: "white", p: 1.5 }}>
        <Stack spacing={1}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              #{getDisplayOrderNumber(order)}
            </Typography>
            <Box display="flex" alignItems="center" gap={0.75}>
              <Typography variant="body2" color="inherit" sx={{ opacity: 0.9 }}>
                {formatTime(order.createdAt)}
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: timeBadgeColor,
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                }}
              >
                <AccessTime sx={{ fontSize: 14, color: "white" }} />
                <Typography variant="caption" fontWeight={600} color="white">
                  {waitingText(order.createdAt)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {seatLabel}
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {serviceType}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#2196F3", "&:hover": { bgcolor: "#1976D2" } }}
            onClick={onComplete}
          >
            완료
          </Button>
        </Stack>
      </Box>
      <CardContent sx={{ bgcolor: "white", py: 1.5 }}>
        <Stack spacing={0.75}>
          {(order.items ?? []).map((item, idx) => {
            const itemKey = `${item.menuItemId}_${idx}`;
            const isChecked = checkedItems[itemKey] ?? false;
            return (
              <KitchenReceiptItemRow
                key={`${id}-${idx}`}
                item={item}
                isChecked={isChecked}
                onCheckedChange={(checked) => setItemChecked(itemKey, checked)}
              />
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function StaffKitchenPage() {
  const [orders, setOrders] = useState<OrderDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const baseUrl = getApiBaseUrl();
  const restaurantId = getRestaurantId();

  // Redirect to login if no auth token (aligned with gastrosoftware AuthInterceptor)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!getAccessToken()) {
      window.location.href = "/login";
      return;
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    if (!getAccessToken()) return;
    setLoading(true);
    setError(null);
    try {
      const url = `${baseUrl}/orders/restaurant/${restaurantId}`;
      const res = await fetch(url, { headers: getAuthHeaders() });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: OrderDto[] = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load orders");
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }, [baseUrl, restaurantId]);

  useEffect(() => {
    if (!getAccessToken()) return;
    fetchOrders();
    const t = setInterval(fetchOrders, 30_000);
    return () => clearInterval(t);
  }, [fetchOrders]);

  const updateStatus = useCallback(
    async (orderId: string, status: string) => {
      try {
        const url = `${baseUrl}/orders/${orderId}/status`;
        const res = await fetch(url, {
          method: "PATCH",
          headers: getAuthHeaders(),
          body: JSON.stringify({ status }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await fetchOrders();
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update status");
      }
    },
    [baseUrl, fetchOrders]
  );

  // Ticker so waiting time / color updates every minute (same idea as gastrosoftware LaunchedEffect delay)
  const [, setTick] = useState(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    tickRef.current = setInterval(() => setTick((n) => n + 1), 60_000);
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  const kitchenOrders = orders
    .filter(isKitchenOrder)
    .sort(
      (a, b) =>
        new Date(a.createdAt ?? 0).getTime() -
        new Date(b.createdAt ?? 0).getTime()
    );

  const columns: OrderDto[][] = [];
  for (let i = 0; i < KITCHEN_COLUMN_COUNT; i++) {
    columns.push(
      kitchenOrders.filter((_, index) => index % KITCHEN_COLUMN_COUNT === i)
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f5f5f5",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "white",
          px: 2,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton size="small" aria-label="설정">
          <Settings />
        </IconButton>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body1" fontWeight={600} color="#2196F3">
            접수 {kitchenOrders.length}
          </Typography>
          <Stack direction="row" spacing={0.75} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: 1,
                bgcolor: "#4CAF50",
              }}
            />
            <Typography variant="body2" color="#4CAF50" fontWeight={500}>
              영업중
            </Typography>
          </Stack>
          <IconButton size="small" onClick={fetchOrders} aria-label="새로고침">
            <Refresh />
          </IconButton>
        </Stack>
      </Box>

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          p: 1.5,
          bgcolor: "#F5F5F5",
        }}
      >
        {error && (
          <Typography color="error" sx={{ py: 2, textAlign: "center" }}>
            {error}
          </Typography>
        )}
        {loading && kitchenOrders.length === 0 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={200}
          >
            <CircularProgress />
          </Box>
        )}
        {!loading && kitchenOrders.length === 0 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={200}
          >
            <Typography color="text.secondary">
              접수된 주문이 없습니다
            </Typography>
          </Box>
        )}
        {kitchenOrders.length > 0 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${KITCHEN_COLUMN_COUNT}, 1fr)`,
              gap: 1.5,
              alignContent: "start",
            }}
          >
            {columns.map((col, colIndex) => (
              <Stack key={colIndex} spacing={1.5}>
                {col.map((order) => (
                  <KitchenReceiptCard
                    key={order.id ?? colIndex}
                    order={order}
                    onComplete={() => {
                      if (order.id)
                        updateStatus(order.id, "READY");
                    }}
                  />
                ))}
              </Stack>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
