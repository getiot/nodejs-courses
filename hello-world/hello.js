const http = require('http');
const port = 3000;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello, World</h1>');
}).listen(port);

console.log(`Server running at http://localhost:${port}/`);