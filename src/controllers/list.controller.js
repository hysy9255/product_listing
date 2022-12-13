const listService = require("../services/list.service");

const getProduct = async (req, res) => {
  try {
    const { category } = req.body;
    console.log(typeof category);
    const product = await listService.list(category);
    res.status(200).json(product);
  } catch (err) {
    res.status(err.statusCode || 400).json({ message: err.message });
  }
};

module.exports = { getProduct };
