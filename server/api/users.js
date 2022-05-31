const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(event, context, callback) {
  try {
    await prisma.$connect();
    const users = await prisma.customer.findMany();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(error),
    };
  }
}
