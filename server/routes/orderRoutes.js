const express = require('express');
const router = express.Router();

// Get all orders
router.get('/', (req, res) => {
  // Return all orders
});

// Get a single order
router.get('/:id', (req, res) => {
  // Return a specific order
});

// Add a new order
router.post('/', (req, res) => {
  // Add a new order
});

// Update an order
router.put('/:id', (req, res) => {
  // Update a specific order
});

// Delete an order
router.delete('/:id', (req, res) => {
  // Delete a specific order
});

module.exports = router;
