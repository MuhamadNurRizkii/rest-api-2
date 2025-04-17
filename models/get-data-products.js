const { connectDB } = require("../config/database");
const { ObjectId } = require("mongodb");

// ambil semua data products
const getDataProducts = async (req, res) => {
  const collection = await connectDB();
  const products = await collection.find().toArray();

  res.json({
    message: "Data berhasil diambil",
    data: products,
  });
};

module.exports = getDataProducts;
