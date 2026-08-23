import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { db, notes } from "@/db";

export const notesRoute = new Hono()
  .get("/", async (c) => {
    const allNotes = await db.select().from(notes);
    return c.json(allNotes);
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const [note] = await db.select().from(notes).where(eq(notes.id, id));
    if (!note) return c.json({ error: "Not found" }, 404);
    return c.json(note);
  })
  .post("/", async (c) => {
    const body = await c.req.json();
    const [newNote] = await db.insert(notes).values(body).returning();
    return c.json(newNote, 201);
  });
