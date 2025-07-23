const { Router } = require('express');

const { jwtGuard } = require('./application/middlewares/jwtGuard');

const { makeRegisterRepository } = require('./factories/makeRegisterRepository');
const { makeRegisterController } = require('./factories/makeRegisterController');
const { makeLoginRepository } = require('./factories/makeLoginRepository');
const { makeLoginController } = require('./factories/makeLoginController');

const router = Router();

const registerRepository = makeRegisterRepository();
const registerController = makeRegisterController(registerRepository);
const loginRepository = makeLoginRepository();
const loginController = makeLoginController(loginRepository);

// Rota de cadastro de usuário
router.post('/register', async (req, res) => {
  // Chama o controller de registro
  const response = await registerController.handle({ body: req.body });
  // Retorna a resposta do controller
  res.status(response.statusCode).json(response.body);
});

// rota de login
router.post('/login', async (req, res) => {
  // chama o controller do login
  const response = await loginController.handle({ body: req.body })
  res.status(response.statusCode).json(response.body);
})

// Exemplo de rota protegida
router.get('/me', jwtGuard, (req, res) => {
  res.json({ message: 'Você está autenticado!', accountId: req.accountId });
});

module.exports = router;
