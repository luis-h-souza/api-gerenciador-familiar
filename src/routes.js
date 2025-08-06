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
const { makeTaskRepository } = require('./factories/makeTaskRepository');
const { makeTaskController } = require('./factories/makeTaskController');

const router = Router();

const registerRepository = makeRegisterRepository();
const registerController = makeRegisterController(registerRepository);
const loginRepository = makeLoginRepository();
const loginController = makeLoginController(loginRepository);
const familyRepository = makeFamilyRepository();
const familyController = makeFamilyController(familyRepository);
const userRepository = makeUserRepository();
const userController = makeUserController(userRepository);
const taskRepository = makeTaskRepository();
const taskController = makeTaskController(taskRepository);

// Rota de cadastro de usuário
router.post('/register', async (req, res) => {
  const response = await registerController.handle({ body: req.body });
  res.status(response.statusCode).json(response.body);
});

// rota para login
router.post('/login', async (req, res) => {
  const response = await loginController.handle({ body: req.body })
  res.status(response.statusCode).json(response.body);
})

//? Rotas para User
// Lista todos os usuários
router.get('/users', jwtGuard, async (req, res) => {
  const response = await userController.show();
  res.status(response.statusCode).json(response.body);
});

// Busca o usuário pelo ID
router.get('/user/:id', jwtGuard, async (req, res) => {
  const response = await userController.showById({ params: req.params });
  res.status(response.statusCode).json(response.body);
});

// Atualização do usuário
router.put('/update-user/:id', jwtGuard, async (req, res) => {
  const response = await userController.update({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Atualiza a senha do usuário
router.put('/update-user/:id/password', jwtGuard, async (req, res) => {
  const response = await userController.updatePassword({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Deleta um usuário
router.delete('/delete-user/:id', jwtGuard, async (req, res) => {
  const response = await userController.delete({
    params: req.params
  });
  if (response.statusCode === 204) {
    return res.sendStatus(204); // evita enviar corpo com 204
  }
  res.status(response.statusCode).json(response.body);
})

//? Rotas para Tarefas
// Cria uma tarefa
router.post('/create-task', jwtGuard, async (req, res) => {
  const response = await taskController.create({ body: req.body, accountId: req.accountId });
  res.status(response.statusCode).json(response.body);
});

// Lista todas as tarefas
router.get('/tasks', jwtGuard, async (req, res) => {
  const resposnse = await taskController.show();
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Lista tarefas pelo ID
router.get('/tasks/:id', jwtGuard, async (req, res) => {
  const resposnse = await taskController.showById({ params: req.params });
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Atualiza uma tarefa
router.put('/update-task/:id', jwtGuard, async (req, res) => {
  const response = await taskController.update({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Deleta uma tarefa
router.delete('/delete-task/:id', jwtGuard, async (req, res) => {
  const response = await taskController.delete({
    params: req.params
  });
  if (response.statusCode === 204) {
    return res.sendStatus(204); // evita enviar corpo com 204
  }
  res.status(response.statusCode).json(response.body);
})

//? Rotas para family
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

module.exports = router;
