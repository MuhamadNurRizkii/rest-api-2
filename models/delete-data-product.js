const db = require("../config/database");

const deleteDataProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `DELETE FROM products WHERE id= ${id}`;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: `Error: ${er}`,
      });
    }

    res.json({
      message: "Data berhasil dihapus!!",
    });
  });
};

module.exports = deleteDataProduct;
