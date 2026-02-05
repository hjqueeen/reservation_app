"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MOCK_KITCHEN_ORDERS } from "@/app/_data/mockKitchenOrders";
import KitchenReceiptCard from "@/app/_components/KitchenReceiptCard";
import StaffKitchenHeader from "@/app/_components/staff-kitchen/StaffKitchenHeader";
import {
  isKitchenOrder,
  type OrderDto,
  type OrderStatus,
} from "@/app/_types/order";

const KITCHEN_COLUMN_COUNT = 4;

/**
 * Staff Kitchen page: shows orders that are not READY, PAID, or CANCELLED
 * in a 4-column masonry layout. Complete button sets order to READY and removes from list.
 * Uses mock data until API is available. Built with MUI.
 */
export default function StaffKitchenPage() {
  const [orders, setOrders] = useState<OrderDto[]>(MOCK_KITCHEN_ORDERS);
  const [currentTimeMillis, setCurrentTimeMillis] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setCurrentTimeMillis(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  const kitchenOrders = useMemo(() => {
    return orders
      .filter(isKitchenOrder)
      .sort((a: OrderDto, b: OrderDto) => {
        const at = a.createdAt ? new Date(a.createdAt).getTime() : 0;
        const bt = b.createdAt ? new Date(b.createdAt).getTime() : 0;
        return at - bt;
      });
  }, [orders]);

  const handleComplete = useCallback((orderId: string | null) => {
    if (!orderId) return;
    setOrders((prev: OrderDto[]) =>
      prev.map((o: OrderDto) =>
        o.id === orderId ? { ...o, status: "READY" as OrderStatus } : o
      )
    );
  }, []);

  const handleRefresh = useCallback(() => {
    setOrders([...MOCK_KITCHEN_ORDERS]);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#D5D5D5",
      }}
    >
      <StaffKitchenHeader
        receivedCount={kitchenOrders.length}
        onRefresh={handleRefresh}
      />

      <Box
        component="main"
        sx={{
          flex: 1,
          pt: 0.5,
          minHeight: 0,
        }}
      >
        {kitchenOrders.length === 0 ? (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              No orders
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              height: "100%",
              px: 1.5,
              display: "flex",
              gap: 1.5,
            }}
          >
            {Array.from({ length: KITCHEN_COLUMN_COUNT }, (_, columnIndex) => {
              const columnItems = kitchenOrders.filter(
                (_: OrderDto, index: number) =>
                  index % KITCHEN_COLUMN_COUNT === columnIndex
              );
              return (
                <Box
                  key={columnIndex}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    overflowY: "auto",
                    pb: 3,
                  }}
                >
                  {columnItems.map((order: OrderDto) => (
                    <KitchenReceiptCard
                      key={order.id ?? order.orderNumber ?? columnIndex}
                      order={order}
                      currentTimeMillis={currentTimeMillis}
                      onComplete={() => handleComplete(order.id ?? null)}
                    />
                  ))}
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}
