const { Router } = require('express');
const { RegisterController } = require('./application/controllers/RegisterController');
const { RegisterRepository } = require('./application/repositories/RegisterRepository');
const { AuthenticationMiddleware } = require('./application/middlewares/AuthMiddleware');

const router = Router();

const registerRepository = new RegisterRepository();
const registerController = new RegisterController(registerRepository);

router.post('/register', async (req, res) => {
  const response = await registerController.handle({ body: req.body });
  res.status(response.statusCode).json(response.body);
});

// Middleware JWT para proteger rotas
const authMiddleware = new AuthenticationMiddleware();
function jwtGuard(req, res, next) {
  authMiddleware.handle({ headers: req.headers }).then(result => {
    if (result.statusCode === 401) {
      return res.status(401).json(result.body);
    }
    // Adiciona o accountId ao request para uso posterior
    req.accountId = result.data.accountId;
    next();
  });
}

// Exemplo de rota protegida
router.get('/me', jwtGuard, (req, res) => {
  res.json({ message: 'Você está autenticado!', accountId: req.accountId });
});

module.exports = router;
