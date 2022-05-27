const express = require("express");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const auth = express.Router();
const prisma = new PrismaClient();

auth.route("/login").get((req, res) => {
  (async () => {
    await prisma.$connect();

    // await prisma.user
    //   .create({
    //     email: req.body.email,
    //     password: bcrypt.hashSync(req.body.password, 8),
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  })();
  res.status(200).send(req);
});

module.exports = auth;
