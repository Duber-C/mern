const { PrismaClient, PrismaClientRequestError } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async (event, context, callback) => {
  try {
    // const data = JSON.parse(event.body);
    const createdUser = await prisma.user.create({ data: { name: "asdfasd" } });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createdUser),
    };
  } catch (e) {
    return {
      statusCode: 409,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    };
  }
};
