/*
!Routes
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).


!Route Paths
Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.


Query strings are not part of the route path.

app.get('/')                route path will match requests to the root route, /.
app.get('/about')           match requests to /about
app.get('/random.text')     to /random.text.
app.get('/ab?cd')           match acd, abcd.
app.get('/ab+cd')           match abcd, abbcd, abbbcd, and so on.
app.get('/ab*cd')           match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab(cd)?e')        match abcde, abe, 
app.get(/a/)                route path will match anything with an “a” in it.
app.get(/.*fly$/)           match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.


!Route parameters   (req.params)
=> Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
=> req.params  object, with the name of the route parameter specified in the path as their respective keys.
=> The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})


* hyphen (-) and the dot (.) are interpreted literally

Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }

Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}


! Request query    (req.query)
*The req.query property is an object containing the property for each query string parameter in the route.

query-using option selection in frontend
inURL->xyz.com?key=value&key=value  // "?" is used to have multiple values. 
req.query to get them in backend

app.get('/user',(req,res)=>{    // localhost:3000/user?name=adarsh&age = 23
    console.log(req.query);
    console.log(req.query.name)      // o/p = {"name":"adarsh"}
    res.send({query:req.query});     // o/p = {"query":{" name":" adarsh "," age ":" 32"}}
})

Express specific simple ways to fetch
1. query strings(after ?) such as https://...?user=abc&id=123

    app.get('/', function(req, res){
      res.send('id: ' + req.query.id);
    });

2. query params such as https://.../get/users/:id

    app.get('/get/users/:id', function(req, res){
      res.send('id: ' + req.params.id);
    });



! Route handlers
callback functions that behave like middleware to handle a request.

app.get('/', (req, res, next)=>{
    app.send('Hello');
    next(); 
})



!Response methods
response object (res) sends a response to the client, and terminate the request-response cycle

 Method	                Description
res.end()	          End the response process.
res.json()	        Send a JSON response.   
res.redirect()	    Redirect a request.
res.render()	      Render a view template.
res.send()	        Send a response of various types.
res.sendFile()	    Send a file as an octet stream.
res.sendStatus()	  Set the response status code and send its string representation as the response body.


! app.route()    where app = express();
*chainable route handlers for a route path by using app.route()

Example 
app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

! express.Router
express.Router class to create modular, mountable route handlers

? app.all() to handle all HTTP methods 
? app.use() to specify middleware as the callback function

https://coursework.vschool.io/express-router/   // To study 
.
*/

