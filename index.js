var http = require('http');

const PORT = process.env.PORT;

http.createServer(function (req, res) {
  res.writeHead(200, {'X-Powered-By': 'noazark', 'Content-Type': 'text/plain'});

  res.write('Separation of good and evil.\n')

  res.end('Hello good sir.');
}).listen(PORT);
console.log('Server running at http://127.0.0.1:' + PORT + '/');
