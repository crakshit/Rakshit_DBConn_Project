const express = require('express');
const router = express.Router();
const ctrlCoffee = require('../controllers/coffee');


router
 .route('/coffee')
 .get(ctrlCoffee.getCoffees)
 .post(ctrlCoffee.createCoffee);

 router
 .route('/coffee/:coffeeid')
 .get(ctrlCoffee.getSingleCoffee)
 .put(ctrlCoffee.updateCoffee)
 .delete(ctrlCoffee.deleteCoffee);

 module.exports = router;