import React from "react";

function KgButton() {
  let Name = "Nitesh";
  // let n = 2;
  // let EvenOdd = n % 2 === 0 ? "Even" : "Odd";
  function EvenOdd(n) {
    if (n % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  return (
    <div>
      <h3>
        Hello, {Name} your code return {EvenOdd(2)} value
      </h3>
      <button>KgButton</button>
    </div>
  );
}

export default KgButton;
