import React from "react";
import ProductList from "./components/productList";
import Cart from "./components/Cart";
import "./App.css"; // 👈 Import du CSS

const App = () => {
  return (
    <>
      <nav>
        <span>Mini Shop 🛍️</span>
        <div>
          <Cart />
        </div>
      </nav>
      <main>
        <ProductList />
      </main>
    </>
  );
};

export default App;
