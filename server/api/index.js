const express = require("express");
const app = express();
const { v4 } = require("uuid");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.get("/api/tickets", (req, res) => {
  (async () => {
    res.json({ paso: "asdfasdf" });
    await prisma.$connect().catch((err) => {
      res.json(err);
    });
    const allUsers = await prisma.user
      .findMany({
        include: {
          notifications: true,
          tickets: {
            select: {
              description: true,
              priority: true,
              date: true,
              customer: true,
            },
          },
        },
      })
      .catch((err) => res.json(err));
    res.json(allUsers);
  })().catch((err) => {
    res.json(err);
  });
});

module.exports = app;
