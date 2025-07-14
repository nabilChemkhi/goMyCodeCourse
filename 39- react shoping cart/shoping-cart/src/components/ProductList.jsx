import React from "react";
import products from "../data/products";

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Nos Produits</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <div className="product-item">
              <img src={p.image} alt={p.name} className="product-image" />
              <div>
                <strong>{p.name}</strong> - {p.price}€
              </div>
              <button disabled>Ajouter</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
