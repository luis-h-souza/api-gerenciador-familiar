const { ShoppingListController } = require("../application/controllers/ShoppingListController");
const { makeShoppingListRepository } = require("./makeShoppingListRepository");

function makeShoppingListController() {
  const listController = makeShoppingListRepository()

  return new ShoppingListController(listController)
}

module.exports = { makeShoppingListController };
