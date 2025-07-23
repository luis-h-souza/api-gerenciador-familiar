const { AuthenticationMiddleware } = require("../application/middlewares/AuthMiddleware");

function makeAuthMiddleware() {
  const authMiddleware = new AuthenticationMiddleware();
  return async (req, res, next) => {
    try {
      //
      const result = await authMiddleware.handle({ headers: req.headers });

      if (result.statusCode === 401 || result.statusCode === 403) {
        return res.status(result.statusCode).json(result.body);
      }

      req.accountId = result.data.accountId;
      next();
    } catch (error) {
      console.error('Erro no middleware de autenticação:', error);
      // Se ocorrer um erro ao processar o token, retorna 500
      return res.status(500).json({ error: 'Erro interno ao processar o token' });
    }
  };
}

module.exports = { makeAuthMiddleware };
