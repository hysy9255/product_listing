require("dotenv").config();
const csv = require("csvtojson");

const { appDataSource } = require("./src/models/data-source");

const csvFilePathForProduct = "./data_folder/wekea_product_data.csv";

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    csv()
      .fromFile(csvFilePathForProduct)
      .then((jsonObj) => {
        for (let i = 0; i < jsonObj.length; i++) {
          appDataSource.query(
            `
          INSERT INTO products (
            name, price, productCode, thumbnailUrl, exampleImageUrl, description, rating, stock, categoryId
          ) VALUES (?,?,?,?,?,?,?,?,?);
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
            ]
          );
        }
      });
  })
  .catch(() => {
    console.log("Error: Data Source initialization has been failed");
  });
