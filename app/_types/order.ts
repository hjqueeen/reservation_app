/**
 * Order types matching Android app OrderDto / API.
 * Same structure as gastrosoftware RestaurantApi orders endpoints.
 */

export type OrderStatus =
  | "CREATED"
  | "CONFIRMED"
  | "PREPARING"
  | "READY"
  | "SERVED"
  | "PAID"
  | "CANCELLED";

export interface OrderItemDto {
  menuItemId: string;
  quantity: number;
  price?: number;
  name?: string;
  optionsJson?: string;
}

export interface OrderDto {
  id: string | null;
  items: OrderItemDto[];
  status: string;
  total?: number | null;
  createdAt?: string | null;
  restaurantId?: string | null;
  tableId?: string | null;
  orderNumber?: string | null;
  createdByUserId?: string | null;
  waitingTimeSeconds?: number | null;
}

/** Kitchen shows orders that are not READY, PAID, or CANCELLED */
export const KITCHEN_HIDDEN_STATUSES: OrderStatus[] = ["READY", "PAID", "CANCELLED"];

export function isKitchenOrder(order: OrderDto): boolean {
  const s = (order.status || "").toUpperCase();
  return !KITCHEN_HIDDEN_STATUSES.includes(s as OrderStatus);
}

/** Display order number: use part after "_" (e.g. 20260131_001 -> 001) or fallback */
export function getDisplayOrderNumber(order: OrderDto): string {
  const num = order.orderNumber;
  if (num && num.includes("_")) return num.substring(num.lastIndexOf("_") + 1);
  if (order.id) return order.id.slice(-3).toUpperCase();
  return "?";
}
