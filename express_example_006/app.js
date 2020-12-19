var fs = require('fs');
var express = require('express');
var path = require('path');     //path module for folder dir. getting
var app = express();
app.use('/public', express.static(path.join(__dirname,'public'))); // use this for getting public files

var logoutController = function(request,response){                  // getting logout.html file
    response.sendFile(path.join(__dirname,'logout.html'));
}

var flowerController = function(request, response){
    response.sendFile(path.join(__dirname,'flower.html'));
}

var roseController = function(request, response){
    response.sendFile(path.join(__dirname,'rose.html'));
}

var yaseminController = function(request, response){
    response.sendFile(path.join(__dirname,'yasemin.html'));
}

app.get('/', function(request,response){                //express GET method
    fs.readFile('index.html', function(error,data){
        if(error){                                      // error find
            console.log('GET index.html ERROR');
            response.end('Something Went Wrong');
        }
        response.write(data);
        response.end('We Run');
    });
});

app.get('/login',function(request, response){
    response.sendFile(path.join(__dirname,'login.html'));      // using express readFile same work
});

app.get('/logout', logoutController);          //modular coding
app.get('/flower', flowerController);
app.get('/rose',roseController);
app.get('/yasemin',yaseminController); 

app.listen(7676);                   // now, we use app.listen different from http