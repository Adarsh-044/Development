//Used to convert the req.body data coming from json to object format 
//Also it convert the res.send(obj) from object to json
app.use(express.json());
// It generally used when we are using postman and there in body section we select to raw and json and then pass the object in json format. 


/*
!HTTP Request Methods : 
 
GET         Retrieve Resource  [returns a response containing the information you requested.]
POST        Submit Resource    [to create a new resource.]
PUT/ PATCH  Update Resource
DELETE      Delete Resource


? app.METHOD(PATH, HANDLER)
where :
1. app is instance of express
2. Method is HTTP request methods (get, post...)
3. Path: path on server
4. HANDLER is the function executed when the route is matched.


Respond with Hello World!  on homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
})

Respond to POST request on the root route (/)
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

Respond to a PUT request to the /user route:
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

*/