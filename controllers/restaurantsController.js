const Restaurant = require('../models/restaurantModel');

// Create
exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Read (all)
exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Read (one)
exports.getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json(restaurant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update
exports.updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json(restaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete
exports.deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json({ message: 'Restaurant deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
