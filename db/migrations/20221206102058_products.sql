-- migrate:up
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  productCode VARCHAR(50) NOT NULL,
  thumbnailUrl VARCHAR(1000) NOT NULL,
  exampleImageUrl VARCHAR(1000) NOT NULL,
  description TEXT NOT NULL,
  rating FLOAT,
  stock INT NOT NULL,
  categoryId INT NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  FOREIGN KEY(categoryId) REFERENCES categories(id)
);

-- migrate:down
DROP TABLE products;