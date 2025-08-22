const { Router } = require("express");

const { jwtGuard } = require("./application/middlewares/jwtGuard");

const {
  makeRegisterRepository,
} = require("./factories/makeRegisterRepository");
const {
  makeRegisterController,
} = require("./factories/makeRegisterController");
const { makeLoginRepository } = require("./factories/makeLoginRepository");
const { makeLoginController } = require("./factories/makeLoginController");
const { makeFamilyRepository } = require("./factories/makeFamilyRepository");
const { makeFamilyController } = require("./factories/makeFamilyController");
const { makeUserRepository } = require("./factories/makeUserRepository");
const { makeUserController } = require("./factories/makeUserController");
const { makeTaskRepository } = require("./factories/makeTaskRepository");
const { makeTaskController } = require("./factories/makeTaskController");
const { makeVehicleRepository } = require("./factories/makeVehicleRepository");
const { makeVehicleController } = require("./factories/makeVehicleController");
const {
  makeShoppingListRepository,
} = require("./factories/makeShoppingListRepository");
const {
  makeShoppingListController,
} = require("./factories/makeShoppingListController");
const {
  makeActivitiesRepository,
} = require("./factories/makeActivitiesRepository");
const {
  makeActivitiesController,
} = require("./factories/makeActivitiesController");

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
const activitiesController = makeActivitiesController(activitiesRepository);


//? Rotas de autenticação
// Rota de cadastro de usuário
router.post("/register", async (req, res) => {
  const response = await registerController.handle({ body: req.body });
  res.status(response.statusCode).json(response.body);
});

// rota para login
router.post("/login", async (req, res) => {
  const response = await loginController.handle({ body: req.body });
  res.status(response.statusCode).json(response.body);
});


//? Rotas para User
// Lista todos os usuários
router.get("/users", jwtGuard, async (req, res) => {
  const response = await userController.show();
  res.status(response.statusCode).json(response.body);
});

// Busca o usuário pelo ID
router.get("/user/:id", jwtGuard, async (req, res) => {
  const response = await userController.showById({ params: req.params });
  res.status(response.statusCode).json(response.body);
});

