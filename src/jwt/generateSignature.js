// import { createHmac } from 'crypto'
const { createHmac } = require('crypto').createHmac;

function generateSignature({ header, payload, secret }) {
  const hmac = createHmac('sha256', secret);
  return hmac.update(`${header}.${payload}`).digest('base64url');
}

module.exports = { generateSignature };
