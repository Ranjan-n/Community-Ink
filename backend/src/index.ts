import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

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
