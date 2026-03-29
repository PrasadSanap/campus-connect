const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/campusconnect')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
const eventRoutes = require('./routes/events');
app.use('/api/events', eventRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
