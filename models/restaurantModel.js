const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    cuisine: { type: String, required: true },
    // Include any other restaurant properties you need
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
