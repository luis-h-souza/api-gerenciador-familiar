const { PrismaClient } = require('@prisma/client');

// const { PrismaClient } = require("./generated/prisma") // vercel
// const { PrismaClient } = require("../generated/prisma") // local

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error', 'warn' ],
});

module.exports = { prismaClient };
