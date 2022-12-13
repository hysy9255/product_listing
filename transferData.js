require("dotenv").config();
const csv = require("csvtojson");

const { appDataSource } = require("./src/models/data-source");

const csvFilePathForCategory = "./data_folder/wekea_category_data.csv";
const csvFilePathForProduct = "./data_folder/wekea_product_data.csv";

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    console.log("Transferring Category data!");
    csv()
      .fromFile(csvFilePathForCategory)
      .then((jsonObj) => {
        for (let i = 0; i < jsonObj.length; i++) {
          appDataSource.query(
            `
              INSERT INTO categories (
                name
              ) VALUES (?);
            `,
            [jsonObj[i].name]
          );
        }
      });
  })
  .then(() => {
    console.log("Transferring Product data!");
    csv()
      .fromFile(csvFilePathForProduct)
      .then((jsonObj) => {
        for (let i = 0; i < jsonObj.length; i++) {
          appDataSource.query(
            `
          INSERT INTO products (
            name, price, productCode, thumbnailUrl, exampleImageUrl, description, rating, stock, categoryId, createdAt
          ) VALUES (?,?,?,?,?,?,?,?,?,?);
        `,
            [
              jsonObj[i].name,
              jsonObj[i].price,
              jsonObj[i].productCode,
              jsonObj[i].thumbnailUrl,
              jsonObj[i].exampleImageUrl,
              jsonObj[i].description,
              jsonObj[i].rating,
              jsonObj[i].stock,
              jsonObj[i].categoryId,
              jsonObj[i].createdAt,
            ]
          );
        }
      });
  })
  .catch(() => {
    console.log("Error: Data Source initialization has been failed");
  });
