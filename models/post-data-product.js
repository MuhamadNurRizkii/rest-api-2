const db = require("../config/database");

const createDataProducts = (req, res) => {
  const { nama_product, harga, stok, kategori } = req.body;
  const sql = `INSERT INTO products (nama_product, harga, stok, kategori) VALUES
                ('${nama_product}', ${harga}, ${stok}, '${kategori}')`;

  db.query(sql, (err, result) => {
    try {
      res.status(201).json({
        message: "Data baru berhasil ditambahkan",
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

module.exports = createDataProducts;
