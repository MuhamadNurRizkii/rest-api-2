const db = require("../config/database");

const updateDataProduct = (req, res) => {
  const id = req.params.id;
  const { nama_product, harga, stok, kategori } = req.body;
  const sql = `UPDATE products SET 
                nama_product='${nama_product}', harga=${harga}, stok=${stok}, kategori='${kategori}' WHERE id=${parseInt(
    id
  )}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    try {
      res.status(201).json({
        message: "Data berhasil diupdate",
        data: {
          nama_product,
          harga,
          stok,
          kategori,
        },
      });
    } catch (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
      });
    }
  });
};

module.exports = updateDataProduct;
