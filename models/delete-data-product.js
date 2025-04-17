const { connectDB } = require("../config/database");
const { ObjectId } = require("mongodb");

const deleteDataProduct = async (req, res) => {
  const collection = await connectDB();
  const id = req.params.id;

  if (!id) {
    return res.status(404).json({
      message: "Data not found",
    });
  }

  await collection.deleteOne({
    _id: new ObjectId(id),
  });

  res.json({
    message: "Data berhasil dihapus!",
  });
};

module.exports = deleteDataProduct;
