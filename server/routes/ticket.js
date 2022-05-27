const express = require("express");
const { PrismaClient } = require("@prisma/client");

const routes = express.Router();
const prisma = new PrismaClient();

routes.route("/tickets").get((req, res) => {
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

module.exports = routes;