// Atualização do usuário
router.put("/update-user/:id", jwtGuard, async (req, res) => {
  const response = await userController.update({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Atualiza a senha do usuário
router.put("/update-user/:id/password", jwtGuard, async (req, res) => {
  const response = await userController.updatePassword({
    params: req.params,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Deleta um usuário
router.delete("/delete-user/:id", jwtGuard, async (req, res) => {
  const response = await userController.delete({
    params: req.params,
  });
  if (response.statusCode === 204) {
    return res.sendStatus(204); // evita enviar corpo com 204
  }
  res.status(response.statusCode).json(response.body);
});


//? Rotas para Tarefas
// Cria uma tarefa
router.post("/create-task", jwtGuard, async (req, res) => {
  const response = await taskController.create({
    body: req.body,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});

// Lista todas as tarefas
router.get("/tasks", jwtGuard, async (req, res) => {
  const resposnse = await taskController.show();
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Lista tarefas pelo ID
router.get("/tasks/:id", jwtGuard, async (req, res) => {
  const resposnse = await taskController.showByUserId({ params: req.params });
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Atualiza uma tarefa
router.put("/update-task/:id", jwtGuard, async (req, res) => {
  const response = await taskController.update({
    params: req.params,
    accountId: req.accountId,
    body: req.body,
  });
  res.status(response.statusCode).json(response.body);
});

// Deleta uma tarefa
router.delete("/delete-task/:id", jwtGuard, async (req, res) => {
  const response = await taskController.delete({
    params: req.params,
    accountId: req.accountId,
  });
  if (response.statusCode === 204) {
    return res.sendStatus(204); // evita enviar corpo com 204
  }
  res.status(response.statusCode).json(response.body);
});


//? Rotas para Veiculos
// Cria um veículo
router.post("/create-vehicle", jwtGuard, async (req, res) => {
  const response = await vehicleController.create({
    body: req.body,
    req,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});

// Lista todos os veiculos
router.get("/vehicles", jwtGuard, async (req, res) => {
  const resposnse = await vehicleController.show();
  res.status(resposnse.statusCode).json(resposnse.body);
});

router.get("/vehicle/:id", jwtGuard, async (req, res) => {
  const resposnse = await vehicleController.showByUserId({
    params: req.params,
  });
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Atualiza um veículo
router.put("/update-vehicle/:id", jwtGuard, async (req, res) => {
  const response = await vehicleController.update({
    params: req.params,
    body: req.body,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});

// Deleta um veículo
router.delete("/delete-vehicle/:id", jwtGuard, async (req, res) => {
  const response = await vehicleController.delete({ params: req.params, accountId: req.accountId, });
  res.status(response.statusCode).json(response.body);
});


//? Rotas para Manutenções
// Adicionar um registro de manutenção
router.post("/vehicle/:id/maintenance", jwtGuard, async (req, res) => {
  const response = await vehicleController.registerMaintenance({
    body: req.body,
    params: req.params,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});

// Listar manutenções de um veículo específico
router.get("/vehicle/:id/maintenance", jwtGuard, async (req, res) => {
  const response = await vehicleController.showMaintenanceByVehicleId({
    params: req.params,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});

// Listar manutenções pelo id o usuário
router.get("/vehicle/:userId/maintenance", jwtGuard, async (req, res) => {
  //! debug aqui
  // const { id } = req.params;

  const response = await vehicleController.showMaintenanceByUserId({
    params: req.params,
    accountId: req.accountId,
  });
  console.log(req.accountId);
  res.status(response.statusCode).json(response.body);
});

// Atualizar manutenção pelo id do Veículo
router.put("/maintenance/:id", jwtGuard, async (req, res) => {
  const response = await vehicleController.updateMaintenance({
    body: req.body,
    params: req.params,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});

// Deletar manutenção
router.delete("/maintenance/:id", jwtGuard, async (req, res) => {
  const response = await vehicleController.deleteMaintenance({
    params: req.params,
    accountId: req.accountId,
  });
  res.status(response.statusCode).json(response.body);
});


//? Rotas das Listas de Compra
// Criar Lista de compras
router.post("/create-list", jwtGuard, async (req, res) => {
  const response = await listController.create({ body: req.body, req });
  res.status(response.statusCode).json(response.body);
});

// Mostar todas as listas de compra
router.get("/lists", jwtGuard, async (req, res) => {
  const resposnse = await listController.show();
  res.status(resposnse.statusCode).json(resposnse.body);
});

// Atualiza uma lista
router.put("/update-list/:id", jwtGuard, async (req, res) => {
  const response = await listController.update({
    body: req.body,
    params: req.params,
    req,
  });
  res.status(response.statusCode).json(response.body);
});

// Delete uma lista
router.delete("/delete-list/:id", jwtGuard, async (req, res) => {
  const response = await listController.delete({
    params: req.params,
    req
  });
  res.status(response.statusCode).json(response.body);
});

// Adicionar item a lista de compras
router.post("/add-item-to-list", jwtGuard, async (req, res) => {
  const response = await listController.addItem({ body: req.body, req });
  res.status(response.statusCode).json(response.body);
});

// Listar itens de uma lista específica
router.get("/list-items/:listaId", jwtGuard, async (req, res) => {
  const response = await listController.getItemsByList({ params: req.params });
  res.status(response.statusCode).json(response.body);
});

// Atualiza lista para: Item comprado
router.patch("update-list-items/:listId", jwtGuard, async (req, res) => {
  const response = await listController.markItemAsPurchased({
    body: req.body,
    params: req.params,
    req,
  });
  res.status(response.statusCode).json(response.body);
});


//? Rota Atividades
// Listar as 05 últimas atividades
router.get("/activities", jwtGuard, async (req, res) => {
  const response = await activitiesController.show();
  res.status(response.statusCode).json(response.body);
});

// Listar as 05 últimas atividades do usuário autenticado
router.get("/activities/:userId", jwtGuard, async (req, res) => {
  const userId = req.params.userId;
  // Use o id do token, não do params, para garantir segurança
  const response = await activitiesController.showById(userId);
  res.status(response.statusCode).json(response.body);
});


//? Rotas para Familia
// Rota de criação de família
router.post("/create-family", jwtGuard, async (req, res) => {
  const response = await familyController.createFamily({
    body: req.body,
    user: req.user,
  });
  res.status(response.statusCode).json(response.body);
});

// Rota de convite para uma família
router.post("/family/:familyId/invite", jwtGuard, async (req, res) => {
  try {
    const response = await familyController.inviteMember({
      params: req.params,
      body: req.body,
      user: req.user,
    });
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});

// Rota para responder a um convite
router.patch("/family/invitations/respond", jwtGuard, async (req, res) => {
  const response = await familyController.respondInvitation({
    body: req.body,
    user: req.user,
  });
  res.status(response.statusCode).json(response.body);
});

// Rota para listar convites pendentes
router.get("/family/invitations", jwtGuard, async (req, res) => {
  const response = await familyController.getPendingInvitations({
    user: req.user,
  });
  res.status(response.statusCode).json(response.body);
});

// Rota para listar membros da família
router.get("/family/:familyId/members", jwtGuard, async (req, res) => {
  const response = await familyController.getFamilyMembers({
    params: req.params,
    user: req.user,
  });
  res.status(response.statusCode).json(response.body);
});

//! Rota para listar famílias do usuário
router.get("/families", jwtGuard, async (req, res) => {
  const response = await familyController.getUserFamilies({ user: req.user });
  res.status(response.statusCode).json(response.body);
});

module.exports = router;
