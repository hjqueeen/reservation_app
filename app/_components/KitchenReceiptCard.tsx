"use client";

import { useCallback, useMemo, useState } from "react";
import type { OrderDto, OrderItemDto } from "@/app/_types/order";
import { getDisplayOrderNumber } from "@/app/_types/order";
import KitchenReceiptItemRow from "./KitchenReceiptItemRow";

/** Waiting time label and color by minutes (matches Kotlin getWaitingTimeText / getWaitingTimeColor) */
function getWaitingInfo(minutes: number): { text: string; color: string } {
  if (minutes < 5) return { text: "<5 min", color: "#4CAF50" };
  if (minutes < 15) return { text: "<15 min", color: "#FF9800" };
  return { text: "15+ min", color: "#F44336" };
}

/** Format ISO createdAt to HH:mm and compute waiting minutes from currentTimeMillis */
function useTimeInfo(createdAt: string | null | undefined, currentTimeMillis: number) {
  return useMemo(() => {
    if (!createdAt) return null;
    try {
      const date = new Date(createdAt);
      const formatted = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
      const createdMs = date.getTime();
      const minutes = Math.max(0, Math.floor((currentTimeMillis - createdMs) / 60_000));
      const { text, color } = getWaitingInfo(minutes);
      return { formatted, waitingText: text, color };
    } catch {
      return null;
    }
  }, [createdAt, currentTimeMillis]);
}

/** Seat/service label: delivery vs hall seat + tableId */
function getSeatLabel(order: OrderDto): string {
  const tableId = order.tableId;
  if (tableId == null || String(tableId).toLowerCase() === "delivery") {
    return "Delivery";
  }
  return `Hall Seat ${tableId}`;
}

function getServiceType(order: OrderDto): string {
  const tableId = order.tableId;
  if (tableId == null || String(tableId).toLowerCase() === "delivery") {
    return "Delivery";
  }
  return "Dine-in";
}

type Props = {
  order: OrderDto;
  currentTimeMillis: number;
  onComplete: () => void;
};

/**
 * Kitchen receipt-style card: dark header with order #, time, waiting badge, seat, service type, Complete button;
 * body lists order items with checkable rows.
 */
export default function KitchenReceiptCard({
  order,
  currentTimeMillis,
  onComplete,
}: Props) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const timeInfo = useTimeInfo(order.createdAt, currentTimeMillis);
  const displayNumber = getDisplayOrderNumber(order);
  const seatLabel = getSeatLabel(order);
  const serviceType = getServiceType(order);

  const handleCheckedChange = useCallback((itemKey: string, checked: boolean) => {
    setCheckedItems((prev) => ({ ...prev, [itemKey]: checked }));
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md bg-[#E5E5E5]">
      <div className="bg-white">
        {/* Header: dark bar */}
        <div className="bg-[#2C3E50] rounded-t-xl px-3 py-3 flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <span className="text-white text-xl font-bold">#{displayNumber}</span>
            {timeInfo && (
              <div className="flex items-center gap-1.5">
                <span className="text-white/90 text-[13px]">{timeInfo.formatted}</span>
                <span
                  className="rounded-lg px-2 py-1 flex items-center gap-1 text-[11px] font-semibold text-white"
                  style={{ backgroundColor: `${timeInfo.color}e6` }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  {timeInfo.waitingText}
                </span>
              </div>
            )}
          </div>
          <p className="text-white/90 text-[13px]">{seatLabel}</p>
          <p className="text-white/70 text-xs">{serviceType}</p>
          <button
            type="button"
            onClick={onComplete}
            className="w-full py-2.5 rounded-lg font-semibold text-[15px] text-white bg-[#2196F3] hover:bg-[#1976D2] focus:outline-none focus:ring-2 focus:ring-[#2196F3] focus:ring-offset-2"
          >
            Complete
          </button>
        </div>
        {/* Body: item list */}
        <div className="p-3 flex flex-col gap-1.5">
          {(order.items ?? []).map((item: OrderItemDto, index: number) => {
            const itemKey = `${item.menuItemId}_${index}`;
            return (
              <KitchenReceiptItemRow
                key={itemKey}
                item={item}
                isChecked={checkedItems[itemKey] ?? false}
                onCheckedChange={(checked) => handleCheckedChange(itemKey, checked)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
