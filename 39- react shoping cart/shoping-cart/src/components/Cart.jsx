import React from "react";

const Cart = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "12px",
        padding: "8px 18px",
        boxShadow: "0 2px 8px rgba(99,102,241,0.10)",
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>🛒</span>
      <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>
        Panier
      </span>
      <span
        style={{
          background: "#6366f1",
          color: "#fff",
          borderRadius: "50%",
          padding: "4px 10px",
          marginLeft: "8px",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        0
      </span>
    </div>
  );
};

export default Cart;
