const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, GitHub! This is a CI/CD demo.\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://<span class="math-inline">\{hostname\}\:</span>{port}/`);
});
//This is a simple web server that responds with "Hello, World! This is a CI/CD demo." when accessed.