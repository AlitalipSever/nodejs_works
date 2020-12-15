var http = require('http');     // call http module
var fs = require('fs');

var homeController = function (request, response) {         //calling a page
    fs.readFile('index.html', function (error, data) {
        response.write(data);

        response.end("I kill youuuuu king");
    })
}

var loginController = function(request,response){           //calling a page
    fs.readFile('login.html', function (error, data) {
        response.write(data);

    })
}

var server = http.createServer(
    function (request, response) {
        if (request.url == '/') {
            homeController(request,response);
        }
        if (request.url == '/login') {
            loginController(request,response);
        }
    });

server.listen(7676);