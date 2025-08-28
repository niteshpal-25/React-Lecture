import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </ul>
  );
}

export default ProductList;
