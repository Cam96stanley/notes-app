import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";

export const notes = pgTable("notes", {
  id: varchar("id").primaryKey(),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("udpated_at"),
  userId: varchar("user_id")
    .notNull()
    .references(() => users.id),
});
