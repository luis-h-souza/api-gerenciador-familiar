const { generateSignature } = require('./generateSignature');


function verify({ token, secret }) {
  const [headerSent, payloadSent, signatureSent] = token.split('.');

  const signature = generateSignature({
    header: headerSent,
    payload: payloadSent,
    secret,
  });

  if (signature !== signatureSent) {
    throw new Error('Token JWT inválido.')
  }

  const decodedPayload = JSON.parse(Buffer.from(payloadSent, 'base64url').toString('utf-8'));

  if (decodedPayload.exp < Date.now()) {
    throw new Error('Token JWT expirado.')
  }

  return decodedPayload;
}

module.exports = { verify }
