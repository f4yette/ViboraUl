import React, { useEffect, useState } from "react";

export default function History() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const candidates = ["orderHistory", "orders", "order_history", "order-history"];
    let parsed = [];

    for (const key of candidates) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;

      try {
        const data = JSON.parse(raw);
        if (Array.isArray(data)) {
          parsed = data;
          break;
        }
      } catch {
        continue;
      }
    }

    if (parsed.length === 0) {
      const raw = localStorage.getItem("orderHistoryHTML");
      if (raw) {
        try {
          const data = JSON.parse(raw);
          if (Array.isArray(data)) parsed = data;
        } catch {}
      }
    }

    setRows(parsed);
  }, []);

  return (
    <main>
      <section id="order-history" className="page-section">
        <h1>Your Order History</h1>

        <table id="table" cellSpacing="15" cellPadding="10">
          <thead>
            <tr>
              <th>Description</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No orders yet.
                </td>
              </tr>
            ) : (
              rows.map((item, idx) => {
                const description =
                  item.description ?? item.name ?? item.title ?? "Item";
                const size = item.size ?? item.variant ?? item.option ?? "-";
                const price =
                  item.price ?? item.amount ?? item.total ?? item.cost ?? "-";

                return (
                  <tr key={idx}>
                    <td>{description}</td>
                    <td>{size}</td>
                    <td>{typeof price === "number" ? `£${price}` : price}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
