/**
 * Type definitions for menu data structures.
 * Based on Kotlin domain models from gastrosoftware app.
 */

/**
 * Category represents a menu category (e.g., "Appetizer", "Main Course").
 */
export interface Category {
  id: string;
  name: string;
  restaurantId: string;
  displayOrder: number;
}

/**
 * MenuOption represents a single option within an option group.
 */
export interface MenuOption {
  id: string;
  name: string;
  price: number;
}

/**
 * MenuOptionGroup represents a group of options for a menu item.
 * Can be required (Pflichtoptionen) or optional (Wahloptionen).
 */
export interface MenuOptionGroup {
  id: string;
  name: string;
  required: boolean;
  maxSelection: number;
  options: MenuOption[];
}

/**
 * MenuItem represents a single menu item with all its details.
 */
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  categoryName?: string;
  imageUrl?: string;
  tags: string[];
  optionGroups: MenuOptionGroup[];
  restaurantId: string;
}
