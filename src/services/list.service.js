const productDao = require("../models/product.dao");

const list = async (category) => {
  return await productDao.getProductByCategory(category);
};

module.exports = { list };
