const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Registration
exports.registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            ...req.body,
            password: hashedPassword,
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Login
exports.loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json({ message: 'Invalid username or password' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).json({ message: 'Invalid username or password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update profile
exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
