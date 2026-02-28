import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Rackets() {
  const navigate = useNavigate();

  const CATEGORY_ID = "352883ba-cd3f-11f0-982a-005056b707be";
  const API_BASE = import.meta.env.VITE_API_URL;

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [term, setTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setErrorMsg("");

      try {
        const url = `${API_BASE}/api/products?category_id=${encodeURIComponent(
          CATEGORY_ID
        )}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        if (!cancelled) {
          setAllProducts(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        if (!cancelled) setErrorMsg("Error loading rackets.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  function priceMatches(price, filter) {
    if (price === null || price === undefined || Number.isNaN(Number(price))) {
      return filter === "all";
    }

    const p = Number(price);

    switch (filter) {
      case "under50":
        return p < 50;
      case "50to75":
        return p >= 50 && p <= 75;
      case "75to100":
        return p > 75 && p <= 100;
      case "100to150":
        return p > 100 && p <= 150;
      case "over150":
        return p > 150;
      default:
        return true;
    }
  }

  const filteredProducts = useMemo(() => {
    const t = term.trim().toLowerCase();

    return allProducts.filter((p) => {
      const name = (p?.name || "").toLowerCase();
      const brand = (p?.brand || "").toString().toLowerCase();
      const level = (p?.level || "").toString().toLowerCase();
      const material = (p?.material || "").toString().toLowerCase();

      const matchesSearch = !t || name.includes(t) || brand.includes(t);

      const matchesBrand =
        brandFilter === "all" || brand === brandFilter.toLowerCase();

      const matchesLevel =
        levelFilter === "all" || level === levelFilter.toLowerCase();

      const matchesMaterial =
        materialFilter === "all" || material === materialFilter.toLowerCase();

      const matchesPrice = priceMatches(p?.base_price, priceFilter);

      return (
        matchesSearch &&
        matchesBrand &&
        matchesLevel &&
        matchesMaterial &&
        matchesPrice
      );
    });
  }, [allProducts, term, brandFilter, priceFilter, levelFilter, materialFilter]);

  return (
    <main>
      <div className="page-title">
        <h1>Rackets</h1>
      </div>

      <div className="searchbar">
        <input
          type="text"
          id="searchInput"
          placeholder="Search Products"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button id="searchBtn" onClick={() => {}}>
          OK
        </button>
      </div>

      <div className="filter-container">
        <div className="filter">
          <label htmlFor="racketbrands">Brand:</label>
          <select
            name="racketbrands"
            id="racketbrands"
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="bullpadel">Bullpadel</option>
            <option value="y1">Y1</option>
            <option value="nox">NOX</option>
            <option value="head">Head</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="price">Price:</label>
          <select
            name="price"
            id="price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="under50">Under £50</option>
            <option value="50to75">£50–75</option>
            <option value="75to100">£75–100</option>
            <option value="100to150">£100–150</option>
            <option value="over150">£150+</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="level">Level:</label>
          <select
            name="level"
            id="level"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="filter">
          <label htmlFor="material">Material:</label>
          <select
            name="material"
            id="material"
            value={materialFilter}
            onChange={(e) => setMaterialFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
          </select>
        </div>
      </div>

      <div className="products-container" id="productsContainer">
        {loading ? (
          <p>Loading rackets...</p>
        ) : errorMsg ? (
          <p>{errorMsg}</p>
        ) : filteredProducts.length === 0 ? (
          <p>No rackets found.</p>
        ) : (
          filteredProducts.map((product) => {
            const id = product?.product_id ?? product?.id;
            const name = product?.name || "Racket";
            const brand = (product?.brand || "").toString();
            const level = (product?.level || "").toString();
            const material = (product?.material || "").toString();

            const priceValue =
              product?.base_price !== null && product?.base_price !== undefined
                ? Number(product.base_price)
                : null;

            const imageUrl = product?.image_url || "/images/racket1.jpg";

            return (
              <div className="product-card" key={id ?? `${name}-${imageUrl}`}>
                <img src={imageUrl} alt={name} />
                <div className="product-info">
                  <div className="product-name">{name}</div>

                  <div className="product-meta">
                    {brand ? <span className="product-brand">{brand}</span> : null}
                    {level ? <span className="product-level">{level}</span> : null}
                    {material ? (
                      <span className="product-material">{material}</span>
                    ) : null}
                  </div>

                  <div className="product-bottom">
                    <div className="product-price">
                      {priceValue !== null && !Number.isNaN(priceValue)
                        ? `£${priceValue.toFixed(2)}`
                        : "Price on request"}
                    </div>

                    <button
                      className="product-details-btn"
                      onClick={() => {
                        if (id) navigate(`/product/${encodeURIComponent(id)}`);
                      }}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
