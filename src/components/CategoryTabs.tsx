import { useState } from "react";
import { categories } from "../data/catalog";

export default function CategoryTabs() {
  const [active, setActive] = useState("all");

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`cat-tab ${active === cat.id ? "active" : ""}`}
          onClick={() => setActive(cat.id)}
        >
          <CategoryIcon name={cat.icon} />
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}

function CategoryIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "grid":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "flame":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2c1 3 4 5 4 9a4 4 0 0 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3l1.5 5L19 9.5 13.5 11 12 16l-1.5-5L5 9.5 10.5 8z" />
          <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7z" />
        </svg>
      );
    case "slots":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M8 6V4M16 6V4M3 11h18" />
        </svg>
      );
    case "jackpot":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M9 10h4.5a2 2 0 0 1 0 4H9" />
        </svg>
      );
    case "live":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16" />
        </svg>
      );
    default:
      return null;
  }
}
