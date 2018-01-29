let http = require("http");
let fs = require('fs');
let url = require("url");
let path = require('path');
let request = require('request');
let cheerio = require('cheerio');

let mimeTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.json' : 'application/json'
};

function getCourses() {

    let parsedurl = 'https://btc.guru/#';

    request(parsedurl, function (error, response, html) {
        if (!error && response.statusCode === 200) {
            let $ = cheerio.load(html);
            let data = {};
            // let html = $.html();
            let usdbtc = $('ul.btc_currency li').each(function(i, elm) {
                itm = $(this).text().replace(/\s{1,}/g, '');
                data[itm.substring(0,3)] = itm.substring(3, itm.length);
            });
            fs.truncate('courses.json', 0, function() {
                fs.writeFile('courses.json', JSON.stringify(data), function (err) {
                    if (err) {
                        return console.log("Error writing file: " + err);
                    }
                });
            });
        }
    });
}

getCourses();

setInterval(function () {
    getCourses();
}, 2000);


http.createServer(function onRequest(request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

    let postData = "";
    let pathname = url.parse(request.url).path;
    if (pathname === '/')
        pathname = '/index.html';
    let extname = path.extname(pathname);
    let mimeType = mimeTypes[extname];
    //чтобы убрать начальный слэш
    pathname = pathname.substring(1, pathname.length);

    if ((extname === ".gif") || (extname === ".jpg") || (extname === ".png")) {
        let img = fs.readFileSync('./' + pathname);
        response.writeHead(200, {'Content-Type': mimeType});
        response.end(img, 'binary');
    } else {
        fs.readFile(pathname, 'utf8', function (err, data) {
            if (err) {
                console.log('Could not find or open file ' +
                    pathname + ' for reading\r\n');
            } else {
                response.writeHead(200, {'Content-Type': mimeType});
                response.end(data);
            }
        });
    }
}).listen(8000);