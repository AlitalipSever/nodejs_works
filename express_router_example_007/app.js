var fs = require('fs');
var express = require('express');
var path = require('path');     //path module for folder dir. getting
var app = express();

var flowerRouter = require('./app_sever/routes/FlowerRouter');
var logInOutRouter = require('./app_sever/routes/LogInOutRouter');

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

app.use('/user', logInOutRouter);        //modular coding
app.use('/flower', flowerRouter);

app.listen(7676);                   // now, we use app.listen different from http