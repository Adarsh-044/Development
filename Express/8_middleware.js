/*
!Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

* functions
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.

app.get('/', function(req, res, next)){ // function denotes middleware
    next(); 
}

? https://expressjs.com/en/guide/using-middleware.html  // Documentations


*/

const express = require('express')
const app = express();

function logOriginalUrl(req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

function logMethod(req, res, next) {
    console.log('Request Type:', req.method)
    next()
}

const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
    res.send(req.params)
})
app.listen(3000);



/*
    i/p => localhost:3000/user/12

    o/p in postman  : {"id": "12"}

    o/p in console  : 
        Request Url: /user/{id's}
        Request Type: GET
*/