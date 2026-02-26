const express = require("express");
const db = require("./db");
const verifyToken = require("./authMiddleware");

const router = express.Router();

router.use(verifyToken);

router.get("/", async (req, res) => {
  try {
    const userId = req.user.id;

    const cartRes = await db.query("SELECT cart_id FROM carts WHERE user_id = $1", [userId]);

    if (!cartRes.rows.length) {
      return res.json({ cartId: null, items: [] });
    }

    const cartId = cartRes.rows[0].cart_id;

    const itemsRes = await db.query(
      `SELECT 
         ci.cart_item_id,
         ci.product_id,
         ci.quantity,
         p.name,
         p.base_price
       FROM cart_items ci
       JOIN products p ON p.product_id = ci.product_id
       WHERE ci.cart_id = $1
       ORDER BY ci.cart_item_id DESC`,
      [cartId]
    );

    res.json({ cartId, items: itemsRes.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "productId and quantity are required" });
    }

    let cartRes = await db.query("SELECT cart_id FROM carts WHERE user_id = $1", [userId]);

    let cartId;
    if (!cartRes.rows.length) {
      const created = await db.query(
        "INSERT INTO carts (user_id) VALUES ($1) RETURNING cart_id",
        [userId]
      );
      cartId = created.rows[0].cart_id;
    } else {
      cartId = cartRes.rows[0].cart_id;
    }

    const existing = await db.query(
      "SELECT cart_item_id, quantity FROM cart_items WHERE cart_id = $1 AND product_id = $2",
      [cartId, productId]
    );

    if (existing.rows.length) {
      const cartItemId = existing.rows[0].cart_item_id;
      const newQty = Number(existing.rows[0].quantity) + Number(quantity);

      await db.query("UPDATE cart_items SET quantity = $1 WHERE cart_item_id = $2", [
        newQty,
        cartItemId,
      ]);

      return res.json({ message: "Cart item updated", cartItemId, quantity: newQty });
    }

    const inserted = await db.query(
      "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING cart_item_id",
      [cartId, productId, quantity]
    );

    res.status(201).json({
      message: "Item added to cart",
      cartItemId: inserted.rows[0].cart_item_id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add item to cart" });
  }
});

router.patch("/update/:cartItemId", async (req, res) => {
  try {
    const { cartItemId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: "quantity must be > 0" });
    }

    const updated = await db.query(
      "UPDATE cart_items SET quantity = $1 WHERE cart_item_id = $2 RETURNING cart_item_id, quantity",
      [quantity, cartItemId]
    );

    if (!updated.rows.length) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Cart item updated", item: updated.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update cart item" });
  }
});

router.delete("/remove/:cartItemId", async (req, res) => {
  try {
    const { cartItemId } = req.params;

    const deleted = await db.query(
      "DELETE FROM cart_items WHERE cart_item_id = $1 RETURNING cart_item_id",
      [cartItemId]
    );

    if (!deleted.rows.length) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Item removed from cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to remove item from cart" });
  }
});

module.exports = router;
