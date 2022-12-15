const express = require("express");
const { authRouter } = require("./auth.router");
// const { listRouter } = require("./list.router");
const { cartRouter } = require("./cart.router");

const routes = express.Router();
routes.use("/auth", authRouter);
// routes.use("/list", listRouter);
routes.use("/cart", cartRouter);

module.exports = { routes };
