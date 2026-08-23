import { pgTable, varchar } from "drizzle-orm/pg-core";

export const tags = pgTable("tags", {
  id: varchar("id").primaryKey(),
  name: varchar("name").notNull(),
});
