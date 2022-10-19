const http = require('http');

const hostname = 'localhost';
const port = 5000;

const fs = require('fs');

fs.readFile('home.html', (err, html)=>{
  if(err){throw(err)}

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('home.html');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})