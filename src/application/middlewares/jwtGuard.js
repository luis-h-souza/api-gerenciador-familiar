const { AuthenticationMiddleware } = require('./AuthMiddleware');

// Função para validar UUID
const isValidUUID = (str) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return typeof str === 'string' && uuidRegex.test(str);
};

// Este middleware verifica o token JWT e adiciona o accountId ao request
async function jwtGuard(req, res, next) {
  const authMiddleware = new AuthenticationMiddleware();

  //! Debug: log do req.body ANTES
  console.log('jwtGuard - req.body antes:', req.body);

  try {
    const result = await authMiddleware.handle({ headers: req.headers });
    if (result.statusCode === 401) {
      // Retorna erro de token inválido
      return res.status(401).json(result.body, 'Access token inválido.');
    }

    // Adiciona o accountId ao request para uso posterior
    const accountId = result.data.accountId;
    if (!accountId || !isValidUUID(accountId)) {
      return res.status(401).json({ error: 'ID da conta inválido ou não é um UUID válido.' });
    }
    req.accountId = accountId; // Atribui o UUID como string

    console.log('req.guard - Account ID:', accountId); //!
    console.log('jwtGuard - req.body após:', req.body); //! Log do req.body DEPOIS

    next();
  } catch (error) {
    console.error('JWT-Guard error:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { jwtGuard };
