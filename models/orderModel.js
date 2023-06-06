const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    items: [{
        dish: String,
        quantity: { type: Number, default: 1 },
        price: Number
    }],
    total: { type: Number, required: true },
    // Include any other order properties you need
});

module.exports = mongoose.model('Order', orderSchema);
