const { Router } = require('express');

const { jwtGuard } = require('./application/middlewares/jwtGuard');

const { makeRegisterRepository } = require('./factories/makeRegisterRepository');
const { makeRegisterController } = require('./factories/makeRegisterController');
const { makeLoginRepository } = require('./factories/makeLoginRepository');
const { makeLoginController } = require('./factories/makeLoginController');
const { makeFamilyRepository } = require('./factories/makeFamilyRepository');
const { makeFamilyController } = require('./factories/makeFamilyController');
const { makeUserRepository } = require('./factories/makeUserRepository');
const { makeUserController } = require('./factories/makeUserController');

const router = Router();

const registerRepository = makeRegisterRepository();
const registerController = makeRegisterController(registerRepository);
const loginRepository = makeLoginRepository();
const loginController = makeLoginController(loginRepository);
const familyRepository = makeFamilyRepository();
const familyController = makeFamilyController(familyRepository);
const userRepository = makeUserRepository();
const userController = makeUserController(userRepository);

// Rota de cadastro de usuário
router.post('/register', async (req, res) => {
  const response = await registerController.handle({ body: req.body });
  res.status(response.statusCode).json(response.body);
});

// rota de login
router.post('/login', async (req, res) => {
  const response = await loginController.handle({ body: req.body })
  res.status(response.statusCode).json(response.body);
})

// Rota de busca de usuário por ID
router.get('/user/:id', jwtGuard, async (req, res) => {
  const response = await userController.showById({ params: req.params });
  res.status(response.statusCode).json(response.body);
});

// Rota de busca de usuário por ID
router.get('/user', jwtGuard, async (req, res) => {
  const response = await userController.show();
  res.status(response.statusCode).json(response.body);
});

// Rota de atualização de usuário
router.put('/user/:id', jwtGuard, async (req, res) => {
  const response = await userController.update({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

router.put('/user/:id/password', jwtGuard, async (req, res) => {
  const response = await userController.updatePassword({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Rota de criação de família (ajustada para POST)
router.post('/family', jwtGuard, async (req, res) => {
  const response = await familyController.handle({ body: req.body, user: req.user });
  res.status(response.statusCode).json(response.body);
});

// Rota de convite de família (ajustada para POST)
router.post('/family/invite', jwtGuard, async (req, res) => {
  try {
    const response = await familyController.handle({ body: req.body, user: req.user });
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erro interno do servidor', error: error.message });
  }
});

// Exemplo de rota protegida
router.get('/me', jwtGuard, (req, res) => {
  res.json({ message: 'Você está autenticado!', accountId: req.accountId });
});

module.exports = router;
