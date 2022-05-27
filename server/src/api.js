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

router.route("/tickets").get((req, res) => {
  (async () => {
    await prisma.$connect();

    const allUsers = await prisma.user.findMany({
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
    });
    res.send(allUsers);
  })();
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
