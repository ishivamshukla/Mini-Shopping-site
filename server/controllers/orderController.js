const nodemailer = require('nodemailer');

// Mock data for demonstration purposes
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

// Mock data for demonstration purposes
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password123' },
];

// Mock data for demonstration purposes
const orders = [];

/**
 * Create a new order with items and send an email to the logged in customer.
 *
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 */
const createOrder = (req, res) => {
  const { cartItems } = req.body;

  // Find the logged in user
  const loggedInUser = users.find(user => user.id === req.session.userId);

  if (!loggedInUser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products.find(p => p.id === cartItem.productId);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  // Create the new order
  const newOrder = {
    id: orders.length + 1,
    userId: loggedInUser.id,
    items: cartItems,
    totalPrice,
    createdAt: new Date(),
  };

  // Add the new order to the list of orders
  orders.push(newOrder);

  // Clear the cart
  req.session.cartItems = [];

  // Send an email to the logged in customer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: loggedInUser.email,
    subject: 'Order Confirmation',
    text: `Dear ${loggedInUser.name},\n\nYour order has been placed successfully. Here are the details:\n\nItems:\n${cartItems.map(item => `- ${item.quantity} x ${products.find(p => p.id === item.productId).name}`).join('\n')}\n\nTotal Price: $${totalPrice}\n\nThank you for your purchase!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

  // Send a response indicating the order was created successfully
  res.json({ message: 'Order created successfully' });
};

module.exports = { createOrder };
