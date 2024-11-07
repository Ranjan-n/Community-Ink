import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
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

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) {
      c.status(403);
      return c.json({
        error: "Error while Signing Up. User already exists",
      });
    }

    const res = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: res.id }, c.env.JWT_SECRET);

    return c.json({
      token,
    });
  } catch (err) {
    c.status(403);
    return c.json({
      error: "Error while Signing Up.",
    });
  }
});

app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({
        error: "user not found",
      });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch (err) {
    c.status(403);
    return c.json({
      error: "Internal Server error",
    });
  }
});

export default app;
