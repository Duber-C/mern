const { PrismaClient } = require("@prisma/client");
const moment = require("moment");

const prisma = new PrismaClient();

// data
const descriptions = [
  "contact email not linked",
  "adding images to featured posts",
  "when i whill be charged this month",
  "pavement not going through",
  "unable to add replies",
  "downtime since last week",
  "referral bonus",
  "how do i change my password",
];

const customers = [
  "tom cruise",
  "matt damon",
  "robert downey",
  "christian bale",
  "henry cavil",
  "chris evans",
  "sam smith",
  "steve rogers",
];

const priorities = ["high", "low", "normal"];

async function main() {
  // Connect the client
  await prisma.$connect();

  // Populate the database with test data
  for (let index = 0; index < 30; index++) {
    await prisma.user.create({
      data: {
        email: "hello@prisma.com",
        image: `https://picsum.photos/${Math.round(Math.random() * 50 + 150)}`,
        updated: moment().toDate(),
        notifications: {
          create: {
            title: "My first notification",
            description: "Lots of really interesting stuff",
          },
        },
        tickets: {
          create: {
            date: moment().toDate(),
            description:
              descriptions[
                Math.round(Math.random() * (descriptions.length - 1))
              ],
            priority:
              priorities[Math.round(Math.random() * (priorities.length - 1))],
            customer: {
              create: {
                name: customers[
                  Math.round(Math.random() * (customers.length - 1))
                ],
                date: moment().toDate(),
              },
            },
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
