let http = require("http");
let fs = require('fs');
let url = require("url");
let path = require('path');

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif'
};

http.createServer(function onRequest(request, response) {
    let postData = "";
    let pathname = url.parse(request.url).path;
	if(pathname == '/')
		pathname = '/index.html';
    let extname = path.extname(pathname);
    let mimeType = mimeTypes[extname];
	//чтобы убрать начальный слэш
	pathname = pathname.substring(1, pathname.length);
	
	if( (extname == ".gif") || (extname==".jpg") ) {
		let img = fs.readFileSync('./' + pathname);
		response.writeHead(200, {'Content-Type': mimeType});
		response.end(img, 'binary');
	} else if (extname == ".json") {
		fs.readFile(pathname, 'utf8', function (err, data){
			if (err) {
				console.log('Could not find or open file '+ 
				pathname + ' for reading\n');
			} else {
				setTimeout(function(){
					response.writeHead(200, {'Content-Type': mimeType});
					response.end(data);
				}, 5000);
			}
		});
	} else {
		fs.readFile(pathname, 'utf8', function (err, data){
			if (err) {
				console.log('Could not find or open file '+ 
				pathname + ' for reading\n');
			} else {
				response.writeHead(200, {'Content-Type': mimeType});
				response.end(data);
			}
		});
	}
}).listen(8080);