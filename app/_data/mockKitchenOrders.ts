/**
 * Mock kitchen orders for Staff Kitchen page (API not yet implemented).
 * Orders with status CREATED, CONFIRMED, or PREPARING are shown; READY/PAID/CANCELLED are hidden.
 */

import type { OrderDto } from "@/app/_types/order";

const now = new Date();
const toISO = (minutesAgo: number) =>
  new Date(now.getTime() - minutesAgo * 60 * 1000).toISOString();

export const MOCK_KITCHEN_ORDERS: OrderDto[] = [
  {
    id: "ord-a1b2c3",
    orderNumber: "20260205_001",
    status: "CREATED",
    createdAt: toISO(3),
    restaurantId: "r1",
    tableId: "T5",
    total: 18500,
    items: [
      { menuItemId: "m1", quantity: 2, price: 4500, name: "Kimchi Stew" },
      {
        menuItemId: "m2",
        quantity: 1,
        price: 9500,
        name: "Grilled Galbi",
        optionsJson: '["Medium rare", "Extra sauce"]',
      },
    ],
  },
  {
    id: "ord-d4e5f6",
    orderNumber: "20260205_002",
    status: "CONFIRMED",
    createdAt: toISO(8),
    restaurantId: "r1",
    tableId: "T12",
    total: 32000,
    items: [
      { menuItemId: "m3", quantity: 1, price: 12000, name: "Seafood Pancake" },
      { menuItemId: "m4", quantity: 2, price: 8000, name: "Bibimbap" },
      {
        menuItemId: "m5",
        quantity: 1,
        price: 4000,
        name: "Rice",
        optionsJson: '["Large"]',
      },
    ],
  },
  {
    id: "ord-g7h8i9",
    orderNumber: "20260205_003",
    status: "PREPARING",
    createdAt: toISO(12),
    restaurantId: "r1",
    tableId: null,
    total: 15000,
    items: [
      { menuItemId: "m6", quantity: 2, price: 7500, name: "Bulgogi Set" },
    ],
  },
  {
    id: "ord-j0k1l2",
    orderNumber: "20260205_004",
    status: "CREATED",
    createdAt: toISO(1),
    restaurantId: "r1",
    tableId: "delivery",
    total: 22000,
    items: [
      { menuItemId: "m7", quantity: 1, price: 14000, name: "Army Stew" },
      { menuItemId: "m8", quantity: 2, price: 4000, name: "Tteokbokki" },
    ],
  },
  {
    id: "ord-m3n4o5",
    orderNumber: "20260205_005",
    status: "CONFIRMED",
    createdAt: toISO(15),
    restaurantId: "r1",
    tableId: "T3",
    total: 28000,
    items: [
      {
        menuItemId: "m9",
        quantity: 1,
        price: 18000,
        name: "Special BBQ Platter",
        optionsJson: '["Spicy", "No garlic"]',
      },
      { menuItemId: "m10", quantity: 2, price: 5000, name: "Cold Noodles" },
    ],
  },
  {
    id: "ord-p6q7r8",
    orderNumber: "20260205_006",
    status: "PREPARING",
    createdAt: toISO(20),
    restaurantId: "r1",
    tableId: "T8",
    total: 16500,
    items: [
      { menuItemId: "m11", quantity: 1, price: 8500, name: "Jjajangmyeon" },
      { menuItemId: "m12", quantity: 1, price: 8000, name: "Jjamppong" },
    ],
  },
  {
    id: "ord-s9t0u1",
    orderNumber: "20260205_007",
    status: "CREATED",
    createdAt: toISO(5),
    restaurantId: "r1",
    tableId: "T1",
    total: 12000,
    items: [
      { menuItemId: "m13", quantity: 2, price: 6000, name: "Dumpling Soup" },
    ],
  },
  {
    id: "ord-v2w3x4",
    orderNumber: "20260205_008",
    status: "CONFIRMED",
    createdAt: toISO(25),
    restaurantId: "r1",
    tableId: "T15",
    total: 41000,
    items: [
      { menuItemId: "m14", quantity: 1, price: 25000, name: "Hanwoo Sirloin" },
      { menuItemId: "m15", quantity: 2, price: 8000, name: "Doenjang Stew" },
    ],
  },
  {
    id: "ord-y5z6a7",
    orderNumber: "20260205_009",
    status: "PREPARING",
    createdAt: toISO(18),
    restaurantId: "r1",
    tableId: "T7",
    total: 9500,
    items: [
      { menuItemId: "m16", quantity: 1, price: 5500, name: "Kimchi Fried Rice" },
      { menuItemId: "m17", quantity: 1, price: 4000, name: "Egg Roll" },
    ],
  },
  {
    id: "ord-b8c9d0",
    orderNumber: "20260205_010",
    status: "CREATED",
    createdAt: toISO(2),
    restaurantId: "r1",
    tableId: "T2",
    total: 19500,
    items: [
      { menuItemId: "m18", quantity: 1, price: 11000, name: "Bossam" },
      {
        menuItemId: "m19",
        quantity: 1,
        price: 8500,
        name: "Pork Belly",
        optionsJson: '["Crispy"]',
      },
    ],
  },
];
