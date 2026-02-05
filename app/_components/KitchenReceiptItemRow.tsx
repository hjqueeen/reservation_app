"use client";

import type { OrderItemDto } from "@/app/_types/order";

/** Parse optionsJson (e.g. '["Spicy","No onion"]') to display strings */
function parseOptionNames(optionsJson?: string): string[] {
  if (!optionsJson?.trim()) return [];
  try {
    const parsed = JSON.parse(optionsJson) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

type Props = {
  item: OrderItemDto;
  isChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

/**
 * Single order item row in kitchen receipt card.
 * Shows quantity + name, optional option names; checkable with green highlight when done.
 */
export default function KitchenReceiptItemRow({
  item,
  isChecked = false,
  onCheckedChange,
}: Props) {
  const optionNames = parseOptionNames(item.optionsJson);
  const displayName = item.name ?? item.menuItemId;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onCheckedChange?.(!isChecked)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCheckedChange?.(!isChecked);
        }
      }}
      className={`
        w-full rounded-lg px-2.5 py-2 flex items-center gap-2 cursor-pointer
        ${isChecked ? "bg-[#E8F5E9] text-[#4CAF50]" : "bg-transparent text-black"}
      `}
    >
      {isChecked && (
        <svg
          className="w-5 h-5 shrink-0 text-[#4CAF50]"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )}
      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
        <span
          className={`text-base font-medium tracking-wide ${isChecked ? "text-[#4CAF50] line-through" : "text-inherit"}`}
        >
          {item.quantity} {displayName}
        </span>
        {optionNames.map((name) => (
          <span
            key={name}
            className={`text-[13px] pl-2 ${isChecked ? "text-[#4CAF50]/80 line-through" : "text-gray-500"}`}
          >
            └ {name}
          </span>
        ))}
      </div>
    </div>
  );
}
