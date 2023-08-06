
// By Using Mongo Connection Only 

const uri = `mongodb+srv://project0:project0@cluster0.2yc3u8t.mongodb.net/`
const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect().then(()=>{
      console.log('Con')
}).catch((err) =>{
      console.log(err);
}); 
