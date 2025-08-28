import React from "react";

function ProductItem({ name, price }) {
  return (
    <li>
      {name} -{" "}
      <span style={{ color: price < 2 ? "green" : "red" }}>
        ${price.toFixed(2)}
      </span>
    </li>
  );
}

export default ProductItem;
