const { PrismaClient } = require("../generated/prisma")

const prismaClient = new PrismaClient({
  log: ["query"],
});

module.exports = { prismaClient };
