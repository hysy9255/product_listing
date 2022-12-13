-- migrate:up
CREATE TABLE product_images (
  id INT NOT NULL AUTO_INCREMENT,
  imageUrl VARCHAR(1000) NOT NULL,
  productId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (productId) REFERENCES products(id)
);

-- migrate:down
DROP TABLE product_images;