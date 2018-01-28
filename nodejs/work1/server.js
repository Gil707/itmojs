const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type' : 'text/plain'});
   res.end('Hello world');
   // console.log(res);
   console.log(req);
}).listen(port, hostname, function () {
    console.log('Server start')
});
