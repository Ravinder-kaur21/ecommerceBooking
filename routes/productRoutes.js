const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
   createProduct,
   getProducts,
   updateProduct,
   deleteProduct
} = require("../controllers/productController");

router.post("/products", protect, createProduct);

router.get("/products", getProducts);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;