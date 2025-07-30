const { AuthenticationMiddleware } = require('./AuthMiddleware');

// Este middleware verifica o token JWT e adiciona o accountId ao request
async function jwtGuard(req, res, next) {
  const authMiddleware = new AuthenticationMiddleware();

  console.log('jwtGuard - req.body:', req.body); // Debug: log do req.body antes

  try {
    const result = await authMiddleware.handle({ headers: req.headers });
    if (result.statusCode === 401) {
      // Retorna erro de token inválido
      return res.status(401).json(result.body, 'Access token inválido.');
    }
    // Adiciona o accountId ao request para uso posterior
    req.accountId = result.data.accountId;

    console.log('jwtGuard - Account ID:', req.accountId); // Debug
    console.log('jwtGuard - req.body após:', req.body); // Debug: log do req.body depois

    next();
  } catch (error) {
    console.error('JWT-Guard error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { jwtGuard };
