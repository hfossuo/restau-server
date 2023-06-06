const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/profile', userController.updateProfile);  // this route should be protected

module.exports = router;
