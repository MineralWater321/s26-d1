const http = require("http");

const port = 4000;

const server = http.createServer((request, response) => {
	if(request.url == '/greeting'){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello Again');
	}
	else if(request.url == '/homepage'){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('This is the Homepage');
	} else {
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end('Page not available');
	}
});

server.listen(port);

console.log(`Server now accessible at localhost:${port}`);