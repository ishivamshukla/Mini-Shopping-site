// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import controllers and middlewares
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const orderController = require('./controllers/orderController');
const authMiddleware = require('./middlewares/authMiddleware');

// Import utils
const db = require('./utils/db');
const constants = require('./utils/constants');

// Create express app
const app = express();

// Connect to database
db.connect();

// Set up middlewares
app.use(bodyParser.json());
app.use(cors());

// Set up routes
app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/products', productController.getAllProducts);
app.post('/products', authMiddleware.verifyToken, productController.addProduct);
app.get('/orders', authMiddleware.verifyToken, orderController.getAllOrders);
app.post('/orders', authMiddleware.verifyToken, orderController.addOrder);

// Set up error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(constants.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(constants.SERVER_PORT, () => {
  console.log(`Server running on port ${constants.SERVER_PORT}`);
});

