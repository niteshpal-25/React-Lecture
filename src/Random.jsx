import React from "react";

function Random() {
  let number = Math.random() * 100;
  return (
    <div>
      <h1 style={{ backgroundColor: "#776691" }}>
        Random number is: {Math.round(number)}
      </h1>
    </div>
  );
}

export default Random;
