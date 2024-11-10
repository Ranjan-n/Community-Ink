import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signUpSchema } from "@ranjan07/communityink-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signUpSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid Credentials",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

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
        name: body.name,
      },
    });

    const token = await sign({ id: res.id }, c.env.JWT_SECRET);

    return c.json({
      token,
    });
  } catch (err) {
    c.status(403);
    return c.json({
      error: "User already exists.",
    });
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signUpSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid Credentials",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

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
