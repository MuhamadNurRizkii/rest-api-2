const { connectDB } = require("../config/database");
const { ObjectId } = require("mongodb");

const updateDataProduct = async (req, res) => {
  const collection = await connectDB();
  const id = req.params.id;
  const { nama_product, harga, stok, kategori } = req.body;

  await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        nama_product,
        harga,
        stok,
        kategori,
      },
    }
  );

  res.status(201).json({
    message: "Data berhasil diupdate!",
    data: {
      nama_product,
      harga,
      stok,
      kategori,
    },
  });
};

module.exports = updateDataProduct;
