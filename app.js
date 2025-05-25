require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const salesRoutes = require('./src/routes/sales.routes');
const inventoryRoutes = require('./src/routes/inventory.routes');
const errorHandler = require('./src/middlewares/error.middleware');

const app = express();
connectDB();
app.use(express.json());

app.use('/api/sales', salesRoutes);
app.use('/api/inventory', inventoryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
