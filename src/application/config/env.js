require('dotenv').config({
  path: ['.env'],
  debug: true
});

const env = {
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
  databaseUrl: process.env.DATABASE_URL || 'not-set'
};

module.exports = { env };
