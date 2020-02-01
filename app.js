const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end("<h1>Hello, Tristan!</h1>");
}).listen(process.env.PORT);

console.log('App is running...');
