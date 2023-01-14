/*

    Mongoose
    ! npm install mongoose (notation to install)

    *It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

*/


const dB = "mongodb+srv://adarsh:123@cluster1.cjxjjts.mongodb.net/?retryWrites=true&w=majority";
// Get it from mongo atlas present in mongoDb 

const mongoose = require("mongoose");
const PORT = 3000;


mongoose.connect(dB, {  // Establishing the connections
    useNewUrlParser: true,  // to allow users to fall back to the old parser if they find a bug in the new parser
    useUnifiedTopology: true,   //  to check on the status of the connection
}).then(() => {
    console.log('establish');
}).catch((err) => {
    console.log(err);
})

