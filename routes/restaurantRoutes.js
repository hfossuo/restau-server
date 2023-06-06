const express = require('express');
const restaurantsController = require('../controllers/restaurantsController');
const router = express.Router();

router.post('/', restaurantsController.createRestaurant);
router.get('/', restaurantsController.getRestaurants);
router.get('/:id', restaurantsController.getRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);
router.delete('/:id', restaurantsController.deleteRestaurant);

module.exports = router;
