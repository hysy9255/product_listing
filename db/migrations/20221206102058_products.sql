-- migrate:up
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  product_code VARCHAR(50) NOT NULL,
  thumbnail_url VARCHAR(1000) NOT NULL,
  example_image_url VARCHAR(1000) NOT NULL,
  description TEXT NOT NULL,
  rating FLOAT,
  stock INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

-- migrate:down
DROP TABLE products;