var express = require('express');
var router = express.Router();
var controllerFlower = require('../controller/FlowerController');

router.get('/', controllerFlower.flowerGetter);
router.get('/rose', controllerFlower.roseGetter);
router.get('/yasemin',controllerFlower.yaseminGetter);

module.exports = router;