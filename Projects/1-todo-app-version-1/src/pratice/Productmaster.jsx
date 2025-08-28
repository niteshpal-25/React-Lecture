import React, { useState } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Apple", price: 1.2, inStock: true },
  { id: 2, name: "Banana", price: 0.5, inStock: true },
  { id: 3, name: "Cherry", price: 2, inStock: false },
  { id: 4, name: "Date", price: 3, inStock: true },
];

function Productmaster() {
  const [products] = useState(productsData);

  // Filter products that are in stock
  const availableProducts = products.filter((product) => product.inStock);

  // Reduce: Calculate total price of available products
  const totalPrice = availableProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div>
      <h1>Shopping Cart Summary</h1>
      {/* Conditional rendering: Show message based on products availability */}
      {products.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ProductList products={availableProducts} />
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          {availableProducts.length === 0 && <p>Sorry, no items in stock.</p>}
        </>
      )}
    </div>
  );
}

export default Productmaster;
