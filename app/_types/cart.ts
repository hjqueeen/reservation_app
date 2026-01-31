/**
 * Cart/order types aligned with gastrosoftware domain model.
 * SelectedOptions, CartItem (OrderItem), CartEntry (OrderItemWithMenuItem).
 */

import type { MenuItem, MenuOptionGroup } from './menu';

/**
 * Selected options for a menu item.
 * groupId -> list of optionIds (same option group can have multiple selections if maxSelection > 1).
 */
export interface SelectedOptions {
  menuItemId: string;
  selectedOptions: Record<string, string[]>;
}

/**
 * Cart item (order line): menu item id, quantity, price, name, and selected option ids/names.
 */
export interface CartItem {
  menuItemId: string;
  quantity: number;
  price: number;
  name?: string;
  /** groupId -> list of optionIds */
  selectedOptions: Record<string, string[]>;
  /** groupName -> list of option names (for display) */
  selectedOptionNames: Record<string, string[]>;
}

/**
 * Cart entry: cart item + menu item reference and selected options snapshot.
 * Used for display and for updating quantity/options.
 */
export interface CartEntry {
  menuItem: MenuItem;
  orderItem: CartItem;
  selectedOptions: SelectedOptions | null;
}

/**
 * Computes total price for selected options: base price + sum of option prices.
 */
export function getTotalPrice(
  selectedOptions: SelectedOptions,
  basePrice: number,
  optionGroups: MenuOptionGroup[]
): number {
  let total = basePrice;
  for (const [groupId, optionIds] of Object.entries(selectedOptions.selectedOptions)) {
    const group = optionGroups.find((g) => g.id === groupId);
    if (!group) continue;
    for (const optionId of optionIds) {
      const opt = group.options.find((o) => o.id === optionId);
      if (opt) total += opt.price;
    }
  }
  return total;
}

/**
 * Builds a stable key for a cart line: same menu item + same options => same key.
 */
export function getItemKey(menuItemId: string, selectedOptions: SelectedOptions): string {
  const sorted: Record<string, string[]> = {};
  for (const k of Object.keys(selectedOptions.selectedOptions).sort()) {
    sorted[k] = [...selectedOptions.selectedOptions[k]].sort();
  }
  const hash = JSON.stringify(sorted);
  return `${menuItemId}_${hash}`;
}

/**
 * Builds groupName -> list of option names for display.
 */
export function buildSelectedOptionNames(
  menuItem: MenuItem,
  selectedOptions: SelectedOptions
): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const [groupId, optionIds] of Object.entries(selectedOptions.selectedOptions)) {
    const group = menuItem.optionGroups.find((g) => g.id === groupId);
    const groupName = group?.name ?? groupId;
    const names = optionIds
      .map(
        (optionId) =>
          group?.options.find((o) => o.id === optionId)?.name ?? optionId
      )
      .filter(Boolean);
    if (names.length) result[groupName] = names;
  }
  return result;
}
