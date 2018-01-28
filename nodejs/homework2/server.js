let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');

let mimeTypes = {
    '. js':'text/javascript',
    '.gif':'image/gif',
    '.css':'text/css'
    };

http.createServer(function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        pathname = '/index.html';
    }

    pathname = pathname.substring(1, pathname.length);

    console.log('Получен запрос ' + pathname);
    fs.readFile(pathname, 'utf-8', function (err, data) {
        if (err) {
            console.log('Error')
        } else {
            res.writeHead(200, {'Content-Type' : mimeTypes[path.extname(pathname)]});
            res.end(data)
        }
    })

}).listen(8080);