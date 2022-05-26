const { PrismaClient } = require("@prisma/client");
const moment = require("moment");

const prisma = new PrismaClient();

async function main() {
  // Connect the client

  await prisma.$connect();

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return allUsers;
}
