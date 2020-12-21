var path = require('path');     //path module for folder dir. getting

module.exports.loginGetter = function(request,response){
    response.sendFile(path.join(__dirname,'../../public/html/loginout/login.html'));      // using express readFile same work
}

module.exports.logoutGetter = function(request,response){
    response.sendFile(path.join(__dirname,'../../public/html/loginout/logout.html'));
}

module.exports.user = function(request,response){
    response.sendFile(path.join(__dirname,'../../index.html'));
}
