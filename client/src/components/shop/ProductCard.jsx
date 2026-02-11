import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const price = Number(product?.base_price ?? 0).toFixed(2);

  return (
    <div className="card">
      <img className="card__img" src="/images/racket1.jpg" alt={product?.name || "Product"} />
      <div className="card__body">
        <div className="card__title">{product?.name}</div>
        <div className="card__row">
          <div className="card__price">£{price}</div>
          <Link className="btn" to={`/product/${product.product_id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
