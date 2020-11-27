var express = require('express');
var router = express.Router();

var ctrlMain = require("../controller/main");
var ctrlList = require("../controller/list");
var ctrlAbout = require("../controller/about");
var ctrlCoffee = require("../controller/coffee");


/* GET home page. */
router.get('/', ctrlMain.index);

//router.get('/list', ctrlList.list);
router.get('/about', ctrlAbout.about);
router.get('/display', ctrlList.display);

/* GET home page. */
router.get('/list', ctrlCoffee.homelist); //Display at list page
router.get('/coffee/:coffeeid', ctrlCoffee.coffeeInfo);

router.route('/new')
    .get(ctrlCoffee.addNewCoffee)
    .post(ctrlCoffee.doAddNewCoffee);


module.exports = router;
