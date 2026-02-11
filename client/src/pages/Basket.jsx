import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

export default function Basket() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiGet("/api/cart", { auth: true })
      .then(setItems)
      .catch(() => setErr("Please log in to view your basket."));
  }, []);

  if (err) return <main style={{ padding: 24 }}>{err}</main>;

  const total = items.reduce((sum, it) => sum + Number(it.base_price || 0) * Number(it.quantity || 0), 0);

  return (
    <main style={{ padding: 24 }}>
      <h1>Your Basket</h1>

      {items.length === 0 ? (
        <p>Basket is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((it) => (
              <li key={it.product_id}>
                {it.name} — qty {it.quantity} — £{Number(it.base_price || 0).toFixed(2)}
              </li>
            ))}
          </ul>

          <h3>Total: £{total.toFixed(2)}</h3>
        </>
      )}
    </main>
  );
}
