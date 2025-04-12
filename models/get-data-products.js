const db = require("../config/database");

// ambil semua data products
const getDataProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: `Error: ${err}`,
        data: null,
      });
    }

    res.json({
      message: "Data berhasil diambil",
      data: result,
    });
  });
};

module.exports = getDataProducts;
