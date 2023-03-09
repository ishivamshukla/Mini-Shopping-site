const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  // Return all products
});

// Get a single product
router.get('/:id', (req, res) => {
  // Return a specific product
});

// Add a new product
router.post('/', (req, res) => {
  // Add a new product
});

// Update a product
router.put('/:id', (req, res) => {
  // Update a specific product
});

// Delete a product
router.delete('/:id', (req, res) => {
  // Delete a specific product
});

module.exports = router;
