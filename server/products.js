const express = require("express");
const db = require("./db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category_id } = req.query;

    if (category_id) {
      const result = await db.query(
        "SELECT * FROM products WHERE category_id = $1 ORDER BY product_id DESC",
        [category_id]
      );
      return res.json(result.rows);
    }

    const result = await db.query("SELECT * FROM products ORDER BY product_id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products WHERE product_id = $1", [
      req.params.id,
    ]);

    if (!result.rows.length) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch product" });
  }
});

module.exports = router;
