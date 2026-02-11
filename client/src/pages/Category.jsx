import { useEffect, useMemo, useState } from "react";
import { apiGet } from "../lib/api";
import ProductCard from "../components/shop/ProductCard";

const CATEGORY_ID = {
  balls: "e6660920-cf7e-11f0-a24b-005056b707be",
  rackets: "352883ba-cd3f-11f0-982a-005056b707be",
  sportswear: "e6660501-cf7e-11f0-a24b-005056b707be",
  bags: null,
  shoes: null,
};

export default function Category({ type }) {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");

  const categoryId = CATEGORY_ID[type];

  useEffect(() => {
    const path = categoryId ? `/api/products?category_id=${categoryId}` : "/api/products";
    apiGet(path).then(setItems).catch(console.error);
  }, [type, categoryId]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((p) => (p.name || "").toLowerCase().includes(s));
  }, [items, q]);

  return (
    <main>
      <div className="container">
        <h1 style={{ textTransform: "capitalize" }}>{type}</h1>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products…"
          style={{ padding: 10, width: "min(520px, 100%)", margin: "10px 0 18px" }}
        />

        <div className="grid grid--cards">
          {filtered.map((p) => (
            <ProductCard key={p.product_id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
