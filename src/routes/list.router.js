const express = require("express");
const listController = require("../controllers/list.controller");
const listRouter = express.Router();

listRouter.get("/category", listController.getProduct);

module.exports = { listRouter };
