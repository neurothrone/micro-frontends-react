import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "cart/CartContext";
import Products from "./Products";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <CartProvider>
      <Products viewedProduct={(p) => console.log(p)}/>
    </CartProvider>
  </BrowserRouter>
);
