var http = require('http');

const PORT = process.env.PORT;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('');
}).listen(PORT);
console.log('Server running at http://127.0.0.1:' + PORT + '/');
