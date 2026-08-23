import { pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";
import { notes } from "./notes";
import { tags } from "./tags";

export const notesTags = pgTable(
  "notes_tags",
  {
    tagId: varchar("tag_id")
      .notNull()
      .references(() => tags.id),
    noteId: varchar("note_id")
      .notNull()
      .references(() => notes.id),
  },
  (table) => [primaryKey({ columns: [table.tagId, table.noteId] })],
);
