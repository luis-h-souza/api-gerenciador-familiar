require('dotenv').config();

const env = {
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
};

module.exports = { env };
