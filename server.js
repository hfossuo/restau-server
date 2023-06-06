const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middlewares
app.use(cors({origin:
        [
            "http://127.0.0.1:3000",
            "https://restau-finder.onrender.com"
        ]}));
app.use(express.json());

// Routes
app.use('/restaurants', restaurantRoutes);
app.use('/users', userRoutes);
app.use('/payments', paymentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
