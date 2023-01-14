// Formal intro with the Node.js


const http = require('http')

// Server has method createServer
const server = http.createServer((req, res) => {
    const { headers, url, method } = req; // Breaking into parts to use 
    console.log(req);   // We have much outputs, depending upon use we fetch out the data. 
    console.log(headers, url);
    console.log(req.method);
    res.end();
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})