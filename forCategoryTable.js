require("dotenv").config();
const csv = require("csvtojson");

const { appDataSource } = require("./src/models/data-source");

const csvFilePathForCategory = "./data_folder/wekea_category_data.csv";

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
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
  .catch(() => {
    console.log("Error: Data Source initialization has been failed");
  });
