"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { MOCK_KITCHEN_ORDERS } from "@/app/_data/mockKitchenOrders";
import KitchenReceiptCard from "@/app/_components/KitchenReceiptCard";
import {
  isKitchenOrder,
  type OrderDto,
  type OrderStatus,
} from "@/app/_types/order";

const KITCHEN_COLUMN_COUNT = 4;

/**
 * Staff Kitchen page: shows orders that are not READY, PAID, or CANCELLED
 * in a 4-column masonry layout. Complete button sets order to READY and removes from list.
 * Uses mock data until API is available.
 */
export default function StaffKitchenPage() {
  const [orders, setOrders] = useState<OrderDto[]>(MOCK_KITCHEN_ORDERS);
  const [currentTimeMillis, setCurrentTimeMillis] = useState(() => Date.now());

  // Refresh current time periodically (every 30s) for waiting time display
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
    <div className="min-h-screen flex flex-col bg-[#D5D5D5]">
      {/* Header: white bar */}
      <header className="bg-white flex-shrink-0">
        <div className="flex items-center justify-between w-full px-4 py-3">
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-gray-100 text-black"
            aria-label="Settings"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-[#2196F3] text-base font-semibold">
              Received {kitchenOrders.length}
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded bg-[#4CAF50] shrink-0"
                aria-hidden
              />
              <span className="text-[#4CAF50] text-sm font-medium">Open</span>
            </div>
            <button
              type="button"
              onClick={handleRefresh}
              className="p-2 rounded-lg hover:bg-gray-100 text-black"
              aria-label="Refresh"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main: gray area — loading / empty / 4-column grid */}
      <main className="flex-1 pt-1 min-h-0">
        {kitchenOrders.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500 text-base">No orders</p>
          </div>
        ) : (
          <div className="h-full px-3 flex gap-3">
            {Array.from({ length: KITCHEN_COLUMN_COUNT }, (_, columnIndex) => {
              const columnItems = kitchenOrders.filter(
                (_: OrderDto, index: number) =>
                  index % KITCHEN_COLUMN_COUNT === columnIndex
              );
              return (
                <div
                  key={columnIndex}
                  className="flex-1 min-w-0 flex flex-col gap-3 overflow-y-auto pb-6"
                >
                  {columnItems.map((order: OrderDto) => (
                    <KitchenReceiptCard
                      key={order.id ?? order.orderNumber ?? columnIndex}
                      order={order}
                      currentTimeMillis={currentTimeMillis}
                      onComplete={() => handleComplete(order.id ?? null)}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
