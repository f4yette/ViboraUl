import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGet, apiPost, getToken } from "../lib/api";

export default function ProductDetails() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiGet(`/api/products/${id}`)
      .then(setP)
      .catch((e) => setError(String(e)));
  }, [id]);

  async function addToCart() {
    setError("");
    try {
      if (!getToken()) {
        setError("Please login first.");
        return;
      }
      await apiPost("/api/cart/add", { product_id: id, quantity: 1 }, { auth: true });
      alert("Added to basket ✅");
    } catch (e) {
      setError("Failed to add to basket.");
    }
  }

  if (error) return <main style={{ padding: 24 }}>{error}</main>;
  if (!p) return <main style={{ padding: 24 }}>Loading…</main>;

  return (
    <main style={{ padding: 24, display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
      <img src="/images/racket1.jpg" alt="" style={{ width: "100%", borderRadius: 14 }} />

      <div>
        <h1>{p.name}</h1>
        <p>£{Number(p.base_price || 0).toFixed(2)}</p>
        <p>{p.description}</p>

        <button onClick={addToCart} style={{ padding: "10px 14px" }}>
          Add to basket
        </button>
      </div>
    </main>
  );
}
