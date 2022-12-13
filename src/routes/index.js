const express = require("express");
const { authRouter } = require("./auth.router");
const { listRouter } = require("./list.router");

const routes = express.Router();
routes.use("/auth", authRouter);
routes.use("/list", listRouter);

module.exports = { routes };
