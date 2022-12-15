const { appDataSource } = require("./data-source");

const putItemIntoCart = async (userId, productId) => {
  await appDataSource.manager.query(
    `
    INSERT INTO carts (
      userId,
      productId,
      quantity
    ) VALUES (?,?,?);
    `,
    [userId, productId, 1]
  );
};

const checkItemInTheCart = async (userId, productId) => {
  const itemSelectedByUser = await appDataSource.manager.query(
    `
    SELECT * FROM carts
    WHERE userId = ? AND productId = ?;
    `,
    [userId, productId]
  );
  return itemSelectedByUser;
};

const addOneMore = async (userId, productId) => {
  await appDataSource.manager.query(
    `
    UPDATE carts
    SET quantity = quantity + 1 
    WHERE userId = ? AND productId = ?;
    `,
    [userId, productId]
  );
};

const editNumberOfItem = async (userId, productId, quantity) => {
  await appDataSource.manager.query(
    `
    UPDATE carts 
    SET quantity = ? 
    WHERE userId = ? AND productId = ?;
    `,
    [quantity, userId, productId]
  );
};

const deleteItemFromTheCart = async (userId, productId) => {
  await appDataSource.manager.query(
    `
    DELETE
    FROM carts
    WHERE userId = ? AND productId = ?;
    `,
    [userId, productId]
  );
};

const getAllItemSelectedByTheUser = async (userId) => {
  const products = await appDataSource.manager.query(
    `
    SELECT p.name, p.thumbnailUrl, p.price, p.productCode
    FROM products AS p
    INNER JOIN carts AS c
    ON p.id = c.productId
    WHERE c.userId = ?; 
    `,
    [userId]
  );
  return products;
};

module.exports = {
  putItemIntoCart,
  checkItemInTheCart,
  addOneMore,
  editNumberOfItem,
  deleteItemFromTheCart,
  getAllItemSelectedByTheUser,
};

// const editItemFromCart = async (userId, productId) => {
//   await appDataSource.manager.query(
//     `

//     `
//   )
// }

// const deleteItemFromCart

// app.post("/shoppingCart", loginRequired, async (req, res) => {
//   // const {} = req.body;
//   const payload = res.locals.payload;
//   const userId = payload.id;
//   const productId = req.body.productId;

//   await appDataSource.query(
// `
// INSERT INTO carts (
//   user_id,
//   product_id,
//   quantity
// ) VALUES (?,?,?);
// `,
// [userId, productId, 1]
//   );

//   res.status(201).json({ message: "It is working!" });
// });
