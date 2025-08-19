require('dotenv').config({
  path: ['.env'],
  debug: true
});

const env = {
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
  databaseUrl: process.env.DATABASE_URL || 'not-set',
  emailUser: process.env.EMAIL_USER || '',
  emailPassword: process.env.EMAIL_PASSWORD || '',
  deepLinkBaseUrl: process.env.DEEP_LINK_BASE_URL || '',
};

module.exports = { env };
