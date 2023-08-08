require('dotenv').config(); 
const express = require('express');
const app = express();
const product_routes = require('./routes/product_routes'); 
const connectDB = require('./connect/dbConnect'); 


const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
      res.send('Hello World');
})

app.use('/product', product_routes); 

const start = async () => {
      try {
            await connectDB(process.env.MONGODB_URI); 
            
            app.listen(PORT, () => {
                  console.log(`${PORT} Yes we have connected`);
            });
      } catch (err) {
            console.log(`Error occurred at`, err);
      }
}
start(); 