const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

router.post('/create-payment-intent', paymentController.createPaymentIntent);

// You should define routes for other payment related operations here

module.exports = router;
