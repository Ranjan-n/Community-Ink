import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  createBlogSchema,
  updateBlogSchema,
} from "@ranjan07/communityink-common";
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

  try {
    const res = await verify(token, c.env.JWT_SECRET);

    if (!res) {
      c.status(401);
      return c.json({ error: "Unauthorized user!" });
    }

    c.set("userId", String(res.id));
    await next();
  } catch (e) {
    c.status(401);
    return c.json({ error: "Unauthorized user!" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();

  const { success } = createBlogSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect inputs for the post",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });

    return c.json({
      id: res.id,
    });
  } catch (e) {
    console.log(e);
    c.status(404);
    return c.json({
      error: e,
    });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();

  const { success } = updateBlogSchema.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message: "Incorrect inputs for the post",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({
      id: res.id,
    });
  } catch (e) {
    c.status(404);
    return c.json({
      error: e,
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const res = await prisma.post.findMany();

  return c.json({
    posts: res,
  });
});

blogRouter.get("/:id", async (c) => {
  const id = await c.req.param("id");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const res = await prisma.post.findFirst({
      where: {
        id,
      },
    });

    return c.json({
      post: res,
    });
  } catch (e) {
    c.status(404);
    return c.json({
      error: e,
    });
  }
});
