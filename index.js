let http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World!')
}).listen(4000);

console.log('Server is running at localhost:4000');