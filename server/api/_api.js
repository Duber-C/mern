const express = require("express");
const serverless = require("serverless-http");
const { PrismaClient } = require("@prisma/client");

const app = express();
const router = express.Router();

const prisma = new PrismaClient();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "test!",
  });
});

router.post("/testpost", (req, res) => {
  res.json({
    hello: "hit the POST!",
  });
});

router.get("/tickets", (req, res) => {
  (async () => {
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
  })();
});

app.use(`data/`, router);
app.use(express.json);

module.exports = app;
module.exports.handler = serverless(app);
