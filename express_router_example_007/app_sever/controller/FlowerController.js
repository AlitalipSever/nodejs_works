var path = require('path');     //path module for folder dir. getting

module.exports.flowerGetter = function(request, response){
    response.sendFile(path.join(__dirname,'../../public/html/flower/flower.html'));
}

module.exports.roseGetter = function(request, response){
    response.sendFile(path.join(__dirname,'../../public/html/flower/rose.html'));
}

module.exports.yaseminGetter = function(request, response){
    response.sendFile(path.join(__dirname,'../../public/html/flower/yasemin.html'));
}