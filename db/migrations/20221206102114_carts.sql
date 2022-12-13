-- migrate:up
CREATE TABLE carts (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  productId INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (productId) REFERENCES products(id)
);

-- migrate:down
DROP TABLE carts;