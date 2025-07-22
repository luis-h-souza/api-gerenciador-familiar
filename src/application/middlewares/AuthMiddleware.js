const { verify } = require("jsonwebtoken");
const { env } = require("../config/env");

class AuthenticationMiddleware {
  async handle({ headers }) {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: 401,
        body: { error: "Invalid access token." },
      };
    }

    try {
      if (!authorization.startsWith("Bearer ")) {
        throw new Error("Invalid token format");
      }
      
      console.log("Authorization header:", authorization);

      const authorizationToken = authorization.split(" ")[1];

      console.log("Authorization header-after:", authorizationToken);

      const payload = verify(authorizationToken, env.jwtSecret);

      return {
        data: {
          accountId: payload.sub,
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: { error: "Invalid access token." },
      };
    }
  }
}

module.exports = { AuthenticationMiddleware };
