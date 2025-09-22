const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from dummy Node.js app');
});

server.listen(80, '0.0.0.0', () => {
  console.log('Server running on port 80');
});

