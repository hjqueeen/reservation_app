/**
 * Cart store (Zustand) – mirrors gastrosoftware OrderViewModel cart logic.
 * Add to cart with quantity/options, update quantity, remove item, calculate total.
 */

import { create } from 'zustand';
import type { MenuItem } from '../_types/menu';
import type { CartEntry, SelectedOptions } from '../_types/cart';
import {
  getItemKey,
  getTotalPrice,
  buildSelectedOptionNames,
} from '../_types/cart';

export interface CartState {
  /** Cart lines keyed by itemKey (menuItemId + hash of selected options). */
  items: Record<string, CartEntry>;

  /**
   * Adds a menu item to the cart with selected options and quantity.
   * If the same item with the same options already exists, quantity is incremented.
   */
  addItemToOrder: (
    menuItem: MenuItem,
    selectedOptions: SelectedOptions,
    quantity: number
  ) => void;

  /**
   * Updates the quantity of a cart line. Removes the line if quantity <= 0.
   */
  updateItemQuantity: (itemKey: string, quantity: number) => void;

  /** Removes a cart line by key. */
  removeItemFromOrder: (itemKey: string) => void;

  /** Total price of all cart items (price * quantity per line). */
  calculateTotal: () => number;

  /** Total number of items (sum of quantities). */
  getCartItemCount: () => number;

  /** Clears the cart. */
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: {},

  addItemToOrder: (menuItem, selectedOptions, quantity) => {
    const itemKey = getItemKey(menuItem.id, selectedOptions);
    const finalPrice = getTotalPrice(
      selectedOptions,
      menuItem.price,
      menuItem.optionGroups
    );
    const selectedOptionNames = buildSelectedOptionNames(menuItem, selectedOptions);

    set((state) => {
      const current = { ...state.items };
      const existing = current[itemKey];

      if (existing) {
        current[itemKey] = {
          ...existing,
          orderItem: {
            ...existing.orderItem,
            quantity: existing.orderItem.quantity + quantity,
          },
        };
      } else {
        current[itemKey] = {
          menuItem,
          orderItem: {
            menuItemId: menuItem.id,
            quantity,
            price: finalPrice,
            name: menuItem.name,
            selectedOptions: selectedOptions.selectedOptions,
            selectedOptionNames,
          },
          selectedOptions,
        };
      }
      return { items: current };
    });
  },

  updateItemQuantity: (itemKey, quantity) => {
    if (quantity <= 0) {
      get().removeItemFromOrder(itemKey);
      return;
    }
    set((state) => {
      const entry = state.items[itemKey];
      if (!entry) return state;
      return {
        items: {
          ...state.items,
          [itemKey]: {
            ...entry,
            orderItem: {
              ...entry.orderItem,
              quantity,
            },
          },
        },
      };
    });
  },

  removeItemFromOrder: (itemKey) => {
    set((state) => {
      const next = { ...state.items };
      delete next[itemKey];
      return { items: next };
    });
  },

  calculateTotal: () => {
    return Object.values(get().items).reduce(
      (sum, entry) => sum + entry.orderItem.price * entry.orderItem.quantity,
      0
    );
  },

  getCartItemCount: () => {
    return Object.values(get().items).reduce(
      (sum, entry) => sum + entry.orderItem.quantity,
      0
    );
  },

  clearCart: () => set({ items: {} }),
}));
