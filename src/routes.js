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
const { makeVehicleRepository } = require('./factories/makeVehicleRepository');
const { makeVehicleController } = require('./factories/makeVehicleController');
const { makeShoppingListRepository } = require('./factories/makeShoppingListRepository');
const { makeShoppingListController } = require('./factories/makeShoppingListController');
const { makeActivitiesRepository } = require('./factories/makeActivitiesRepository')
const { makeActivitiesController } = require('./factories/makeActivitiesController')


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
const vehicleRepository = makeVehicleRepository();
const vehicleController = makeVehicleController(vehicleRepository);
const listRepository = makeShoppingListRepository();
const listController = makeShoppingListController(listRepository);
const activitiesRepository = makeActivitiesRepository();
const activitiesController = makeActivitiesController(activitiesRepository)


//? Rotas de autenticação
// Rota de cadastro de usuário
router.post('/register', async (req, res) => {
  const response = await registerController.handle({ body: req.body });
  res.status(response.statusCode).json(response.body);
});

// rota para login
router.post('/login', async (req, res) => {
  const response = await loginController.handle({ body: req.body })
  res.status(response.statusCode).json(response.body);
});


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
  const resposnse = await taskController.showByUserId({ params: req.params });
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
});


//? Rotas para Veiculos
// Cria um veículo
router.post('/create-vehicle', jwtGuard, async (req, res) => {
  const response = await vehicleController.create({ body: req.body, req });
  res.status(response.statusCode).json(response.body);
});

// Lista todos os veiculos
router.get('/vehicles', jwtGuard, async (req, res) => {
  const resposnse = await vehicleController.show();
  res.status(resposnse.statusCode).json(resposnse.body);
});

router.get('/vehicle/:id', jwtGuard, async (req, res) => {
  const resposnse = await vehicleController.showByUserId({ params: req.params });
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Atualiza um veículo
router.put('/update-vehicle/:id', jwtGuard, async (req, res) => {
  const response = await vehicleController.update({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Deleta um veículo
router.delete('/delete-vehicle/:id', jwtGuard, async (req, res) => {
  const response = await vehicleController.delete({ params: req.params });
  res.status(response.statusCode).json(response.body);
});

// Adicionar um registro de manutenção



//? Rotas das Listas de Compra
// Criar Lista de compras
router.post('/create-list', jwtGuard, async (req, res) => {
  const response = await listController.create({ body: req.body, req });
  res.status(response.statusCode).json(response.body);
});

// Mostar todas as listas de compra
router.get('/lists', jwtGuard, async (req, res) => {
  const resposnse = await listController.show();
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Atualiza uma lista
router.put('/update-list/:id', jwtGuard, async (req, res) => {
  const response = await listController.update({ body: req.body, req });
  res.status(response.statusCode).json(response.body);
});

// Delete uma lista
router.delete('/delete-list/:id', jwtGuard, async (req, res) => {
  console.log('Rota DELETE /delete-list/:id chamada com params:', req.params);
  const response = await listController.delete({ params: req.params });
  console.log('Resposta do controlador:', response);
  res.status(response.statusCode).json(response.body)
});

// Adicionar item a lista de compras


//? Rota Atividades
// Listar as 05 últimas atividades
router.get('/activities', jwtGuard, async (req, res) => {
  const response =await activitiesController.show();
  res.status(response.statusCode).json(response.body)
});


//? Rotas para Familia
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
