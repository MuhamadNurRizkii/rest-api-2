const getDataProducts = require("../models/get-data-products");
const createDataProducts = require("../models/post-data-product");
const updateDataProduct = require("../models/patch-data-product");
const deleteDataProduct = require("../models/delete-data-product");

// get products
const getAllProducts = getDataProducts;

// post products
const createNewProducts = createDataProducts;

// patch products
const updateProducts = updateDataProduct;

// delete products
const deleteProducst = deleteDataProduct;

module.exports = {
  getAllProducts,
  createNewProducts,
  updateProducts,
  deleteProducst,
};
