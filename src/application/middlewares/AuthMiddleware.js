const { verify } = require("jsonwebtoken");
const { env } = require("../config/env");

class AuthenticationMiddleware {
  async handle({ headers }) {
    const { authorization } = headers;
    // Verifica se o cabeçalho Authorization está presente
    if (!authorization) {
      return {
        statusCode: 401,
        body: { error: "Token não fornecido." },
      };
    }

    try {
      // verifica se o token começa com "Bearer "
      if (!authorization.startsWith("Bearer ")) {
        throw new Error("Formato de token inválido.");
      }

      console.log("Authorization header:", authorization);
      // extrai o token do cabeçalho
      const authorizationToken = authorization.split(" ")[1];
      // verifica o token usando a chave JWTsecret
      const payload = verify(authorizationToken, env.jwtSecret);

      return {
        data: {
          accountId: payload.sub,
        },
      };
    } catch (error) {
      console.error('Erro ao validar token:', error);

      // Se o token estiver expirado
      if (error.name === 'TokenExpiredError') {
        return {
          statusCode: 401,
          body: { error: 'Token expirado' },
        };
      }
      // Se o token não for válido ou estiver malformado
      if (error.name === 'JsonWebTokenError') {
        return {
          statusCode: 401,
          body: { error: 'Token inválido' },
        };
      }

      // Erro genérico - problema na chave secreta ou configuração
      return {
        statusCode: 500,
        body: { error: 'Erro interno ao processar o token' },
      };
    }
  }
}

module.exports = { AuthenticationMiddleware };
