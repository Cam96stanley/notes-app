import { sql } from "drizzle-orm";
import { check, pgTable, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const userSettings = pgTable(
  "user_settings",
  {
    userId: varchar("user_id")
      .primaryKey()
      .references(() => users.id),
    theme: varchar("theme").notNull().default("system"),
    fontStyle: varchar("font_style").notNull().default("sans_serif"),
  },
  (table) => [
    check("theme_check", sql`${table.theme} IN ('light', 'dark', 'system')`),
    check(
      "font_style_check",
      sql`${table.fontStyle} IN ('sans-serif', 'serif', 'monospace')`,
    ),
  ],
);

export type Theme = "light" | "dark" | "system";
export type FontStyle = "sans-serif" | "serif" | "monospace";
