//Setup NPM ,Install express continue...

const express = require('express'); // Creating Server.
const app = express();
const port = 3000;

app.get('/', (req, res) => {    // route to handle '/' endpoint
    res.send('Hello World!');
})

app.listen(port, () => {    // Start server. 
    console.log('We have been connected')
}); 