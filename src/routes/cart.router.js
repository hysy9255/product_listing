const express = require("express");
const cartController = require("../controllers/cart.controller");
const loginRequired = require("../utils/loginRequired");
const cartRouter = express.Router();

cartRouter.post("/putItem", loginRequired.verifyUser, cartController.putItem);

cartRouter.patch(
  "/editItem",
  loginRequired.verifyUser,
  cartController.editItem
);

cartRouter.delete(
  "/deleteItem",
  loginRequired.verifyUser,
  cartController.deleteItem
);

cartRouter.get("/getItem", loginRequired.verifyUser, cartController.getItem);

module.exports = { cartRouter };
