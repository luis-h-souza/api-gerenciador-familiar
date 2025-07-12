const { sign } = require('./sign');
const { verify } = require('./verify');

const secret = 'UC16_projeto_integrador';

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000, // 24 horas
  data: {
    sub: 'luis',
    roles: ['user'],
  },
  secret,
});

const decode = verify({
  token,
  secret,
});

console.log({ decode })
