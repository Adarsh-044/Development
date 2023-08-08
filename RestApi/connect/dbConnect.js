const mongoose = require('mongoose');

const connectDB = async (MONGODB_URI) => {
      try {
            // const uri = `mongodb+srv://product:product@cluster0.zmsp1fd.mongodb.net/?retryWrites=true&w=majority`;
            mongoose.connect(MONGODB_URI, {
                  useNewUrlParser: true, 
                  useUnifiedTopology : true, 
            }).then(() => {
                  console.log('Hello, I am connected');
            });
      } catch (err) {
            console.log(`Error while connecting with the mongo connection`, err);
      }
}
module.exports = connectDB; 