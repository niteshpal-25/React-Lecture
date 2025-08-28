import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ color: count < 0 ? "red" : "green" }}>
        Count Of Clicked is: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Incr</button>
      <button onClick={() => setCount(count - 1)}>Decr</button>
    </div>
  );
}

export default Counter;
