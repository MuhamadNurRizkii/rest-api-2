const { connectDB } = require("../config/database");
const { ObjectId } = require("mongodb");

const createDataProducts = async (req, res) => {
  const collection = await connectDB();
  const { nama_product, harga, stok, kategori } = req.body;

  if (!nama_product || !harga || !stok || !kategori) {
    return res.status(400).json({
      message: "Semua field harus diisi!!",
    });
  }

  await collection.insertOne({
    nama_product,
    harga,
    stok,
    kategori,
  });

  res.status(201).json({
    message: "Data product berhasil ditambahkan!",
    data: {
      nama_product,
      harga,
      stok,
      kategori,
    },
  });
};

module.exports = createDataProducts;
