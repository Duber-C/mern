const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(request, response) {
  try {
    await prisma.$connect();
    const users = await prisma.customer.findMany();
    return response.status(200).json(users);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(error),
    };
  }
}
