const { generateSignature } = require('./generateSignature');

function sign({ data, exp, secret }) {

  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };

  const payload = {
    ...data,
    iat: Date.now(),
    exp,
  };

  const base64EncodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64EncodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');

  const signature = generateSignature({
    header: base64EncodedHeader,
    payload: base64EncodedPayload,
    secret,
  });

  return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`;
}

module.exports = { sign }
