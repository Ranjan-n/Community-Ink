import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization");

  if (!header) {
    c.status(401);
    return c.json({ error: "Unauthorized user!" });
  }

  const token = header.split(" ")[1];

  const res = await verify(token, c.env.JWT_SECRET);

  if (!res) {
    c.status(401);
    return c.json({ error: "Unauthorized user!" });
  }

  c.set("userId", String(res.id));
  next();
});
