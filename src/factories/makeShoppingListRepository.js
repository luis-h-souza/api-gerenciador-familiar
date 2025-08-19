const { ShoppingListRepository } = require("../application/repositories/ShoppingListRepository");

function makeShoppingListRepository() {
  return new ShoppingListRepository();
}

module.exports = { makeShoppingListRepository }
