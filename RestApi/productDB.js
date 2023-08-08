require("dotenv").config();
const dbConnect = require('./connect/dbConnect');
const productSchema = require('./model/product');
const productJson = require('./products.json');
const start = async () => {
      try {
            await dbConnect(process.env.MONGODB_URI);
            await productSchema.create(productJson);
            console.log('success');
      } catch (err) {
            console.log(err);
      }
};

start(); 