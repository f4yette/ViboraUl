const express = require("express");
const cors = require("cors");
require("dotenv").config();

function requireRouter(path) {
  const mod = require(path);
  const router = mod?.default ?? mod;
  if (typeof router !== "function") {
    throw new TypeError(
      `Route module "${path}" must export an Express router`
    );
  }
  return router;
}

const authRoutes = requireRouter("./auth");
const ordersRoutes = requireRouter("./orders");
const productsRoutes = requireRouter("./products");
const cartRoutes = requireRouter("./cart");
const contactRoutes = requireRouter("./contact");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});