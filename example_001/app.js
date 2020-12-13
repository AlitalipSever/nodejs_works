var http = require('http');     // call http module
var fs = require('fs');

var server = http.createServer(
    function (request, response) {
        if (request.url == '/') {
            fs.readFile('index.html', function (error, data) {
                response.write(data);

                response.end("I kill youuuuu king");
            })
        }
        if (request.url == '/login') {
            fs.readFile('login.html', function (error, data) {
                response.write(data);

            })
        }



    });

server.listen(7676);