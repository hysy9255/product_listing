const { appDataSource } = require("./data-source");

const getProductByCategory = async (category) => {
  const product = await appDataSource.manager.query(
    `
    SELECT 
      name, price, productCode
    FROM products AS p
    WHERE p.categoryId = ?
  `,
    [category]
  );
  console.log(product);
  return product;
};

module.exports = { getProductByCategory };
