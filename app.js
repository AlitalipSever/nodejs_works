var fs = require('fs');
var express = require('express');
var path = require('path');     //path module for folder dir. getting
var app = express();
app.use('/public', express.static(path.join(__dirname,'public'))); // use this for getting public files

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
    fs.readFile('login.html',function(error,data){
        response.write(data);
    });
});

app.get('/logout', function(request,response){
    fs.readFile('logout.html',function(error, data){
        response.write(data);
    })
})

app.listen(7676);                   // now, we use app.listen different from pure http