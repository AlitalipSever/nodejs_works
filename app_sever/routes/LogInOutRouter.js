var express = require('express');
var router = express.Router();
var controllerLogInOut = require('../controller/LogInOutController');

router.get('/', controllerLogInOut.user);
router.get('/login', controllerLogInOut.loginGetter);
router.get('/logout', controllerLogInOut.logoutGetter);  

module.exports = router;