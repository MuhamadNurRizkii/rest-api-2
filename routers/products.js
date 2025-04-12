const express = require("express");
const router = express.Router();
const controllers = require("../controllers/products");

// GET - ambil semua adat products
router.get("/products", controllers.getAllProducts);

// POST - tambah data baru ke products
router.post("/products", controllers.createNewProducts);

// PATCH - update salah satu data produk berdasarkan id
router.patch("/products/:id", controllers.updateProducts);

// DELETE - hapus data product berdasarkan id
router.delete("/products/:id", controllers.deleteProducst);

module.exports = router;
