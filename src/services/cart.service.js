const cartDao = require("../models/cart.dao");

const putItem = async (userId, productId) => {
  const checkCart = await cartDao.checkItemInTheCart(userId, productId);
  if (checkCart[0] === undefined) {
    console.log("New item!");
    await cartDao.putItemIntoCart(userId, productId);
  } else {
    console.log("Item exits. Adding one more!");
    await cartDao.addOneMore(userId, productId);
  }
};

const editItem = async (userId, productId, quantity) => {
  await cartDao.editNumberOfItem(userId, productId, quantity);
};

const deleteItem = async (userId, productId) => {
  return await cartDao.deleteItemFromTheCart(userId, productId);
};

const getItem = async (userId) => {
  return await cartDao.getAllItemSelectedByTheUser(userId);
};

module.exports = { putItem, editItem, deleteItem, getItem };
