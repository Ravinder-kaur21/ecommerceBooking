const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Create Product
router.post("/products", protect, createProduct);

// Get All Products
router.get("/products", getProducts);

// Update Product
router.put("/products/:id", protect, updateProduct);

// Delete Product
router.delete("/products/:id", protect, deleteProduct);

module.exports = router;