// Evolution to the nodemon 
// Installing 
// ?    npm init 
// ?    npm install nodemon




const http = require('http')

todo = [        // Object Creation
    { id: 1, text: 'One' },
    { id: 2, text: 'two' },
    { id: 3, text: 'three' }
];



const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/text');      [Text type would be]
    // res.write('hello'); 

    // res.setHeader('X-powered-By', 'Node.js');    || We can send anything in content type

    // res.setHeader('Content-Type', 'text/text');  [Html type]
    // res.write('<h1>Hello</h1>');

    res.setHeader('Content-Type', 'application/json');  // [Json type]
    res.write(
        // [To render for the databases.] 
        JSON.stringify({        // Stringify is used to convert into string 
            success: true,
            data: todo
        })
    );

    req.on()

    // When only one thing we have to send then instead of write function we can send it into res.end() too. 
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})